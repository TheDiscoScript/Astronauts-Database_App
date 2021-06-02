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
import Editor from "./features/components/Editor";
import Footer from "./features/components/buildingBlocks/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/creator" component={Creator} />
          <Route exact path="/editor/:astronautId" component={Editor} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
