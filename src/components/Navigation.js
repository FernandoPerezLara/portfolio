import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import "../styles/navigation.scss";

import Home from "../pages/Home/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", function(e) {
      if ((isOpen === true) && (e.key === "Escape")) {
        setIsOpen(!isOpen);
      }
    });

    window.addEventListener("scroll", function() {
      if (isOpen === true) {
        setIsOpen(!isOpen);
      }
    });
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className={`menuButton ${isOpen ? "active" : null}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`mainNav ${isOpen ? "active" : null}`}>
        <div className="navList">
          <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <div className="mask" style={{ display: isOpen ? "unset" : null }} onClick={toggleMenu}></div>

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