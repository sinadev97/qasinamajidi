import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useGet = <Result>(fetch: () => Promise<AxiosResponse<Result>>) => {
  const [data, setData] = useState<Result>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch()
      .then((res) => {
        setData(res.data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const buildGetApiWithParams = <Params, Result>(
  fetch: (params: Params) => Promise<AxiosResponse<Result>>
) => {
  return (params: Params) => {
    return useGet(() => fetch(params));
  };
};

export const buildGetApiNoParams = <Result>(
  fetch: () => Promise<AxiosResponse<Result>>
) => {
  return () => {
    return useGet(fetch);
  };
};
