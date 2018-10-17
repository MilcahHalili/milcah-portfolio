import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-left-div">
          <header>
            <div className="App-circle-div">
              <div className="App-circle">
                <img alt="Milcah-Halili-headshot" src="https://i.imgur.com/dSsQgZF.png" />
              </div>
            </div>
            <h1 className="App-title">
              Milcah Halili Centeno <span role="img" aria-label="peace-sign">✌🏽</span>
            </h1>
          </header>
          <div className="App-intro-div">
            <p className="App-intro">
              I'm a full stack web developer building with <code><strong>M</strong>ongoDB, <strong>E</strong>xpress, <strong>R</strong>eactJS, <strong>N</strong>ode.js</code> stack & more.
            </p>
          </div>
          <div className="App-intro-footer-div">
            <a href="https://github.com/MilcahHalili">GitHub</a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/milcah-halili">LinkedIn</a>&nbsp;&nbsp;
            <a href="https://profiles.generalassemb.ly/profiles/milcah-halili">GA Profile</a>
          </div>
        </div>
        <div className="App-right-div">
          <div className="App-wrapper">
            <div>
              <p><strong className="App-caps">SUMMARY</strong></p>
            </div>
            <div className="App-summary-div">
              <p>
                I build apps that inspire action. I believe that technology can help people be more happy, healthy, and connected to the ones they love.
              </p>
              <p>
                I recently graduated from General Assembly's Web Development Immersive in Little Tokyo, Los Angeles. My background as a cannabis wellness advisor, caregiver of elders, dog walker, filmmaker, freelance performer, and freelance writer inform my work as a web developer.
              </p>
            </div>
          </div>
          <div className="App-wrapper">
            <div>
              <p><strong className="App-caps">SKILLS</strong></p>
            </div>
            <div id="App-skills-div">
              <div className="App-skills-divs">
                <ul>
                  <li><strong className="App-caps">LANGUAGES</strong></li>
                  <br />
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Ruby</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div className="App-skills-divs">
                <ul>
                  <li><strong className="App-caps">LIBRARIES</strong></li>
                  <br />
                  <li>React</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="App-skills-divs">
                <ul>
                  <li><strong className="App-caps">DATABASES</strong></li>
                  <br />
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="App-skills-divs">
                <ul>
                  <li><strong className="App-caps">FRAMEWORKS</strong></li>
                  <br />
                  <li>Express</li>
                  <li>Ruby on Rails</li>
                  <li>Socket.IO</li>
                </ul>
              </div>
              <div className="App-skills-divs">
                <ul>
                  <li><strong className="App-caps">TOOLS</strong></li>
                  <br />
                  <li>AWS</li>
                  <li>Slack</li>
                  <li>GitHub</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="App-wrapper">
              <p><strong className="App-caps">PROJECTS</strong></p>
            </div>
            <div className="App-projects-div">
              <a href="https://flwr-app.herokuapp.com/">
                <img alt="flwr-app" className="App-projects-img" src="https://i.imgur.com/vPLWmio.png" />
              </a>
              <div className="App-wrapper-proj">
                <div className="App-tech-used">
                  <ul>
                    <strong><li className="App-caps">TECH</li></strong>
                    <br />
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>ReactJS</li>
                    <li>Node.js</li>
                    <li>mLab</li>
                    <li>The Strain API</li>
                  </ul>
                </div>
                <div className="App-proj-links">
                  <ul>
                    <strong><li className="App-caps">LINKS</li></strong>
                    <br />
                    <li><a href="https://github.com/MilcahHalili/flwr">GitHub</a></li>
                    <li><a href="https://flwr-app.herokuapp.com/">View flwr</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="App-projects-div">
              <a href="https://wevote.us/ballot">
                <img alt="WeVote.US" className="App-projects-img" src="https://i.imgur.com/f7fOR0p.png" />
              </a>
              <div className="App-wrapper-proj">
                <div className="App-tech-used">
                  <ul>
                    <strong><li className="App-caps">TECH</li></strong>
                    <br />
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React/Flux</li>
                    <li>GitHub</li>
                    <li>Zendesk</li>
                  </ul>
                </div>
                <div className="App-proj-links">
                  <ul>
                    <strong><li className="App-caps">LINKS</li></strong>
                    <br />
                    <li><a href="https://github.com/MilcahHalili/WebApp">GitHub</a></li>
                    <li><a href="https://wevote.us/ballot">View WeVote.US</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="App-projects-div">
              <a href="https://www.stockpotimages.com/">
                <img alt="Stock-Pot-Images-app" className="App-projects-img" src="https://i.imgur.com/RNdJZ97.png" />
              </a>
              <div className="App-wrapper-proj">
                <div className="App-tech-used">
                  <ul>
                    <strong><li className="App-caps">TECH</li></strong>
                    <br />
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div className="App-proj-links">
                  <ul>
                    <strong><li className="App-caps">LINKS</li></strong>
                    <br />
                    <li><a href="https://trello.com/b/sAFjaCw4/stockpotimages">Trello</a></li>
                    <li><a href="https://www.stockpotimages.com/">View Stock Pot Images</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="App-projects-div">
              <a href="https://milcahhalili.github.io/Simon/">
                <img alt="Simon-app" className="App-projects-img" src="https://i.imgur.com/rafNHY9.png" />
              </a>
              <div className="App-wrapper-proj">
                <div className="App-tech-used">
                  <ul>
                    <strong><li className="App-caps">TECH</li></strong>
                    <br />
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="App-proj-links">
                  <ul>
                    <strong><li className="App-caps">LINKS</li></strong>
                    <br />
                    <li><a href="https://github.com/MilcahHalili/Simon">GitHub</a></li>
                    <li><a href="https://milcahhalili.github.io/Simon/">View Simon</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="App-projects-div">
              <a href="https://burstbook.herokuapp.com/">
                <img alt="Burst-Book-app" className="App-projects-img" src="https://i.imgur.com/lHMBBQa.png" />
              </a>
              <div className="App-wrapper-proj">
                <div className="App-tech-used">
                  <ul>
                    <strong><li className="App-caps">TECH</li></strong>
                    <br />
                    <li>AWS</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Ruby on Rails</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="App-proj-links">
                  <ul>
                    <strong><li className="App-caps">LINKS</li></strong>
                    <br />
                    <li><a href="https://github.com/MilcahHalili/burst_book">GitHub</a></li>
                    <li><a href="https://burstbook.herokuapp.com/">View Burst Book</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="App-projects-div">
              <a href="https://game-it.herokuapp.com/">
                <img alt="game.it-app" className="App-projects-img" src="https://i.imgur.com/0QPgqk5.png" />
              </a>
              <div className="App-wrapper-proj">
                <div className="App-tech-used">
                  <ul>
                    <strong><li className="App-caps">TECH</li></strong>
                    <br />
                    <li>AWS</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Bulma</li>
                    <li>Socket.io</li>
                    <li>OAuth</li>
                    <li>IGDB API</li>
                  </ul>
                </div>
                <div className="App-proj-links">
                  <ul>
                    <strong><li className="App-caps">LINKS</li></strong>
                    <br />
                    <li><a href="https://github.com/caitfriedlander/game.it">GitHub</a></li>
                    <li><a href="https://game-it.herokuapp.com/">View game.it</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
