import { createContext, useState } from 'react';import getTransactions from '../services/transactions/getTransactionsService';
;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [transaction, setTransaction] = useState({
    startDate: null,
    enddate: null,
    operatorName: null
  });

  const searchTransactions = async () => {
    console.log(`Nome do operador "${transaction.operatorName}" setado`)
    const transactions = await getTransactions();
    console.log(transactions);
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