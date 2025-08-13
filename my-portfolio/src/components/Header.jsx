import React from "react";
// import './Header.module.css';
export default function Header() {
    return (
      <header className="header">
        <div className="header__inner">
          <h1 className="logo"><a href="#home">JOMIHYUN</a></h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }