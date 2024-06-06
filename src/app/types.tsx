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
  question: string;
  questionNumber: number;
  answers: string;
  correctAnswer: number;
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
