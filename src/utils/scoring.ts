import { EXAM_QUESTIONS } from '../data/questions';
import { QuestionData, StudentAnswer, StudentProfile, StudentResultSummary } from '../types/cbt';

export function calculateExamResults(
  student: StudentProfile,
  answers: Record<number, StudentAnswer>,
  tabViolations: number,
  timeSpentSeconds: number,
  questions: QuestionData[] = EXAM_QUESTIONS
): StudentResultSummary {
  let correctCount = 0;
  let doubtfulCount = 0;
  let scoreSingle = 0;
  let scoreComplex = 0;
  let scoreMatching = 0;

  // Track breakdown by topic
  const topicMap: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    if (!topicMap[q.topic]) {
      topicMap[q.topic] = { total: 0, correct: 0 };
    }
    topicMap[q.topic].total += 1;

    const ans = answers[q.id];
    if (ans?.isDoubtful) {
      doubtfulCount += 1;
    }

    if (q.type === 'single_choice') {
      if (ans?.singleChoice && ans.singleChoice === q.correctAnswer) {
        correctCount += 1;
        scoreSingle += 1;
        topicMap[q.topic].correct += 1;
      }
    } else if (q.type === 'complex_choice') {
      const selected = ans?.complexChoice || [];
      const required = q.correctAnswers;
      // Full credit if matches exactly
      const isExactMatch =
        selected.length === required.length &&
        selected.every((val) => required.includes(val));

      if (isExactMatch) {
        correctCount += 1;
        scoreComplex += 1;
        topicMap[q.topic].correct += 1;
      } else {
        // partial credit if at least selected some correct and none wrong
        const correctSelected = selected.filter((s) => required.includes(s));
        const wrongSelected = selected.filter((s) => !required.includes(s));
        if (correctSelected.length > 0 && wrongSelected.length === 0) {
          const partial = correctSelected.length / required.length;
          scoreComplex += partial;
        }
      }
    } else if (q.type === 'matching') {
      const userMatches = ans?.matching || {};
      let matchingScoreForQ = 0;
      q.pairs.forEach((pair) => {
        if (userMatches[pair.id] === pair.correctMatchId) {
          matchingScoreForQ += 1 / q.pairs.length;
        }
      });
      scoreMatching += matchingScoreForQ;
      if (matchingScoreForQ >= 0.99) {
        correctCount += 1;
        topicMap[q.topic].correct += 1;
      }
    }
  });

  // Total possible raw points: 40 single + 10 complex + 10 matching = 60 points
  const rawScore = scoreSingle + scoreComplex + scoreMatching;
  const scaledScore = Math.min(100, Math.round((rawScore / 60) * 100));

  const totalAnswered = Object.values(answers).filter(
    (a) =>
      a.singleChoice !== undefined ||
      (a.complexChoice && a.complexChoice.length > 0) ||
      (a.matching && Object.keys(a.matching).length > 0)
  ).length;

  const topicBreakdown = Object.entries(topicMap).map(([topic, data]) => ({
    topic,
    total: data.total,
    correct: data.correct,
    percentage: Math.round((data.correct / data.total) * 100)
  }));

  return {
    student,
    totalQuestions: EXAM_QUESTIONS.length,
    totalAnswered,
    correctCount,
    doubtfulCount,
    score: scaledScore,
    scoreSingleChoice: Math.round((scoreSingle / 40) * 100),
    scoreComplex: Math.round((scoreComplex / 10) * 100),
    scoreMatching: Math.round((scoreMatching / 10) * 100),
    topicBreakdown,
    tabViolations,
    timeSpentSeconds,
    submittedAt: new Date().toISOString(),
    sentToSpreadsheet: false
  };
}
