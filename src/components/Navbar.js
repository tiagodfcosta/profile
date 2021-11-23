import './Navbar.css';

function NavBar() {
    return (
        <div className="FullContainerNav">
            <div className="Navbar">
                <p></p>
            </div>
            <div className="containerNav1">
                <h1>Hello, I'm a full-stack developer based in Portugal</h1>
            </div>
            <div className="containerNav2">           
               <img className="fullstack" src={"../fullstack.jpg"} alt={"Full Stack Developer"}/>
            </div>
        </div>
    )
}

export default NavBar;