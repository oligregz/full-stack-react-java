import React from 'react';
import GetTransactionsForm from '../../components/getTransactionsForm/GetTransactionsForm';
import ListTransactions from '../../components/listTransactions/ListTransactions';

const Transactions = () => {
  return (
    <div>
      <GetTransactionsForm />
      <ListTransactions />
    </div>
  );
}

export default Transactions;