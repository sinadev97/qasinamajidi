import {
  buildGetApiNoParams,
  buildGetApiWithParams,
  buildPostApi,
} from "../utils/api";
import axios from "./base.api";
import {
  AnswerCreateDto,
  AnswerDto,
  QuestionCreateDto,
  QuestionDto,
} from "./questions";

export const useQuestions = buildGetApiNoParams<QuestionDto[]>(
  "questions",
  () => axios.get("/questions")
);

export const useQuestionItem = buildGetApiWithParams<
  { qId: number },
  QuestionDto
>("questionItem", ({ qId }) => axios.get(`questions/${qId}`));

export const useAllAnswers = buildGetApiNoParams<AnswerDto[]>(
  "allAnswers",
  () => axios.get("/answers")
);

export const useAnswers = buildGetApiWithParams<{ qId: number }, AnswerDto[]>(
  "answers",
  ({ qId }) => axios.get("/answers", { params: { questionId: qId } })
);

export const useCreateQuestion = buildPostApi<QuestionCreateDto, void>((data) =>
  axios.post("/questions", data)
);

export const useCreateAnswer = buildPostApi<AnswerCreateDto, void>((data) =>
  axios.post("/answers", data)
);

export const useLikeAnswer = buildPostApi<
  { aId: number; data: AnswerCreateDto },
  void
>(({ aId, data }) => axios.put(`/answers/${aId}`, data));

export const useDisLikeAnswer = buildPostApi<
  { aId: number; data: AnswerCreateDto },
  void
>(({ aId, data }) => axios.put(`/answers/${aId}`, data));
