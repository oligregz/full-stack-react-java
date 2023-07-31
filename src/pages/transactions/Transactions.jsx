import React, { useState } from 'react';
import GetTransactionsForm from '../../components/getTransactionsForm/GetTransactionsForm';
import ListTransactions from '../../components/listTransactions/ListTransactions';

const Transactions = () => {
  const [isCadastrarClicked, setIsCadastrarClicked] = useState(false);

  const handleCadastrarClick = () => {
    setIsCadastrarClicked(true);
  };

  return (
    <div>
      <GetTransactionsForm onCadastrarClick={handleCadastrarClick} />
      {isCadastrarClicked && <ListTransactions />}
    </div>
  );
};

export default Transactions;