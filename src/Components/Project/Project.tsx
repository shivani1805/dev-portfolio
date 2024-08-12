import React from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import projectsData from './projects.json';
import { FaGithub} from 'react-icons/fa';
import  OpenInNew from '@mui/icons-material/OpenInNew'
import './Project.css'


function Project() {
  return (
    <div className='project-container'>
         <div className='project-header'>Projects</div>
      {projectsData.map((project) => (
        <div className='col-md-6' key={project.name}>
          <Card className='project-card' sx={{ display: 'flex', mb: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={project.image} 
              alt={project.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
              <CardContent>
                <Typography id='proj-name' component="div" variant="h5">
                  {project.name}
                </Typography>
                <Typography id='proj-desc' variant="body2" color="text.secondary" component="div" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {project.skills.split(',').map((skill) => (
                    <Chip
                      key={skill.trim()}
                      icon={<LocalAtmIcon />}
                      size="small"
                      label={skill.trim()}
                      color="success"
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <IconButton className='action-btn' href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub/>
                </IconButton>
                <IconButton className='action-btn' href={project.demo} target="_blank" rel="noopener noreferrer">
                <OpenInNew/>
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Project;
