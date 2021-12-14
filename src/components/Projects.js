import ProjectsCSS from './Projects.module.css';
import React, {useState} from 'react'


  function Projects () {

    const [siteOn, setsiteOn] = useState(false)
    const [garconetOn, setgarconetOn] = useState(false)

    const chageStateGarconet = () => {
        garconetOn === false ? setgarconetOn(true) : setgarconetOn(false);
        garconetOn === false ? setsiteOn(false) : setsiteOn(false);

    }
    console.log(garconetOn)
    console.log(siteOn)

    const chageStateSite = () => {
      siteOn === false ? setsiteOn(true) : setsiteOn(false);
      siteOn === false ?  setgarconetOn(false) : setgarconetOn(false);
      
    }
      
       return (
          <>
              <div className={ProjectsCSS.container}>
                <div className={ProjectsCSS.projects}>
                  <div className={ProjectsCSS.Container1} onClick={chageStateGarconet}> 
                      <img className={ProjectsCSS.img1} src="../garconetlogo.png" alt="Garconet" />
                      <h2>2021 - Garconet</h2>
                    </div>
                    <div className={ProjectsCSS.Container2} onClick={chageStateSite}>
                      <img className={ProjectsCSS.img2}  src="../logo192.png" alt="logo" />
                      <h2>2021 - website</h2>
                    </div>
                </div>
                
              </div>
              <div className={ProjectsCSS.teste}>
              {garconetOn && <div className={ProjectsCSS.um}><p>teste</p></div>}  
              {siteOn && <div className={ProjectsCSS.um}><p>teste2</p></div>}
              
            </div>
          </>
      )
  } 

export default Projects
