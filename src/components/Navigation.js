import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import "../styles/navigation.scss";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Home");
  const menuContainer = useRef(null);

  const keydownListener = e => {
    if ((isOpen === true) && (e.key === "Escape")) {
      setIsOpen(!isOpen);
    }
  };

  const mousedownListener = e => {
    if ((isOpen === true) && (!menuContainer.current.contains(e.target))) {
      console.log("asda");
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    document.title = title + " @ Fernando Perez";
  });

  useEffect(() => {
    window.addEventListener("keydown", keydownListener);

    return () => window.removeEventListener("keydown", keydownListener);
  });

  useEffect(() => {
    window.addEventListener("mousedown", mousedownListener);

    return () => window.removeEventListener("mousedown", mousedownListener);
  });

  return (
    <Router>
      <div ref={menuContainer}>
        <div className={`menuButton ${isOpen ? "active" : null}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav ref={menuContainer} className={`mainNav ${isOpen ? "active" : null}`}>
          <div className="navList" onClick={() => setIsOpen(false)}>
            <ul>
              <li className={(title === "Home") ? "active" : null}><Link to="/">Home</Link></li>
              <li className={(title === "About") ? "active" : null}><Link to="/about">About</Link></li>
              <li className={(title === "Skills") ? "active" : null}><Link to="/skills">Skills</Link></li>
              <li className={(title === "Contact") ? "active" : null}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" render={() => <Home setTitle={setTitle} />} />
        <Route path="/about" render={() => <About setTitle={setTitle} />} />
        <Route path="/skills" render={() => <Skills setTitle={setTitle} />} />
        <Route path="/contact" render={() => <Contact setTitle={setTitle} />} />
        <Route path="/404" render={() => <NotFound setTitle={setTitle} />} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}