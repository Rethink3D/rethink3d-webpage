import React from "react";
import { FaInstagram} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://www.instagram.com/_rethink3d/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" /> Instagram
          </a>
        </div>
        <div className="footer-rights">
          <p>© 2025 Rethink3D</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
