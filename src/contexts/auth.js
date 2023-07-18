import { createContext, useState } from 'react';;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [transaction, setTransaction] = useState({});

  return <AuthContext.Provider
    value={ 
      {
        transaction,
        setTransaction
      }
    }
  >{ children }</AuthContext.Provider>;
}