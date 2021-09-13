import axiosRequestHandler from './axiosRequestHandler';

const fakeRequest = async (
  withError: boolean,
  responseStatus: number
): Promise<any> => {
  const response = { data: 'my payload', status: responseStatus };

  return new Promise(resolve => {
    if (withError) {
      throw new Error('Erro na requisição');
    }
    resolve(response);
  });
};

describe('#ToolBox - Axios Request Handler', () => {
  it('should correctly handle request', async () => {
    const response = await axiosRequestHandler<string>(() => fakeRequest(false, 200));
    expect(response).toEqual({
      errors: false,
      data: 'my payload',
      status: 200,
      errorData: {},
      errorMessage: '',
    });
  });

  it('should correctly handle unexpected status', async () => {
    const response = await axiosRequestHandler(() => fakeRequest(false, 200), 201);
    expect(response).toEqual({
      errors: true,
      data: {},
      status: 200,
      errorData: {},
      errorMessage: 'Status de resposta inesperado',
    });
  });

  it('should correctly handle request error', async () => {
    const response = await axiosRequestHandler(() => fakeRequest(true, 500));
    expect(response).toEqual({
      errors: true,
      data: {},
      status: undefined,
      errorData: undefined,
      errorMessage: 'Problemas na requisição',
    });
  });
});
