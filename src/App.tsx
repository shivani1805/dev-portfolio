import React, { useRef } from 'react';
import './App.css';
import GradientBg from './Components/Common/GradientBg';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <GradientBg className="w-screen h-screen flex flex-col">
        <Hero aboutSectionRef={aboutSectionRef} />
        <About ref={aboutSectionRef} />
        <Footer />
        </GradientBg>

    </div>
  );
}

export default App;
