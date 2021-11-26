import NavbarCSS from './Navbar.module.css';

function NavBar() {
    return (
        <nav className={NavbarCSS.container}>
            <div className={NavbarCSS.links}>
                <a href="/"><strong>Tiago Costa</strong></a>
                <a href="/components/About">About</a>
                <a href="/components/Projects">Projects</a>
                <a href="/components/Contacts">Contacts</a>
                <a href="https://github.com/tiagodfcosta" target="_blank" rel="noreferrer">My GitHub</a>


            </div>
        </nav>
    )
}

export default NavBar;
