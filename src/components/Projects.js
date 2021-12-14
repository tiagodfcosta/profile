import ProjectsCSS from './Projects.module.css';
import React, {useState} from 'react'


  const Projects= () => {
    
    const [garconetOn, setgarconetOn] = useState(false) ;
    const [siteOn, setsiteOn] = useState(false) ;

    return (
        <>
            <div className={ProjectsCSS.container}>
              <div className={ProjectsCSS.projects}>
                <div className={ProjectsCSS.Container1} onClick={(garconetOn, siteOn) => garconetOn ? setgarconetOn(!garconetOn) && setsiteOn(siteOn) : setgarconetOn(garconetOn) && setsiteOn(!siteOn)} >
                    <img className={ProjectsCSS.img1} src="../garconetlogo.png" alt="Garconet" />
                    <h2>2021 - Garconet</h2>
                  </div>
                  <div className={ProjectsCSS.Container2} onClick={(garconetOn, siteOn) => setgarconetOn(!garconetOn) && setsiteOn(siteOn)}>
                    <img className={ProjectsCSS.img2}  src="../logo192.png" alt="logo" />
                    <h2>2021 - website</h2>
                  </div>
              </div>
              
            </div>
            <div className={ProjectsCSS.teste}>
            {garconetOn && <div className={ProjectsCSS.um}><p>teste</p></div>}  {siteOn && <div className={ProjectsCSS.um}><p>teste2</p></div>}
            
          </div>
        </>
    )
}

export default Projects
