import { Fragment } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <Router>
      <Fragment>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default RoutesApp;