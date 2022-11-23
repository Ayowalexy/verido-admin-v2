import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
} from "react";

interface app {
  id: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<app>({
  id: "",
  setUser: () => null
});

const AppContextProvider = ({ children }: any) => {
  const [id, setUser] = useState('');
  const value = { id, setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
