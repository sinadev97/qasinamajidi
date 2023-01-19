import axios from "./base.api";
import { questionsActions } from "../store/questions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { UIActions } from "../store/UI";
import { answersActions } from "../store/answers";

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
          dispatch(questionsActions.add(data));
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    },
    isLoading,
    isError,
  };
};

export const useFetchAnswers = ({ qId }: { qId: number }) => {
  const data = useSelector((state: RootState) => state.answers);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/answers", { params: { questionId: qId } })
      .then((res) => dispatch(answersActions.getAll(res.data)))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const useCreateAnswer = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return {
    mutate: (data: any, options?: { onSuccsess?: () => void }) => {
      setIsLoading(true);
      axios
        .post("/answers", data)
        .then((res) => {
          dispatch(answersActions.add(data));
          options?.onSuccsess?.();
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    },
    isLoading,
    isError,
  };
};

export const useFetchQuestionItem = ({ qId }: { qId: number }) => {
  const questions = useSelector((state: RootState) => state.questions);
  const data = questions.find((q) => q.id === qId);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/questions", { params: { questionId: qId } })
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

export const useLikeAnswer = () => {
  const AllAnswers = useSelector((store: RootState) => store.answers);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  return {
    mutate: (aId: number, options?: { onSuccsess?: () => void }) => {
      const answer = AllAnswers.find((a) => a.id === aId);
      setIsLoading(true);
      dispatch(answersActions.like(aId));
      axios
        .put(`/answers/${aId}`, answer)
        .then((res) => {
          options?.onSuccsess?.();
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    },
    isLoading,
    isError,
  };
};
export const useDisLikeAnswer = () => {
  const AllAnswers = useSelector((store: RootState) => store.answers);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  return {
    mutate: (aId: number, options?: { onSuccsess?: () => void }) => {
      const answer = AllAnswers.find((a) => a.id === aId);
      setIsLoading(true);
      dispatch(answersActions.disLike(aId));
      axios
        .put(`/answers/${aId}`, answer)
        .then((res) => {
          options?.onSuccsess?.();
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    },
    isLoading,
    isError,
  };
};
