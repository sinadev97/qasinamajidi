import axios from "./base.api";
import { buildGetApiWithParams, buildGetApiNoParams } from "../hooks/api";
import { AnswerDto, QuestionCreateDto, QuestionDto } from "./questions";
import { questionsActions } from "../store/questions";
import { Dispatch, useEffect, useState } from "react";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { UIActions } from "../store/UI";

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

export const useFetchAllQuestions = () => {
  const data = useSelector((state: RootState) => state.questions);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/questions")
      .then((res) => dispatch(questionsActions.getAll(res.data)))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const useCreateQuestion = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return {
    mutate: (data: any) => {
      setIsLoading(true);
      axios
        .post("/questions", data)
        .then((res) => {
          dispatch(UIActions.closeModal());
          dispatch(
            questionsActions.add({
              ...data,
              id: 10,
              createdTime: "",
              createdDate: "",
              answer: [],
            })
          );
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    },
    isLoading,
    isError,
  };
};
