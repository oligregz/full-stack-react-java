import { createContext, useState } from 'react';;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [transaction, setTransaction] = useState({
    startDate: null,
    enddate: null,
    operatorName: null
  });

  const searchTransactions = async () => {
    console.log(`Nome do operador "${transaction.operatorName}" setado`)
  }

  return <AuthContext.Provider
    value={ 
      {
        transaction,
        setTransaction,
        searchTransactions,
      }
    }
  >{ children }</AuthContext.Provider>;
}