import './Home.css';
import tiago from './tiago_costa.webp'


function Home() {
    return (
     <div className="home">
         
         <div className="banner">
            < h2>Hello, I'm a full-stack developer based in Portugal</h2>
                <img src="./fullstack.webp" alt="FullStack" max-height="50%" width="50%" align="center" />
        </div>
           
         <div className="container1"> 
            <div className="containerDescription"> 
                <div><h1>Tiago Costa</h1>
                <p>JavaScript Full Stack Developer</p>
            </div>
            <div className="fullstack">
                <img src={tiago} alt="Tiago Costa" height="150px" style={{bordeRadius: '15px'}}/>
            </div>
           
        </div>
            <div>
                <p>Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for every challenge that I'm faced with.</p>
            </div>
        </div>
        <div className="skils">
            <h2>Languages I speak:</h2>
          <table className="table">
              <tr>
                <th>
                    Front-end Developer
                </th>
                <th>
                    Back-end Developer
                </th>
                <th>
                    Microsoft Tools
                </th>
              </tr>
              <td>
                <tr>HTML</tr>
                <tr>CSS</tr>
                <tr>JavaScript</tr>
               
              </td>
              <td>
                <tr>Javascript</tr>
        
              </td>
              <td>
                  <tr>
                      Microsoft Office
                  </tr>
                  <tr>
                      PowerBI
                  </tr>
              </td>
              <tr>
                  <th>Dev Tools:</th>
                  <th>Dev Tools:</th>
              </tr>
              <td>
                <tr>Node</tr>
                <tr>React</tr>
                <tr>Bootstrap</tr>
              </td>
              <td>
                <tr>Express</tr>
                <tr>MogoDB</tr>
                <tr>SQL</tr>
              </td>
               
          </table>
        </div>
        
    </div>
    )
}

export default Home;