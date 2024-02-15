import { useQuery } from '@tanstack/react-query';
import { ITask } from '../../types';
import { api, getUrl } from '../../api';

const getTasks = async (userId: string): Promise<ITask[]> => {
  const { data } = await api.get(getUrl('tasks'), {
    headers: {
      'user-id': userId,
    },
  });

  return data;
};

export const useTasks = (userId?: string) => {
  return useQuery({
    queryKey: ['tasks', userId],
    queryFn: () => {
      if (!userId) {
        return [];
      }

      return getTasks(userId);
    },
    retry: false,
    enabled: !!userId,
  });
};
