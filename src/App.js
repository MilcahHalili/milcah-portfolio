import React, { Component } from 'react';
import './App.css';

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
  stickyNav()
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  // Get the navbar
  var navbar = document.getElementById("navbar");
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div id="navbar">
          <span>Milcah Halili Centeno</span>
          <a href="#summary">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/MilcahHalili">GitHub</a>
          <a href="https://www.linkedin.com/in/milcah-halili">LinkedIn</a>
          <a href="https://profiles.generalassemb.ly/profiles/milcah-halili">GA Profile</a>
        </div>
        <div className="App-container">
          <div>
            <header>
              <div className="App-circle-div">
                <div className="App-circle">
                  <img alt="Milcah-Halili-headshot" src="https://i.imgur.com/dSsQgZF.png" />
                </div>
              </div>
            </header>
            <div>
              <h3><strong className="App-caps"><a id="summary">SUMMARY</a></strong></h3>
              <div className="summary-div">
                <p>
                  Hi, my name is Milcah. I'm a full stack web developer building with <strong>M</strong>ongoDB, <strong>E</strong>xpress, <strong>R</strong>eactJS, <strong>N</strong>ode.js stack and more.
                  My mission is to build apps that inspire action.
                  Technology can help people be more happy, healthy, and connected to the ones they love, and this is what motivates me to become better as an engineer every day.
                </p>
                <p>
                  Recently, I graduated from General Assembly's Web Development Immersive in Little Tokyo, Los Angeles.
                  My background as a cannabis wellness advisor, caregiver of elders, dog walker, filmmaker, freelance performer, and freelance writer inform my work as a web developer.
                </p>
              </div>
            </div>
            <div>
              <h3><strong className="App-caps"><a id="skills">SKILLS</a></strong></h3>
              <table>
                <tbody>
                  <tr>
                    <th>Languages</th>
                    <th>Libraries</th>
                    <th>Databases</th>
                    <th>Frameworks</th>
                    <th>Tools</th>
                  </tr>
                  <tr>
                    <td>HTML</td>
                    <td>React</td>
                    <td>MongoDB</td>
                    <td>Express</td>
                    <td>AWS</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>jQuery</td>
                    <td>PostgreSQL</td>
                    <td>Ruby on Rails</td>
                    <td>Slack</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>Bootstrap</td>
                    <td></td>
                    <td>Socket.IO</td>
                    <td>GitHub</td>
                  </tr>
                  <tr>
                    <td>Ruby</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Heroku</td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3><strong className="App-caps"><a id="projects">PROJECTS</a></strong></h3>

              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="App-projects-div">
                        <a href="https://wevote.us/ballot"><h4>WeVote.US</h4></a>
                        <a href="https://wevote.us/ballot">
                          <img alt="WeVote.US" className="App-projects-img" src="https://i.imgur.com/f7fOR0p.png" />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="App-projects-div">
                        <a href="https://game-it.herokuapp.com/"><h4>game.it</h4></a>
                        <a href="https://game-it.herokuapp.com/">
                          <img alt="game.it-app" className="App-projects-img" src="https://i.imgur.com/0QPgqk5.png" />
                        </a>

                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="App-projects-div">
                        <a href="https://www.stockpotimages.com/"><h4>Stock Pot Images</h4></a>
                        <a href="https://www.stockpotimages.com/">
                          <img alt="Stock-Pot-Images-app" className="App-projects-img" src="https://i.imgur.com/RNdJZ97.png" />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="App-projects-div">
                        <a href="https://milcahhalili.github.io/Simon/"><h4>Simon</h4></a>
                        <a href="https://milcahhalili.github.io/Simon/">
                          <img alt="Simon-app" className="App-projects-img" src="https://i.imgur.com/rafNHY9.png" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="App-projects-div">
                        <a href="https://burstbook.herokuapp.com/"><h4>Burst Book</h4></a>
                        <a href="https://burstbook.herokuapp.com/">
                          <img alt="Burst-Book-app" className="App-projects-img" src="https://i.imgur.com/lHMBBQa.png" />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="App-projects-div">
                        <a href="https://flwr-app.herokuapp.com/"><h4>flwr</h4></a>
                        <a href="https://flwr-app.herokuapp.com/">
                          <img alt="flwr-app" className="App-projects-img" src="https://i.imgur.com/vPLWmio.png" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="contact-div">
              <h3><strong className="App-caps"><a id="contact">CONTACT</a></strong></h3>
              <p>halilicenteno@gmail.com</p>
              <p>(510) 944-3701</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
