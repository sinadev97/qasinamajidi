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

const getQuestions = () => {
  return axios.get("/questions");
};

export const useAllQuestions = () => {
  const [data, setData] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getQuestions()
      .then((res) => setData(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
  };
};
