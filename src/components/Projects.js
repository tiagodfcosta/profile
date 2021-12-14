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
          <div className={ProjectsCSS.FullContainer}>
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
              <div className={ProjectsCSS.containerProjects}>
              {garconetOn && <div className={ProjectsCSS.Garconet}>
                  <img className={ProjectsCSS.img1} src="../garconetlogo.png" alt="Garconet" />
                  <div className={ProjectsCSS.GNcontent}>
                   <p>The team for this project/challenge was composed by three people. The problem that we defined was the waiting times in restaurants, when we want to order food or beverages and no one is coming to get our order. We decided to create a Web App for restaurants in which it has a QR Code Reader and it could 'read' in which table we were and we could start to ask for food and beverages with that same application. We had two front-ends, one back-end and a database (in which we had the menu and the requests for the day). The initial idea was to create everything using Next.js and to connect it with WebSockets... Unfortunately we weren't able to do it. So we opted to use React.js for front-end, Express.js for back-end and MongoDB as our database.</p> 
                    <div className={ProjectsCSS.App}>
                      <img className={ProjectsCSS.imgAPP} src="../garconet1.png" alt="Garconet1" />
                      <img className={ProjectsCSS.imgAPP} src="../garconet2.png" alt="Garconet2" />
                      <img className={ProjectsCSS.imgAPP} src="../garconet3.png" alt="Garconet3" />
                    </div>

                  </div>
                </div>}  
              {siteOn && <div className={ProjectsCSS.Site}>
                  <h2>2021 - website</h2>
                  <img className={ProjectsCSS.img2}  src="../logo192.png" alt="logo" />               
                </div>}
              
            </div>
          </div>
      )
  } 

export default Projects
