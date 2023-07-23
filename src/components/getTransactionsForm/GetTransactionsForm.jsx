import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import useAuth from "../../hooks/useAuth";
import DateBox from "../dateBox/DateBox";

const GetTransactionsForm = () => {
  const {
    transaction,
    setTransaction,
    searchTransactions
  } = useAuth();

  const handleNameOperatorChange = async (event) => {
    const value = event.target.value;
    setTransaction((prevState) => ({
      ...prevState,
      startDate: null,
      endDate: null,
      operatorName: value,
    }));
  };
  
  return (
    <div>
      <Input
        className="form-control"
        type="text"
        placeholder="Digite o nome do cliente operador"
        value={transaction.operatorName}
        onChange={handleNameOperatorChange}
      />
      <DateBox />
      <Button Type="button" Text="Cadastrar" onClick={searchTransactions} />
    </div>
  );
};

export default GetTransactionsForm;
