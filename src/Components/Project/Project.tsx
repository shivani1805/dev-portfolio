import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import { FaGithub, FaLongArrowAltRight } from 'react-icons/fa';
import OpenInNew from '@mui/icons-material/OpenInNew';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import projectsData from './Projects.json';


import './Project.css';

interface Project {
  _id: string;
  name: string;
  description: string;
  github: string;
  demo: string;
  image: string[];
  skills: string;
}

const Project = () => {
  return (
    <div className='project-container'>
      <div className='project-header'>Projects</div>
      <div className='project-sub-header'>Check out a selection of things I've built</div>
      {projectsData.map((project) => (
        <div className='col-md-6' key={project.name}>
          <Card className='project-card' sx={{ p: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay = {true}
                stopOnHover={true}
                emulateTouch
                swipeable>
                {project.image.map((image, index) => (
                   <a href={image} target="_blank" rel="noopener noreferrer">
                  <div key={index}>
                      <CardMedia
                        component="img"
                        sx={{
                          borderColor: '#9aa794 !important',
                          border: 'solid 1px',
                          borderRadius: '4px',
                          maxWidth: '100%',
                        }}
                        image={image}
                      />
                  
                  </div>
                  </a>
                ))}
              </Carousel>
            </Box>
            <Box className='card-content-container' sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }} >

              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography id='proj-name' component="div" variant="h5">
                    {project.name}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 2 }}>
                    {project.skills.split(',').map((skill) => (
                      <Chip
                        className='skill-pill'
                        key={skill.trim()}
                        size="small"
                        label={skill.trim()}
                        variant='outlined'
                        sx={{ fontSize:'small', marginRight: 1, padding: 1, color: '#40e0d0', borderColor: '#40e0d0', fontFamily: 'monospace' }}
                      />
                    ))}
                  </Box>
                </Box>
                <Typography id='proj-desc' variant="body2" color="text.secondary" component="div" sx={{ mt: 1, mb: 2, fontSize: '15px !important' }}>
                <span dangerouslySetInnerHTML={{ __html: project.description }} />
                </Typography>
               
              <CardActions sx={{marginTop:3.5}}>
                <IconButton className='action-btn' href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </IconButton>
                <IconButton className='action-btn' href={project.demo} target="_blank" rel="noopener noreferrer">
                  <OpenInNew />
                </IconButton>
              </CardActions>
               </CardContent>
            </Box>
          </Card>
        </div>
      ))}
       <a href="https://github.com/shivani1805?tab=repositories" className="view-more" target="_blank" rel="noopener noreferrer">
        View More <FaLongArrowAltRight className="view-more-icon" /></a>
    </div>
  );
}

export default Project;
