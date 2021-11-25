import './Navbar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="links">
                <a href="/"><strong>Tiago Costa</strong></a>
                <a href="/components/about">About</a>
                <a href="/components//projects">Projects</a>
                <a href="/components//contacts">Contacts</a>
                <a href="https://github.com/tiagodfcosta" target="_blank">My GitHub</a>


            </div>
        </nav>
    )
}

export default NavBar;
