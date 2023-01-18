import axios from "axios";
import { useEffect, useState } from "react";
import { AnswerDto, QuestionDto } from "../types";

const getAllQuestions = () => {
  return axios.get("/questions");
};

export const useAllQuestions = () => {
  const [data, setData] = useState<QuestionDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllQuestions()
      .then((res) => setData(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
  };
};

const getQuestion = ({ qId }: { qId: string }) => {
  return axios.get(`/questions/${qId}`);
};

export const useQuestion = ({ qId }: { qId: string }) => {
  const [data, setData] = useState<QuestionDto>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getQuestion({ qId })
      .then((res) => setData(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
  };
};

const getAnswers = ({ qId }: { qId: number }) => {
  return axios.get(`/answers`, { params: { questionId: qId } });
};

export const useAnswers = ({ qId }: { qId: number }) => {
  const [data, setData] = useState<AnswerDto[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAnswers({ qId })
      .then((res) => setData(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
  };
};
