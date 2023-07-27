import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const ListTransactions = () => {
  const { transactions } = useAuth();

  useEffect(() => {}, [transactions]);

  return (
    <div>
      {transactions.message ? (
        <h3>{`${transactions.message}`}</h3>
      ) : (
        <>
          <div className="prices">
            {`Saldo total: 50.00 R$ - Saldo no período: 100,00 R$`}
          </div>
          <ul>
            {transactions.map((transaction) => (
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
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ListTransactions;

{
  /* <li key={transaction.id}>
  <p>ID: {transaction.id}</p>
  <p>Data de Transferência: {transaction.data_transferencia}</p>
  <p>Valor: {transaction.valor}</p>
  <p>Tipo: {transaction.tipo}</p>
  <p>
    {`Nome do Operador de Transação:
                ${transaction.nome_operador_transacao}`}
  </p>
  <p>Conta: {transaction.conta.nome_responsavel}</p>
</li>; */
}
