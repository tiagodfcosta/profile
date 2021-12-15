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
                   <p>Garçonet was born as the final projects for Bites4Future bootcamp, this project was developed by a team of three elements. The problem we propose to solve was reducing the amount of human interactions required for ordering on a restaurant/bar and has a bonus try to reduce the waiting times.
So we decide to create a Web App for the establishment in which the client would read a QR code existing in the table and that would start our App. <br />
This App is compose by two Front Ends, one Back End and a database (in which we had the menu and the requests for the day).<br />
The client would use one of the front end where he would find the menus to order  food and beverages once he finished the order the establishment will receive it on their front end app as a ticket.<br />
After being delivered the order to the client the establishment can mark the ticket as closed and the value will be add to the client bill. <br />
Once the client is done ordering and all the orders are checked as closed by the establishment  he can close the bill and pay by our app.<br />
The initial idea was to create all the app using Next.js and to connect everything  with WebSockets but unfortunately with the time pre-established by the professor  we weren't able to do it. So we opted to use React.js for front-end, Express.js for back-end and MongoDB as our database.
If interested you can check the con on my GitHub.</p> 
                    <div className={ProjectsCSS.App}>
                      <div className={ProjectsCSS.divAPP}>
                        <img className={ProjectsCSS.imgAPP} src="../garconet1.png" alt="Garconet1"/>  
                        <p>FrontEnd Client img.1</p> 
                      </div>
                      <div className={ProjectsCSS.divAPP}>
                        <img className={ProjectsCSS.imgAPP} src="../garconet2.png" alt="Garconet2" />
                        <p>FrontEnd Client img.2</p> 
                      </div>
                      <div className={ProjectsCSS.divAPP}>
                      <img className={ProjectsCSS.imgAPP} src="../garconet3.png" alt="Garconet3" />
                       <p>FrontEnd Establishment</p> 
                      </div>
                    </div>

                  </div>
                </div>}  
              {siteOn && <div className={ProjectsCSS.Site}>
                  <img className={ProjectsCSS.imgSite}  src="../fullstack.png" alt="logo" />
                  <h3>2021 - website</h3>
                  <p>This website was born by the necessity of after ending the Bytes4future bootcamp get out of the controlled environments and experience some of real world feeling.<br />
For some time i keeped working and learning in platforms like FreecodeCamp an CodeCademy to practice and developed my knowledge in coding but always playing by the safe course.<br />
So I embrace this challenged and got to work my main objective  is to try showing some of the things I'm capable to do and with that try to challenge me to go further. </p> 
                </div>}
              
            </div>
          </div>
      )
  } 

export default Projects
