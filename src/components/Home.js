import './Home.css';


function Home() {
    return (
     <div className="home">
         <h2>Hello, I'm a full-stack developer based in Portugal</h2>
         <div className="container"> 
            <div className="containerDescription"> 
                <h1>Tiago Costa</h1>
                <p>JavaScript Full Stack Developer</p>
            </div>
            <div className="containerImg" >
                <img src="./tiago_costa.jpeg" alt="Tiago Costa"  height="150px" />
            </div>
         
         </div>
     </div>
    )
}

export default Home;