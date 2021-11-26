import NavbarCSS from './Navbar.module.css';
import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className={NavbarCSS.container}>
            <div className={NavbarCSS.links}>
                <Link  to="/"><strong>Tiago Costa</strong></Link>
                <Link  to="/components/About">About</Link>
                <Link  to="/components/Projects">Projects</Link>
                <Link  to="/components/Contacts">Contacts</Link>
                <a href="https://github.com/tiagodfcosta" target="_blank" rel="noreferrer">My GitHub</a>


            </div>
        </nav>
    )
}

export default NavBar;
