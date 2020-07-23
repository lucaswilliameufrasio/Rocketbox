import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import BoxList from "./pages/BoxList";
import Box from "./pages/Box";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/list" component={BoxList} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
