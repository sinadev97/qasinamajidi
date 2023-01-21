export interface QuestionDto {
  id: number;
  title: string;
  description: string;
  createDate: number;
}

export interface QuestionCreateDto {
  title: string;
  description: string;
  createDate: number;
}

export interface AnswerDto {
  userName: string;
  id: number;
  questionId: number;
  description: string;
  createDate: number;
  likedCount: number;
  disLikedCount: number;
}

export interface AnswerCreateDto {
  userName: string;
  description: string;
  questionId: number;
  createDate: number;
  likedCount: number;
  disLikedCount: number;
}
