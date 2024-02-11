import { useContext } from 'react';
import { useTasks, useUser } from '../hooks/useApi';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { GlobalContext } from '../contexts/GlobalContext';

function Tasks() {
  const { setUser } = useContext(GlobalContext);
  const { item: userId } = useLocalStorage('userId');

  const { data: user } = useUser({
    id: userId,
    callback: setUser,
  });
  const { data: tasks = [] } = useTasks(user?.id);

  return (
    <div className="text-moss">
      <h1>TASKS</h1>
      <div>{tasks.map((task) => task.title)}</div>
    </div>
  );
}

export default Tasks;
