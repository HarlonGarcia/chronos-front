import { useMutation } from '@tanstack/react-query';
import { IAuthResponse } from '../../types';
import { LoginSchema } from '../../pages/Login';
import { api, getUrl } from '../../api';
import { jwtDecode } from 'jwt-decode';

const login = async (body: LoginSchema): Promise<IAuthResponse> => {
  const { data } = await api.post(getUrl('login'), body);
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (body: LoginSchema) => login(body),
    onSuccess({ accessToken }) {
      const { sub: userId } = jwtDecode(accessToken);
      localStorage.setItem('token', accessToken);

      if (!userId) {
        throw new Error('Invalid token');
      }

      localStorage.setItem('userId', userId);
    },
  });
};
