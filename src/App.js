import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//Problem is that it is overriding the script already there
import Navbar from "./demo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import task2 from "./pages/task2";
import Task1 from "./pages/task1";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/task1" component={Task1} />
          <Route path="/task2" component={task2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
