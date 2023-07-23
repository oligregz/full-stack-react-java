import React from "react";
import useAuth from "../../hooks/useAuth";

const ListTransactions = () => {
  const { transactions } = useAuth();

  if(transactions[0] === undefined) {
    return <h3>Waiting for transactions !</h3>
  } else {
    return (
      <div>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <p>ID: {transaction.id}</p>
              <p>Data de Transferência: {transaction.data_transferencia}</p>
              <p>Valor: {transaction.valor}</p>
              <p>Tipo: {transaction.tipo}</p>
              <p>
                {`Nome do Operador de Transação:
                ${transaction.nome_operador_transacao}`}
              </p>
              <p>Conta: {transaction.conta.nome_responsavel}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ListTransactions;
