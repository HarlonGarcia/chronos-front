import { useQuery } from '@tanstack/react-query';
import { IUser } from '../../types';
import { api } from '../../api';

interface IGetUserConfig {
  callback: (data: IUser) => void;
  id: string | null;
}

const getUser = async ({ id, callback }: IGetUserConfig): Promise<IUser> => {
  const { data } = await api.get(`/users/${id}`);

  callback(data);
  return data;
};

export const useUser = ({ id, callback }: IGetUserConfig) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => {
      if (!id) {
        return {} as IUser;
      }

      return getUser({ id, callback });
    },
    retry: false,
  });
};
