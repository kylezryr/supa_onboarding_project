export interface DifficultiesType {
  difficulty: string;
  type: string;
  navigation: string;
  level: number;
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
  passed: boolean;
}
