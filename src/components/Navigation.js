import React, { useEffect, useState } from "react";

import "../styles/navigation.scss";

import Home from "../pages/Home/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("nav");
    const mainNav = document.querySelector("nav.mainNav");
    const navItems = Array.prototype.slice.call(nav.querySelectorAll("div.navItem a"));
    const stack = document.querySelector("div.pageContainer");
    const pages = Array.prototype.slice.call(stack.children);
    const menuButton = document.querySelector("button.menuButton");

    const init = () => {
      pages[currentPage].style.zIndex = pages.length;

      pages.forEach(function(page) {
        page.style.position = "absolute";
      });

      setEvents();
    };

    const setEvents = () => {
      menuButton.addEventListener("click", function() {
        isMenuOpen ? closeMenu() : openMenu();
        setIsMenuOpen(!isMenuOpen);
      });
  
      navItems.forEach(function(item) {
        let pageName = item.getAttribute("href").slice(1);
  
        item.addEventListener("click", function(e) {
          e.preventDefault();
          openPage(pageName);
        });
      });
  
      document.addEventListener("keydown", function(e) {      
        if ((isMenuOpen === true) && (e.key === "Escape")) {
          closeMenu();
        }
      });
  
      pages.forEach(function(page) {
        let pageName = page.getAttribute("id");
    
        page.addEventListener("click", function(e) {
          if (isMenuOpen === true) {
            e.preventDefault();
            openPage(pageName);
          }
        });
      });
    };
  
    const openMenu = () => {
      let stackIndex, zIndex;
  
      menuButton.classList.add("open");
      mainNav.classList.add("open");
      stack.classList.add("open");
  
      pages.forEach(function (page, i) {
        stackIndex = i >= currentPage ? i - currentPage : pages.length - (currentPage - i);
        zIndex = pages.length - stackIndex;
  
        page.style.zIndex = zIndex;
        page.style.opacity = 1 - 0.1 * stackIndex;
        page.style.transform = "translate3d(0px, 75%, " + parseInt(-1 * 200 - 50 * stackIndex, 10) + "px)";
      });
    };
  
    const closeMenu = () => openPage();
  
    const openPage = (pageName) => {
      let pageToOpen = pageName ? document.getElementById(pageName) : pages[currentPage];

      setCurrentPage(pages.indexOf(pageToOpen));
    
      if (window.history.pushState) {
        window.history.pushState(null, null, pageToOpen.id);
      }
    
      pages.forEach(function(page, i) {
        if (i === currentPage) {
          page.style.transform = "translate3d(0px, 0%, 0px)";
          page.style.opacity = 1;
        } else {
          page.style.transform = "translate3d(0px, 100%, 0px)";
        }
      });
    
      menuButton.classList.remove("open");
      mainNav.classList.remove("open");
      stack.classList.remove("open");
    
      setIsMenuOpen(false);
    };

    init();
  });

  return (
    <div>
      <nav className="mainNav">
        <div className="navItem">
          <a href="#home">Home</a>
        </div>
        <div className="navItem">
          <a href="#about">About</a>
        </div>
        <div className="navItem">
          <a href="#skills">Skills</a>
        </div>
        <div className="navItem">
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="pageContainer">
        <div className="pageItem" id ="home"><Home /></div>
        <div className="pageItem" id="about"><About /></div>
        <div className="pageItem" id="skills"><Skills /></div>
        <div className="pageItem" id="contact"><Contact /></div>
      </div>

      <button className="menuButton">
        <span></span>
      </button>
    </div>
  );
}