import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../button/Button";

const ListTransactions = () => {
  const { transactions } = useAuth();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    if (startIndex >= transactions.length) {
      setStartIndex(transactions.length - itemsPerPage);
    }
  }, [startIndex, transactions.length]);

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      Math.min(prevStartIndex + itemsPerPage, transactions.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - itemsPerPage, 0));
  };

  const visibleTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

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
            {visibleTransactions.map((transaction) => (
              <div key={transaction.id}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Data</th>
                      <th scope="col">Valor</th>
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
          <div>
            <Button
              type={`button`}
              onClick={handlePrev}
              id={`prev-button`}
              Text={`Previous`}
              disabled={startIndex === 0}
            />
            <Button
              type={`button`}
              onClick={handleNext}
              id={`next-button`}
              Text={`Next`}
              disabled={startIndex + itemsPerPage >= transactions.length}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ListTransactions;
