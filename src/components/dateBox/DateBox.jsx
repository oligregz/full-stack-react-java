import React from "react";
import "./style/style.css";
import Input from "../../components/input/Input.jsx";

const DateBox = () => {

  const handleNameChange = () => {
    console.log("data")
  }

  return (
    <div>
      <Input
        className="form-control"
        type="date"
        placeholder="Data de Início"
        value='12/02/12'
        onChange={handleNameChange}
      />
    </div>
  );
};

export default DateBox;
