import React, { forwardRef, useEffect, useState } from 'react';
import './About.css'; 
import { Stack, Box, Typography } from '@mui/material';
import Html from '../Images/HTML5.png';
import Java from '../Images/Java.png';
import Sql from '../Images/SQL.png';
import Javascript from '../Images/JavaScript.png';
import Typescript from '../Images/TypeScript.png';
import Python from '../Images/Python.png';
import Bootstrap from '../Images/Bootstrap.png';
import Css from '../Images/CSS.png';
import Express from '../Images/Express.png';
import Materialui from '../Images/MaterialUI.png';
import Node from '../Images/Node.png';
import Reacticon from '../Images/React.png';
import Aws from '../Images/AWS.png';
import Azure from '../Images/Azure.png';
import Heroku from '../Images/Heroku.png';
import Docker from '../Images/Docker.png';
import K8s from '../Images/Kubernetes.png';
import Mongo from '../Images/MongoDB.png';
import Rabbitmq from '../Images/RabbitMQ.png';
import Postman from '../Images/Postman.png';
import Redis from '../Images/Redis.png';
import Jenkins from '../Images/Jenkins.png';
import Spring from '../Images/Spring.png';
import Swagger from '../Images/Swagger.png';
import Github from '../Images/GitHub.png';
import Bitbucket from '../Images/BitBucket.png';
import Jira from '../Images/Jira.png';
import Gradle from '../Images/Gradle.png';
import Maven from '../Images/Maven.png';
import Kibana from '../Images/Kibana.png';
import Grafana from '../Images/Grafana.png';
import Latex from '../Images/LaTeX.png';
import Confluence from '../Images/Confluence.png';
import Intellij from '../Images/IntelliJ.png';
import VSCode from '../Images/VSCode.png';

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
        <ul className='skills-category'>
          <li className={`category-item ${selectedCategory === 'code' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('code')}>
              Coding
          </li>
          <li className={`category-item ${selectedCategory === 'web' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('web')}>
              Web & Cloud
          </li>
          <li className={`category-item ${selectedCategory === 'tools' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('tools')}>
              Other Tools
          </li>
        </ul>
        {selectedCategory === 'code' && (
          <Stack className='skill-stack' direction="row">
            <Box className="skill-box">
              <img src={Java} className="skill-icon" />
              <span className='skill-text'>Java</span>
            </Box>
            <Box className="skill-box">
              <img src={Python}className="skill-icon" />
              <span className='skill-text'>Python</span>
            </Box>
            <Box className="skill-box">
              <img src={Javascript} className="skill-icon" />
              <span className='skill-text'>JavaScript</span>
            </Box>
            <Box className="skill-box">
              <img src={Typescript}  className="skill-icon" />
              <span className='skill-text'>TypeScript</span>
            </Box>
            <Box className="skill-box">
              <img src={Html}  className="skill-icon" />
              <span className='skill-text'>HTML</span>
            </Box>
            <Box className="skill-box">
              <img src={Sql} className="skill-icon" />
              <span className='skill-text'>SQL</span>
            </Box>
          </Stack>
        )}
        {selectedCategory === 'web' && (
          <Stack className='skill-stack' direction="row">
            <Box className="skill-box">
              <img src={Reacticon} className="skill-icon" />
              <span className='skill-text'>React.js</span>
            </Box>
            <Box className="skill-box">
              <img src={Node}  className="skill-icon" />
              <span className='skill-text'>Node.js</span>
            </Box>
            <Box className="skill-box">
              <img src={Azure} className="skill-icon" />
              <span className='skill-text'>Azure</span>
            </Box>
           
            <Box className="skill-box">
              <img style={{backgroundColor:'white',padding:'3px'}}  src={Aws} className="skill-icon" />
              <span className='skill-text'>AWS</span>
            </Box>
            <Box className="skill-box">
              <img src={Bootstrap} className="skill-icon" />
              <span className='skill-text'>Bootstrap</span>
            </Box>
            <Box className="skill-box">
              <img style={{backgroundColor:'white',padding:'3px'}}  src={Express} className="skill-icon" />
              <span className='skill-text'>Express</span>
            </Box>
           
            <Box className="skill-box">
              <img src={Css} className="skill-icon" />
              <span className='skill-text'>CSS</span>
            </Box>
            <Box className="skill-box">
              <img src={Materialui} className="skill-icon" />
              <span className='skill-text'>Material UI</span>
            </Box>
            <Box className="skill-box">
              <img src={Heroku} className="skill-icon" />
              <span className='skill-text'>Heroku</span>
            </Box>
          </Stack>
        )}
         {selectedCategory === 'tools' && (
          <Stack className='skill-stack' direction="row">
            <Box className="skill-box">
              <img src={Docker} className="skill-icon" />
              <span className='skill-text'>Docker</span>
            </Box>
            <Box className="skill-box">
              <img src={K8s}  className="skill-icon" />
              <span className='skill-text'>Kubernetes</span>
            </Box>
            <Box className="skill-box">
              <img src={Mongo} className="skill-icon" />
              <span className='skill-text'>MongoDB</span>
            </Box>
           
            <Box className="skill-box">
              <img src={Rabbitmq} className="skill-icon" />
              <span className='skill-text'>RabbitMQ</span>
            </Box>
            <Box className="skill-box">
              <img src={Postman} className="skill-icon" />
              <span className='skill-text'>Postman</span>
            </Box>
            <Box className="skill-box">
              <img src={Redis} className="skill-icon" />
              <span className='skill-text'>Redis</span>
            </Box>
           
            <Box className="skill-box">
              <img src={Jenkins} className="skill-icon" />
              <span className='skill-text'>Jenkins CI/CD</span>
            </Box>
            <Box className="skill-box">
              <img src={Spring} className="skill-icon" />
              <span className='skill-text'>SpringBoot</span>
            </Box>
            <Box className="skill-box">
              <img src={Swagger} className="skill-icon" />
              <span className='skill-text'>Swagger</span>
            </Box>
            <Box className="skill-box">
              <img src={Jira} className="skill-icon" />
              <span className='skill-text'>Jira</span>
            </Box>
            <Box className="skill-box">
              <img src={Gradle}  style={{backgroundColor:'white',padding:'3px'}}  className="skill-icon" />
              <span className='skill-text'>Gradle</span>
            </Box>
            <Box className="skill-box">
              <img src={Maven} className="skill-icon" />
              <span className='skill-text'>Apache Maven</span>
            </Box>
            <Box className="skill-box">
              <img src={Github}  style={{backgroundColor:'white',padding:'3px'}}  className="skill-icon" />
              <span className='skill-text'>GitHub</span>
            </Box>
            <Box className="skill-box">
              <img src={Bitbucket} className="skill-icon" />
              <span className='skill-text'>Bitbucket</span>
            </Box>
            <Box className="skill-box">
              <img src={Kibana} className="skill-icon" />
              <span className='skill-text'>Kibana</span>
            </Box>
            <Box className="skill-box">
              <img src={Grafana} className="skill-icon" />
              <span className='skill-text'>Grafana</span>
            </Box>
            <Box className="skill-box">
              <img src={Latex} style={{backgroundColor:'white',padding:'3px'}}  className="skill-icon" />
              <span className='skill-text'>LaTeX</span>
            </Box>
            <Box className="skill-box">
              <img src={Confluence} className="skill-icon" />
              <span className='skill-text'>Confluence</span>
            </Box>
            <Box className="skill-box">
              <img src={Intellij} className="skill-icon" />
              <span className='skill-text'>IntelliJ IDEA</span>
            </Box>
            <Box className="skill-box">
              <img src={VSCode} className="skill-icon" />
              <span className='skill-text'>VS Code</span>
            </Box>
          </Stack>
        )}
      </div>
    </div>
  );
});

export default About;
