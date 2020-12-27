import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "../styles/navigation.scss";

import Home from "../pages/Home/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}