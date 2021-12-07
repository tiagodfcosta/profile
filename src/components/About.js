import AboutCSS from './About.module.css';
import React from 'react';
import Accordion from './Accordion.js';
import { education } from '../content/education';
import { certifications } from '../content/certefication.js';
import { experience } from '../content/experience.js';

const About = () => {
    return (
        <div className={AboutCSS.container}>
                <div className={AboutCSS.container}>
                        
                        <div className={AboutCSS.Accordion}>
                            <h2>Education</h2>
                         {education.map(({ title, content, duration }) => (
                         <Accordion title={title} content={content} duration={duration} />
                          ))}
                        </div>
                        <div className={AboutCSS.container}>
                            <h2>Certefication</h2>
                            {certifications.map(({ title, content, duration }) => (
                                <Accordion title={title} content={content} duration={duration} />
                            ))}
                        </div> 
                        <div className={AboutCSS.container}>
                            <h2>Experience</h2>
                            {experience.map(({ title, content, duration }) => (
                            <Accordion title= {title} content={content} duration={duration} />
                            ))}
                        </div>
                </div>
        </div>
    );
}



export default About;