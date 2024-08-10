import React, { forwardRef, useState } from 'react';
import './About.css'; 
import { Chip, Stack } from '@mui/material';

const About = forwardRef<HTMLDivElement>((props, ref) =>{
  const [selectedCategory, setSelectedCategory] = useState('code'); 

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
 

return (
  <div ref={ref} id="about-section" className="about-container">
    <div className="about-left">
      <div className='about-header'>Beyond <span className="code">&lt;Code/&gt;</span></div>
      <p style={{paddingTop:"20px"}}>
      My journey into computer science began unexpectedly when I found myself in the wrong class at school — 
      and I've been captivated ever since. Over the past three years, I've had the privilege of developing software solutions for
       leading MNCs in the automation and banking, financial services, and insurance sectors.
      </p>
      <p>
      Fast forward to today, I'm pursuing a graduate degree in Computer Science at <span style={{color:'rgb(64, 224, 208)'}}>Northeastern University</span> in Boston,
       where I also contribute as an undergraduate teaching assistant. My primary focus now is on achieving certification in
        AWS cloud technology to navigate the ever-expanding and dynamic tech landscape, while actively <span style={{color:'rgb(64, 224, 208)'}}>seeking opportunities</span> at
         a company where learning and innovation intersect.
      </p>
      <p>
      Outside the realm of coding, you'll often find me at the gym, experimenting with new recipes in the kitchen
      or exploring Boston's vibrant culinary scene.
      </p>
    </div>
    <div className="about-right">
      <div className='about-header'>Key Skills</div>
      <ul className='skills'>
      <li className={`skill-item ${selectedCategory === 'code' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('code')}>
            Programming
          </li>
      <li className={`skill-item ${selectedCategory === 'tools' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('tools')}>
            Tools & Frameworks
      </li>
      </ul>
      {selectedCategory === 'code' && (
          <Stack direction="row" spacing={1}>
          <Chip label="Java" color="primary" variant='outlined'/>
          <Chip label="SQL" color="success" variant='outlined'/>
          <Chip label="JavaScript" color="success" />
          <Chip label="HTML" color="success" />
          <Chip label="CSS" color="success" />
          <span style={{backgroundColor:"rgb(17,34,64)", borderRadius:"0"}} className="badge">Primary</span>
        </Stack>
        )}
    </div>
  </div>
);
});

export default About;
