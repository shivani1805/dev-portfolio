import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


function Footer() {
  return (
    <div  className="footer">
    <footer>
      <div className="footer-content container">
        <div className="built-by">
     
          <a href="https://github.com/shivani1805/dev-portfolio" target="_blank" rel="noopener noreferrer" className="built-by-link">
            Developed by Shivani Sharma
          </a>
        </div>
        <div className="glow-logo">
              <a href="mailto:shivani.sharma702@gmail.com" className="social-link">
                <AttachEmailOutlinedIcon/>
              </a>
              <a href="https://www.linkedin.com/in/sharmashivanii/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/shivani1805" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/shivanisharma18" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
        </div>
      </div>
      <KeyboardDoubleArrowUpIcon className='scroll-up-icon' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </footer>
    </div>
  );
}

export default Footer;
