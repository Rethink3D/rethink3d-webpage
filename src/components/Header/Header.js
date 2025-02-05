// src/components/Header/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-and-name">
        <div>
          <img src="logo.svg" alt="Rethink3D Logo" />
        </div>
        <div className="company-name">
          <h1>Rethink3D</h1>
        </div>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#quem-somos">Quem somos</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
