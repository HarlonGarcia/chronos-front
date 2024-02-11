import { useQuery } from '@tanstack/react-query';
import { IUser } from '../../types';
import api from '../../api';

const getUser = async (id: string): Promise<IUser> => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  });
};
