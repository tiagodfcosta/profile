import ProjectsCSS from './Projects.module.css';
import React from 'react'

function Projects() {
    return (
      <div className={ProjectsCSS.container}>
          <div className={ProjectsCSS.title}><h1>Projects</h1></div>
      </div>
    )
}

export default Projects;