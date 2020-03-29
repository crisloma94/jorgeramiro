import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container"></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects/:id" exact component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
