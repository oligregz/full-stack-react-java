import React, { useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';

const ClientForm = () => {

  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setName(value);
  };

  const handleRegister = async () => {
    console.log("Crie o client")
  }

  return (
    <div>
      <Input
        className="form-control"
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleNameChange}
      />
      <Button
        type="button"
        text="Cadastrar"
        onClick={handleRegister}
      />
    </div>
  );
}

export default ClientForm;