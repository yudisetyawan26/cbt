import { QuestionData, SingleChoiceQuestionData, ComplexChoiceQuestionData, MatchingQuestionData } from '../types/cbt';

/**
 * Fisher-Yates array shuffle helper
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const OPTION_KEYS: Array<'A' | 'B' | 'C' | 'D' | 'E'> = ['A', 'B', 'C', 'D', 'E'];

/**
 * Shuffles options for single-choice questions, complex-choice questions, and matching targets.
 * For single-choice:
 *  - Shuffles the text of options
 *  - Re-labels them as A, B, C, D, E
 *  - Updates correctAnswer to point to the new key corresponding to the original correct option.
 */
export function randomizeExamQuestions(questions: QuestionData[]): QuestionData[] {
  return questions.map((q) => {
    if (q.type === 'single_choice') {
      const singleQ = q as SingleChoiceQuestionData;
      // Find the correct text from original correctAnswer key
      const correctOption = singleQ.options.find((opt) => opt.key === singleQ.correctAnswer);
      const correctText = correctOption ? correctOption.text : '';

      // Shuffle the options
      const shuffledOptionsRaw = shuffleArray(singleQ.options);

      // Re-assign keys A, B, C, D, E in order
      let newCorrectKey: 'A' | 'B' | 'C' | 'D' | 'E' = 'A';
      const newOptions = shuffledOptionsRaw.map((opt, idx) => {
        const key = OPTION_KEYS[idx] || 'A';
        if (opt.text === correctText) {
          newCorrectKey = key;
        }
        return {
          key,
          text: opt.text
        };
      });

      return {
        ...singleQ,
        options: newOptions,
        correctAnswer: newCorrectKey
      } as SingleChoiceQuestionData;
    }

    if (q.type === 'complex_choice') {
      const complexQ = q as ComplexChoiceQuestionData;
      return {
        ...complexQ,
        options: shuffleArray(complexQ.options)
      } as ComplexChoiceQuestionData;
    }

    if (q.type === 'matching') {
      const matchQ = q as MatchingQuestionData;
      return {
        ...matchQ,
        targets: shuffleArray(matchQ.targets)
      } as MatchingQuestionData;
    }

    return q;
  });
}
