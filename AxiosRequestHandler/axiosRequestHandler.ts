/**
 * Generic method to handle Axios requests so you don't need to 
 * treat each request with try/catch 
 *
 * @param axiosRequest an method that executes some axios request
 * @param validStatus a number for the status you are waiting for
 * @returns a payload with:
 *  errors: boolean that shows if the request got errors
 *  data: the payload from the request
 *  status: the http status code returned from the request
 *  errorData: the payload from an error
 *  errorMessage: generic pt-br friendly error message
 */

import { AxiosResponse } from 'axios';

interface ResponseType<T> {
  errors: boolean;
  data: T;
  status: number;
  errorData?: any;
  errorMessage: string;
}

const errorForStatus = {
  400: 'Request inválida',
  401: 'Não autorizado',
  404: 'Não encontrado',
  500: 'Erro no servidor',
  504: 'Esgotado tempo limite da requisição',
  default: 'Problemas na requisição',
  unexpected: 'Status de resposta inesperado',
};

const requestHandler = async <T>(
  axiosRequest: () => Promise<AxiosResponse<T>>,
  validStatus = 200
): Promise<ResponseType<T>> => {
  const response = {
    errors: true,
    data: {} as T,
    status: 504,
    errorData: {},
    errorMessage: '',
  };

  try {
    const { data, status } = await axiosRequest();
    response.status = status;
    if (status === validStatus) {
      response.data = data;
      response.errors = false;
    }
    if (status !== validStatus) {
      response.errorMessage = errorForStatus.unexpected;
    }
  } catch (error: any) {
    response.status = error.response?.status;
    response.errorData = error.response?.data;
    response.errorMessage = error.response?.status
      ? errorForStatus[error.response?.status]
      : errorForStatus.default;
  }

  return response;
};

export default requestHandler;
