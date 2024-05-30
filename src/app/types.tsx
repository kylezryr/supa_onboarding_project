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