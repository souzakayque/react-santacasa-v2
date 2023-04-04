import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ContractPlan from "../pages/ContractPlan";
import Plan from "../pages/Plan";
import Unit from "../pages/Unit";
import Simulate from "../pages/Simulate";
import LGPD from "../pages/LGPD";

import "./router.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/falar-com-corretor"
          exact
          element={<ContractPlan />}
        ></Route>
        <Route path="/planos" exact element={<Plan />}></Route>;
        <Route path="/unidades" exact element={<Unit />}></Route>;
        <Route path="/simular" exact element={<Simulate />}></Route>;
        <Route path="/LGPD" exact element={<LGPD />}></Route>;
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
