import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import useAuth from "../../hooks/useAuth";
import DateBox from "../dateBox/DateBox";

const GetTransactionsForm = ({ onCadastrarClick }) => {
  const { transaction, setTransaction, searchTransactions } = useAuth();

  const handleNameOperatorChange = async (event) => {
    const value = event.target.value;
    setTransaction((prevState) => ({
      ...prevState,
      startDate: null,
      endDate: null,
      operatorName: value,
    }));
  };

  const handleCadastrarClick = () => {
    onCadastrarClick();
    searchTransactions();
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
      <Button
        type="button"
        Text="Cadastrar"
        onClick={handleCadastrarClick}
      />
    </div>
  );
};

export default GetTransactionsForm;
