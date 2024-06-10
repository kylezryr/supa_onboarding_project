export interface DifficultiesType {
  difficulty: string;
  type: string;
  navigation: string;
  level: number;
  total_points: number;
  current_points: number;
}

export interface SkillsType {
  type: string;
  navigation: string;
}

export interface QuestionsType {
  id: number;
  lesson_id: number;
  question_number: number;
  question_text: string;
  answers: string[];
  correct_answer: number;
  practice: boolean;
  points: number;
}

export interface LessonsType {
  id: number;
  rank_id: number;
  difficulty: string;
  type: string;
  level: number;
  lesson_number: number;
  title: string;
  description: string;
  total_points: number;
  current_points: number;
  passed: boolean;
  unlocked: boolean;
}

export interface RanksType {
  id: number;
  type: string;
  difficulty: string;
  level: number;
  total_points: number;
  current_points: number;
  unlocked: boolean;
  completed: boolean;
}

export interface ScoresType {
  type: string;
  sum_total: number;
  sum_current: number;
}

export interface PointsType {
  questionNumber: number;
  points: number;
}
