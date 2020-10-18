import React from "react";
import "./resources/styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Nav from "./components/Nav";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
