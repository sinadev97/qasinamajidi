export interface QuestionDto {
  id: number;
  title: string;
  description: string;
}

export interface QuestionCreateDto {
  title: string;
  description: string;
}

export interface AnswerDto {
  userName: string;
  questionId: number;
  description: string;
}
