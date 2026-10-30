export type ClassName =
  | 'XI NKPI 1'
  | 'XI NKPI 2'
  | 'XI TJKT 1'
  | 'XI TJKT 2'
  | 'XI TJKT 3'
  | 'XI TJKT 4'
  | 'XI TAV'
  | 'XI TEI'
  | 'XI Busana 1'
  | 'XI Busana 2';

export const CLASS_OPTIONS: ClassName[] = [
  'XI NKPI 1',
  'XI NKPI 2',
  'XI TJKT 1',
  'XI TJKT 2',
  'XI TJKT 3',
  'XI TJKT 4',
  'XI TAV',
  'XI TEI',
  'XI Busana 1',
  'XI Busana 2'
];

export type QuestionType = 'single_choice' | 'complex_choice' | 'matching';

export type CognitiveLevel = 'C2' | 'C3' | 'C4' | 'C5';

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  topic: string;
  subtopic: string;
  sourcePageRef: string;
  cognitiveLevel: CognitiveLevel;
  stimulus?: string;
  question: string;
}

export interface SingleChoiceQuestionData extends BaseQuestion {
  type: 'single_choice';
  options: {
    key: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
}

export interface ComplexChoiceQuestionData extends BaseQuestion {
  type: 'complex_choice';
  options: {
    id: string;
    text: string;
  }[];
  correctAnswers: string[]; // IDs of options that are correct
  explanation: string;
}

export interface MatchingPair {
  id: string;
  premise: string; // Left side
  correctMatchId: string; // Corresponding Right side ID
}

export interface MatchingTarget {
  id: string;
  text: string; // Right side
}

export interface MatchingQuestionData extends BaseQuestion {
  type: 'matching';
  pairs: MatchingPair[];
  targets: MatchingTarget[];
  explanation: string;
}

export type QuestionData = SingleChoiceQuestionData | ComplexChoiceQuestionData | MatchingQuestionData;

export interface StudentProfile {
  name: string;
  className: ClassName;
  absentNumber: string;
  token: string;
  loginTime: string;
}

export interface StudentAnswer {
  singleChoice?: 'A' | 'B' | 'C' | 'D' | 'E';
  complexChoice?: string[];
  matching?: Record<string, string>; // premiseId -> targetId
  isDoubtful?: boolean; // Ragu-ragu
  answeredAt?: number;
}

export interface StudentResultSummary {
  student: StudentProfile;
  totalQuestions: number;
  totalAnswered: number;
  correctCount: number;
  doubtfulCount: number;
  score: number; // 0 - 100
  scoreSingleChoice: number;
  scoreComplex: number;
  scoreMatching: number;
  topicBreakdown: {
    topic: string;
    total: number;
    correct: number;
    percentage: number;
  }[];
  tabViolations: number;
  timeSpentSeconds: number;
  submittedAt: string;
  sentToSpreadsheet: boolean;
  spreadsheetRowId?: string;
}

export interface TeacherSubmissionRecord extends StudentResultSummary {
  id: string;
}
