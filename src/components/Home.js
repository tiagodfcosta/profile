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
                <p>
                Hi there! I'm a 29 years old full-stack developer based in Portugal. In March 2020, due to covid19 i lost my job, and as a half full glass person, i took a leap of faith and embrace coding as part of my life and for 10 weeks I took part in the intensive programming Boot Camp of Bytes4Future. <br/>
                In this program I learned to write JavaScript (ES6) code, I also learned the basis of topics such as Object Oriented Programming, Data Structures, Algorithms, Functional Programming and Basic Software Principles. <br/>
                Extremely motivated to constantly develop my skills and grow personally and professionally. I am confident in my ability to come up with interesting ideas for every challenge that I'm faced with.
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
                    <p>Node, Express, MongoDB, SQL</p>
        
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Home;