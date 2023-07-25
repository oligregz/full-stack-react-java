import React, { createContext, useState } from "react";
import getTransactions from "../services/transactions/getTransactionsService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState({
    startDate: null,
    endDate: null,
    operatorName: null,
  });

  const searchTransactions = async () => {
    try {
      const transactionsService = await getTransactions();
      setTransactions(transactionsService);
      return transactions;
    } catch (error) {
      console.error("Error fetching transactions: ", error);
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        transaction,
        setTransaction,
        transactions,
        searchTransactions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
