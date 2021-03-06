import AccordionCSS from './Accordion.module.css';
import React, { useState } from 'react';

const Accordion = ({ title, content, duration }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={AccordionCSS.accordion}>
      <div className={AccordionCSS.item} onClick={() => setIsActive(!isActive)}>
        <div className= {AccordionCSS.title}><strong>{title}</strong>
        {isActive ? '' : ''}
        </div>
      </div>
      {isActive && <div className={AccordionCSS.content}>{content}</div>}
      {isActive && <div className={AccordionCSS.content}>{duration}</div>}
    </div>
  );
};

export default Accordion;