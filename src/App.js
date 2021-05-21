import "./App.css";
import React from "react";
// Router import
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//Components
import Home from "./features/components/Home";
import Creator from "./features/components/Creator";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/creator" render={() => <Creator />} />
          <Route
            exact
            path="/editor/:astronautId"
            render={() => <div>editor</div>}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
