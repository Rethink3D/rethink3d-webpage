import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <img src={logo} alt="Rethink3D Logo" />
        <h1 className="company-name">Rethink3D</h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav ref={menuRef} className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="faq" smooth={true} duration={500} onClick={closeMenu}>
              Quem somos
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500} onClick={closeMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} duration={500} onClick={closeMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
