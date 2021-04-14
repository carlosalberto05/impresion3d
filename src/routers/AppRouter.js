import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Litofanias from "../components/body/Litofanias";
import Placas from "../components/body/Placas";
import Otros from "../components/body/Otros";
import Inicio from "../components/body/Inicio";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/litofanias" component={Litofanias} />
        <Route exact path="/placas" component={Placas} />
        <Route exact path="/otros" component={Otros} />

        <Route exact path="/" component={Inicio} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
