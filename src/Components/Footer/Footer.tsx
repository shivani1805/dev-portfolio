import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="glow-logo container text-center">
        <ul>
          <li>
        <a href="https://www.linkedin.com/in/sharmashivanii/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin />
        </a>
        </li>
        <li>
        <a href="https://github.com/shivani1805" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub />
        </a>
        </li>
        <li>
        <a href="https://www.instagram.com/shivanisharma18" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram />
        </a>
        </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
