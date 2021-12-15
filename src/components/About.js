import AboutCSS from './About.module.css';
import React from 'react';
import Accordion from './Accordion.js';
import { education } from '../content/education';
import { certifications } from '../content/certefication.js';
import { experience } from '../content/experience.js';

const About = () => {
    return (
        <div className={AboutCSS.container}>     
                 <div className={AboutCSS.Accordion}>
                    <h2 className={AboutCSS.title}>Education</h2>
                    {education.map(({ title, content, duration }) => (
                    <Accordion title={title} content={content} duration={duration} />
                    ))}
                                
                    <h2 className={AboutCSS.title}>Certification</h2>
                    {certifications.map(({ title, content, duration }) => (
                        <Accordion title={title} content={content} duration={duration} />
                    ))}
                
                    <h2 className={AboutCSS.title}>Work Experience</h2>
                    {experience.map(({ title, content, duration }) => (
                    <Accordion title= {title} content={content} duration={duration} />
                    ))}
                </div>
            </div>
    );
}



export default About;