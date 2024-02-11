import { createContext, useState } from 'react';
import { IUser } from '../types';

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const GlobalContext = createContext<ContextType>({
  user: null,
  setUser: () => {},
});

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<ContextType['user']>(null);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
