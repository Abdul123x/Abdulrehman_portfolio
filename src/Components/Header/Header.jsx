import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  // =========change background heaaaaader=========//
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  // =========toggle menu=========//
  const [toggle, showmenu] = useState();
  const [activenav, setactivenav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Abdul Rehman
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setactivenav("#home")}
                className={
                  activenav === "#home" ? "nav__link active-link" : "nav__link "
                }
              >
                <i className="uil uil-home   nav__icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" onClick={() => setactivenav("#about")}
                className={
                  activenav === "#about" ? "nav__link active-link" : "nav__link "
                }>
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills"  onClick={() => setactivenav("#skills")}
                className={
                  activenav === "#skills" ? "nav__link active-link" : "nav__link "
                }>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services"  onClick={() => setactivenav("#services")}
                className={
                  activenav === "#services" ? "nav__link active-link" : "nav__link "
                }>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" onClick={() => setactivenav("#portfolio")}
                className={
                  activenav === "#portfolio" ? "nav__link active-link" : "nav__link "
                }>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact"  onClick={() => setactivenav("#contact")}
                className={
                  activenav === "#contact" ? "nav__link active-link" : "nav__link "
                }>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-multiply  nav__close"
            onClick={() => showmenu(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showmenu(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
