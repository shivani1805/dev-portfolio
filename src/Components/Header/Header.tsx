import React, { useState, useEffect } from 'react';
import './Header.css';
import Hamburger from 'hamburger-react';


interface HeaderProps {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  projectSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
  heroSectionRef: React.RefObject<HTMLDivElement>;
}

function Header({
  aboutSectionRef,
  projectSectionRef,
  contactSectionRef,
  heroSectionRef
}: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  const handleClick = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    e.preventDefault();
    scrollToRef(ref);
    setActiveSection(sectionName);
    if (window.innerWidth < 768) {
        setIsMenuOpen(false);
    } 
 
  };

  const handleScroll = () => {
    const sections = [
      { ref: heroSectionRef, name: 'home' },
      { ref: aboutSectionRef, name: 'about' },
      { ref: projectSectionRef, name: 'projects' },
      { ref: contactSectionRef, name: 'contact' },
    ];

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(({ ref, name }) => {
      if (ref.current && scrollPosition >= ref.current.offsetTop && scrollPosition < ref.current.offsetTop + ref.current.offsetHeight) {
        setActiveSection(name);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
    <div className="backdrop" onClick={() => setIsMenuOpen(false)}></div>
      <header className='primary-header'>
        <div className="header-content container">
          <div className="header-logo">
           {/* <a>S</a> */}
          </div>
          <div className="component-container">
          <a  href="" 
            onClick={(e) => handleClick(e, heroSectionRef, 'home')} 
            className={`component-link ${activeSection === 'home' || activeSection==='' ? 'active-nav' : ''}`}>
        Home
        </a>
        <a  href="#" 
            onClick={(e) => handleClick(e, aboutSectionRef, 'about')} 
            className={`component-link ${activeSection === 'about' ? 'active-nav' : ''}`}> 
        About
        </a>
        <a  href="#" 
            onClick={(e) => handleClick(e, projectSectionRef, 'projects')} 
            className={`component-link ${activeSection === 'projects' ? 'active-nav' : ''}`}>
        Projects
        </a>
        <a  href="#" 
            onClick={(e) => handleClick(e, contactSectionRef, 'contact')} 
            className={`component-link ${activeSection === 'contact' ? 'active-nav' : ''}`}>
        Contact
        </a>
        <a href="https://dev-portfolio-img.s3.us-east-2.amazonaws.com/Shivani-Sharma-Resume.pdf" target='_blank'  rel="noopener noreferrer" className="component-link resume-btn">
        Resume
        </a>
            
          </div>
        </div>
      </header>
      <header className='secondary-header'>
        <div className='collapsed-menu-btn'>
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <a  href="" 
            onClick={(e) => handleClick(e, heroSectionRef, 'home')} 
            className={`menu-link ${activeSection === 'home' || activeSection==='' ? 'active-nav' : ''}`}>
        Home
        </a>
        <a  href="#" 
            onClick={(e) => handleClick(e, aboutSectionRef, 'about')} 
            className={`menu-link ${activeSection === 'about' ? 'active-nav' : ''}`}> 
        About
        </a>
        <a  href="#" 
            onClick={(e) => handleClick(e, projectSectionRef, 'projects')} 
            className={`menu-link ${activeSection === 'projects' ? 'active-nav' : ''}`}>
        Projects
        </a>
        <a  href="#" 
            onClick={(e) => handleClick(e, contactSectionRef, 'contact')} 
            className={`menu-link ${activeSection === 'contact' ? 'active-nav' : ''}`}>
        Contact
        </a>
        <a href="https://dev-portfolio-img.s3.us-east-2.amazonaws.com/Shivani-Sharma-Resume.pdf" target='_blank'  rel="noopener noreferrer" className="component-link resume-btn">
        Resume
        </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
