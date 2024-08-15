import React, { useRef } from 'react';
import './App.css';
import GradientBg from './Components/Common/GradientBg';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';


function App() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <GradientBg className="w-screen h-screen flex flex-col">
        <Hero aboutSectionRef={aboutSectionRef} />
        <About ref={aboutSectionRef} />
        <Project/>
        <Contact/>
        
        </GradientBg>

    </div>
  );
}

export default App;
