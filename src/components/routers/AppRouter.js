import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../Header";
import Litofanias from "../body/Litofanias";
import Placas from "../body/Placas";
import Otros from "../body/Otros";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/litofanias" component={Litofanias} />
        <Route exact path="/placas" component={Placas} />
        <Route exact path="/otros" component={Otros} />

        <Redirect to="/litofanias" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
