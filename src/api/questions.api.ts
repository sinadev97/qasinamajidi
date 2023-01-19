import axios from "./base.api";
import { buildGetApiWithParams, buildGetApiNoParams } from "../hooks/api";
import { AnswerDto, QuestionDto } from "./questions";

export const useAllQuestions = buildGetApiNoParams<QuestionDto[]>(() =>
  axios.get("/questions")
);

export const useQuestionItem = buildGetApiWithParams<
  { qId: number },
  QuestionDto
>(({ qId }) => axios.get(`/questions/${qId}`));

export const useAnswers = buildGetApiWithParams<{ qId: number }, AnswerDto[]>(
  ({ qId }) => axios.get("/answers", { params: { questionId: qId } })
);
