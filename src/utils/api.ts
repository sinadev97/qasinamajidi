import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { questionsActions } from "../store/cacheSlice";

export const useGetApi = <Result>(
  cacheKey: string | string[],
  fetch: () => Promise<AxiosResponse<Result>>,
  options?: { onSuccess?: () => void }
) => {
  const data: Result = useSelector(
    (store: RootState) => store.cache[`${cacheKey}`]
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch()
      .then((res) => {
        dispatch(
          questionsActions.saveData({
            cacheKey,
            data: res.data,
          })
        );
        options?.onSuccess?.();
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

export const buildGetApiNoParams = <Result>(
  cacheKey: string,
  fetch: () => Promise<AxiosResponse<Result>>,
  options?: { onSuccess?: () => void }
) => {
  const useSpecificGet = () => {
    return useGetApi<Result>(cacheKey, fetch, options);
  };

  return useSpecificGet;
};

export const buildGetApiWithParams = <Params, Result>(
  cacheKey: string,
  fetch: (params: Params) => Promise<AxiosResponse<Result>>,
  options?: { onSuccess?: () => void }
) => {
  const useSpecificGet = (params: Params) => {
    return useGetApi<Result>(
      [cacheKey, JSON.stringify(params)],
      () => fetch(params),
      options
    );
  };

  return useSpecificGet;
};

export const usePostApi = <Params, Result>(
  fetch: (params: Params) => Promise<AxiosResponse<Result>>,
  options?: { onSuccess?: () => void }
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutate = (params: Params, options?: { onSuccess?: () => void }) => {
    setIsLoading(true);
    fetch(params)
      .then(() => {
        options?.onSuccess?.();
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return {
    mutate,
    isLoading,
    isError,
  };
};

export const buildPostApi = <Params, Result>(
  fetch: (params: Params) => Promise<AxiosResponse<Result>>,
  options?: { onSuccess?: () => void }
) => {
  const useSpecificPost = () => {
    return usePostApi<Params, Result>(fetch, options);
  };

  return useSpecificPost;
};
