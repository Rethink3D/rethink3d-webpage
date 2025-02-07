import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referência para o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="logo-and-name">
        <img src="logo.svg" alt="Rethink3D Logo" />
        <h1 className="company-name">Rethink3D</h1>
      </div>

      {/* Botão de Menu (Hamburguer) */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu de Navegação */}
      <nav ref={menuRef} className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#quem-somos" onClick={closeMenu}>
              Quem somos
            </a>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
