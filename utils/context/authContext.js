import { createContext, useContext } from 'react';

const authContext = createContext();

const AuthContextProvider = authContext.Provider;

const useAuthContext = () => {
  const value = useContext(authContext);
  return value;
};

export { AuthContextProvider, useAuthContext };
