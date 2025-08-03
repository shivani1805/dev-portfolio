import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { Button } from 'react-bootstrap';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import myPhoto from '../Images/Shivani_Sharma_Photo.jpg';
import awsCert from '../Images/aws-certified-solutions-architect-associate.png';
import azureCert from '../Images/microsoft-certified-azure-fundamentals.png';

interface HeroProps {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(({ aboutSectionRef, contactSectionRef }, ref) => {
  const [hovered, setHovered] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null); // reference for the badge container

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div ref={ref} className="container-fluid d-flex align-items-center min-vh-100 hero-section">
      <div className="row w-100 align-items-center">
        <div className="col-lg-6 col-12 text-left ps-lg-5 text-center text-lg-start">
          <div className="intro-head">
            <h1 className="greeting">Hi,</h1>
            <h2 className="name">I'm <span style={{ color: 'rgb(12, 148, 134)' }}>Shivani</span>.</h2>
          </div>
          <p className="tagline">
            A software developer writing clean & efficient code to create software solutions that scale and perform.
          </p>
          <div className="button-group mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <Button id="glow-contact-btn" variant="outlined" onClick={scrollToContact}>
              Contact Me
            </Button>
            <Button
              id="glow-about-btn"
              variant="outlined"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={scrollToAbout}
            >
              More About Me
              <span className={`icon-transition ${hovered ? 'icon-down' : 'icon-right'}`}>
                <KeyboardArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>

        <div className="col-lg-6 col-12 d-flex flex-column align-items-center position-relative mt-5 mt-lg-0">
          <img
            src={myPhoto}
            alt="Shivani"
            className="img-fluid hero-image"
          />
          <div className="badge-container mt-4 d-flex justify-content-center gap-4 flex-wrap">
          <a
            href="https://www.credly.com/badges/5f38870b-c9c1-4df7-b3d2-208e8f1e2e2a/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={awsCert}
              alt="AWS Certified Solutions Architect – Associate"
              className="credly-badge"
              style={{ width: '70px', height: '70px' }}
            />
          </a>

          <a
            href="https://www.credly.com/badges/55e121eb-b68e-4c56-a39c-110bfe73ce9d/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={azureCert}
              alt="Microsoft Certified Azure Fundamentals"
              className="credly-badge"
              style={{ width: '70px', height: '70px' }}
    />
  </a>
</div>


        </div>
      </div>
    </div>
  );
});

export default Hero;
