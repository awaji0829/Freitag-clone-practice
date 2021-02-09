import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Fmain from "./Pages/Freitag/Fmain";
import CategoryPage from "./Pages/Freitag/CategoryPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Fmain} />
          <Route exact path="/categorypage" component={CategoryPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
