import HomeCSS from './Home.module.css';
import photo from './tiago_costa.webp'
import React from 'react'


function Home() {
    return (
     <div className={HomeCSS.container}>
         
   
           
        <div className={HomeCSS.containerName}> 
            <div className={HomeCSS.name}> 
                <div><h1>Tiago Costa</h1>
                    <p>JavaScript Full Stack Developer</p>
                </div>
                <div className={HomeCSS.fullstack}>
                    <img className= {HomeCSS.photo} src={photo} alt="Tiago Costa"/>
                </div>
           
            </div>
            <div className={HomeCSS.description}>
                <p>Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for every challenge that I'm faced with.
                <br/>Recentemente realizei um Boot Camp de Programação, organizado numa parceria entre a Fundação Aga Khan e a Câmara Municipal de Sintra, com o objectivo de me tornar um Junior Full Stack Developer.
                <br/>Sou uma pessoa dinâmica, motivado e procuro constantemente desenvolver-me tanto a nível profissional como pessoal.
                <br/>Encaro com muito entusiasmo a possibilidade de integrar a vossa equipa futuramente.

                </p>
            </div>
        </div>
        <div >
            <div className={HomeCSS.containerSkills}>
                <div className={HomeCSS.frontEnd}>
                    <h3>Front End</h3>
                    <p>HTML, CSS, JavaScript</p>
                    <h4>Dev Tools:</h4>
                    <p>React, Bootstrap</p>
                </div>

                <div className={HomeCSS.backEnd}>
                    <h3>Back End</h3>
                    <p>JavaScript</p>
                    <h4>Dev Tools:</h4>
                    <p>Node, Express, MogoDB, SQL</p>
        
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Home;