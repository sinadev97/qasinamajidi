import axios from "axios";
import { useEffect, useState } from "react";

export interface Question {
  id: number;
  user: {
    name: string;
    avatarSrc: string;
  };
  title: string;
  description: string;
  createdTime: string;
  createdDate: string;
  answer: string[];
}

const getAllQuestions = () => {
  return axios.get("/questions");
};

export const useAllQuestions = () => {
  const [data, setData] = useState<Question[]>([]);
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
  const [data, setData] = useState<Question>();
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
