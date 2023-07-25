import React from "react";

const BoxTransactions = () => {
  return (
    <div>
      <div className="prices">
        {`Saldo total: 50.00 R$ - Saldo no período: 100,00 R$`}
      </div>
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
            <th scope="row">{`Data`}</th>
            <td>{`asd`}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">{`Data`}</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">{`Data`}</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">{`Data`}</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons"></div>
    </div>
  );
};

export default BoxTransactions;
