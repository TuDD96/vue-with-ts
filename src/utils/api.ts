/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import AuthToken from "./token";
import { SERVER_BASE_URL } from "./urls";
import logger from "@/utils/log";
import axiosRetry from "axios-retry";
import ErrorType from "@/definition/ErrorType";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosRetry(http, {
  retries: 3,
  retryDelay: (retryCount: number) => retryCount * 2000,
  retryCondition: (error) => {
    // handle case refresh token here

    return error?.response?.status === ErrorType.HTTP_503;
  },
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = AuthToken.getToken();
    if (token) {
      const axiosRequestConfig: AxiosRequestConfig = {
        headers: {
          Authorization: "locale",
        },
      };
      config = axiosRequestConfig;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const postRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .post(requestUrl, { ...data })
    .then((res: AxiosResponse) => {
      logger.requestLog("POST", requestUrl, data, res);
      resolve(res);
    })
    .catch((error: AxiosError) => {
      logger.requestLog("POST", requestUrl, data, error);
      reject(error);
    });
};

const getRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .get(requestUrl, { ...data })
    .then((res: AxiosResponse) => {
      logger.requestLog("GET", requestUrl, { ...data }, res);
      resolve(res);
    })
    .catch((error: AxiosError) => {
      logger.requestLog("GET", requestUrl, data, error);
      reject(error);
    });
};

const putRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .put(requestUrl, { ...data })
    .then((res: AxiosResponse) => {
      logger.requestLog("PUT", requestUrl, data, res);
      resolve(res);
    })
    .catch((error: AxiosError) => {
      logger.requestLog("PUT", requestUrl, data, error);
      reject(error);
    });
};

const patchRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .patch(requestUrl, { ...data })
    .then((res: AxiosResponse) => {
      logger.requestLog("PATCH", requestUrl, data, res);
      resolve(res);
    })
    .catch((error: AxiosError) => {
      logger.requestLog("PATCH", requestUrl, data, error);
      reject(error);
    });
};

const deleteRequest = (
  url: string,
  data: any,
  resolve: (arg0: AxiosResponse<any, any>) => void,
  reject: (arg0: any) => void
) => {
  const requestUrl = SERVER_BASE_URL + url;

  http
    .delete(requestUrl, { ...data })
    .then((res: AxiosResponse) => {
      logger.requestLog("DELETE", requestUrl, data, res);
      resolve(res);
    })
    .catch((error: AxiosError) => {
      logger.requestLog("DELETE", requestUrl, data, error);
      reject(error);
    });
};

export default {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
};
