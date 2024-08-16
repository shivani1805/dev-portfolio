import React, { useRef } from 'react';
import './App.css';
import GradientBg from './Components/Common/GradientBg';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';


function App() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <GradientBg className="w-screen h-screen flex flex-col">
      <Header
          aboutSectionRef={aboutSectionRef}
          projectSectionRef={projectSectionRef}
          contactSectionRef={contactSectionRef}
          heroSectionRef={heroSectionRef}
        />
        <Hero aboutSectionRef={aboutSectionRef} ref={heroSectionRef} />
        <About ref={aboutSectionRef} />
        <Project ref={projectSectionRef} />
        <Contact ref={contactSectionRef} />
        
        </GradientBg>

    </div>
  );
}

export default App;
