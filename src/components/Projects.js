import ProjectsCSS from './Projects.module.css';
import React from 'react'


function Projects() {
    return (
     <div className={ProjectsCSS.container}>
       <div className={ProjectsCSS.projects}>
        <div className={ProjectsCSS.Container1}>
            <img className={ProjectsCSS.img1} src="../garconetlogo.png" alt="Garconet" />
            <h2>2021 - Garconet</h2>
          </div>
          <div className={ProjectsCSS.Container2}>
            <img className={ProjectsCSS.img2}  src="../logo192.png" alt="logo" />
            <h2>2021 - website</h2>
          </div>
       </div>
     </div>
    )
}

export default Projects;