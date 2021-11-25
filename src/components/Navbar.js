import './Navbar.css';

function NavBar() {
    return (
        <nav className="navbar" z-index={1}>
            <div className="links">
                <a href="/"><strong>Tiago Costa</strong></a>
                <a href="/components/about">About</a>
                <a href="/components/projects">Projects</a>
                <a href="/components/contacts">Contacts</a>
                <a href="https://github.com/tiagodfcosta" target="_blank" rel="noreferrer">My GitHub</a>


            </div>
        </nav>
    )
}

export default NavBar;
