import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';
import { Button } from 'react-bootstrap';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface HeroProps {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ aboutSectionRef }) => {
  const [hovered, setHovered] = useState(false);


  const scrollToSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (

    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <div className='intro-head text-4xl'>
          Hi, I am Shivani<span className='period-col text-4xl'>.</span>
        </div>
        <div className='type-look mt-3'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Software Engineer')
                .pauseFor(400)
                .deleteAll()
                .typeString('AWS Cloud Practitioner')
                .pauseFor(400)
                .deleteAll()
                .typeString('Full Stack Developer')
                .pauseFor(400)
                .deleteAll()
                .typeString('LeetCode Enthusiast')
                .pauseFor(400)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              cursor: '_',
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>
        <div className='mt-5'>
          <Button
            id="glow-about-btn"
            variant='outlined'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={scrollToSection}
          >
            More About Me
            <span className={`icon-transition ${hovered ? 'icon-down' : 'icon-right'}`}>
              <KeyboardArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
