import ContactsCSS from './Contacts.module.css';
import React from 'react'

function Contacts() {
    return (
      <div className={ContactsCSS.container}>
          <p><strong>email:</strong> tiagodf.costa@gmail.com</p>
          <p><a href="https://www.linkedin.com/in/tiago-costa-558054169/" target="_blank" rel="noopener noreferrer"> <strong>LinkedIn</strong></a></p>
          <p><a href="https://github.com/tiagodfcosta" target="_blank" rel="noopener noreferrer"> <strong>GitHub</strong></a></p>

      </div>
    )
}

export default Contacts;
