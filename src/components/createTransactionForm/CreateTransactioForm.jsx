import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";


const handleNameChange = async () => {
  console.log("Foi")
}
const CreateTransactioForm = () => {
  return (
    <div>
      <Input
        className="form-control"
        type="text"
        placeholder="Digite seu nome"
        value={}
        onChange={handleDateChange}
      />
      <Input
        className="form-control"
        type="text"
        placeholder="Digite o valor da transferência"
        value={}
        onChange={handleNameChange}
      />
      <select
        className="form-control"
        value={}
        onChange={handleNameChange}
      >
        <option value="DEPOSITO">DEPOSITO</option>
        <option value="TRANSFERENCIA">TRANSFERENCIA</option>
        <option value="SAQUE">SAQUE</option>
      </select>
      <Input
        className="form-control"
        type="text"
        placeholder="Digite seu nome"
        value={}
        onChange={handleNameChange}
      />
      <Input
        className="form-control"
        type="text"
        placeholder="Operadore de destino"
        value={}
        onChange={handleNameChange}
      />
      <Input
        className="form-control"
        type="text"
        placeholder="Digite seu nome"
        value={}
        onChange={handleNameChange}
      />
      <Button Type="button" Text="Cadastrar" onClick={handleRegister} />
    </div>
  );
};

export default CreateTransactioForm;
