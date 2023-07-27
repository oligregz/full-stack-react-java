import React from "react";

const BoxTransactions = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Valencia</th>
            <th scope="col">Tipo</th>
            <th scope="col">Nome do operador transacionado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{`${transaction.data_transferencia}`}</th>
            <td>{`${transaction.valor}`}</td>
            <td>{`${transaction.tipo}`}</td>
            <td>{`${transaction.nome_operador_transacao}`}</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons"></div>
    </div>
  );
};

export default BoxTransactions;
