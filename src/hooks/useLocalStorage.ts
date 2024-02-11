import { useState } from 'react';

export const useLocalStorage = (key?: string) => {
  const [item, setItem] = useState<string | null>(
    key ? localStorage.getItem(key) : null,
  );

  const get = (key: string) => {
    return localStorage.getItem(key);
  };

  const set = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const save = (key: string, value: string) => {
    set(key, value);
    setItem(value);
  };

  const update = (key: string) => {
    setItem(get(key));
  };

  const clear = () => {
    setItem(null);
    localStorage.clear();
  };

  return { item, get, set, save, update, clear };
};
