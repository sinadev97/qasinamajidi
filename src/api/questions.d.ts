export interface UserDto {
  name: string;
  avatarSrc: string;
}

export interface QuestionDto {
  id: number;
  user: UserDto;
  title: string;
  description: string;
  createdTime: string;
  createdDate: string;
  answer: string[];
}

export interface AnswerDto {
  id: number;
  questionId: number;
  description: string;
  user: UserDto;
}
