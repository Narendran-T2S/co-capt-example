import axios from 'axios';

export const API_ENDPOINTS = {
  CARD_PURCHASE: '/v1/card/issue',
  CLIENT_CONFIG: '/v1/client/config',
};

export const BASE_API_CONFIG = {
  baseURL: '',
  requestTimeOut: 20000,
  maximumRequestTimeOut: 40000,
};

const axiosInstance = axios.create({
  baseURL: BASE_API_CONFIG.baseURL?.PROD,
  timeout: BASE_API_CONFIG.requestTimeOut,
  headers: { 'Content-Type': 'application/json' },
});

export const successHandler = (response) => {
  return response;
};

export const errorHandler = (error) => {
  let errorObject = {
    type: '',
    message: '',
    code: '',
  };

  const data = error?.response?.data;
  const erroCode = data?.error?.code;
  console.group('Error Details');
  console.log(error);
  console.log(data);
  console.log(erroCode);
  console.groupEnd();
  if (erroCode == 'FH_ISSUE_000') {
    error.response.data.error.message =
      'Something Went Wrong, Please Try Again Later';
  }
  return error;
};

// Add interceptors
// axiosInstance.interceptors.request.use((request) => requestHandler(request));
// axiosInstance.interceptors.response.use(
//     (response) => successHandler(response),
//     (error) => errorHandler(error)
// );

export { axiosInstance };
