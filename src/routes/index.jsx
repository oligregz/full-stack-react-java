import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Transactions from "../pages/transactions/Transactions";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/transactions' element={<Transactions />} />
          <Route path='*' element={ <Home /> }/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;