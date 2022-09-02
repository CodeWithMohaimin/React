import React from "react";
import './header.style.css';

class Header extends React.Component{
  render() {

    let names = 'Mohaimin Islam'
    return (
      <div className="container">
        <div className="bio">
          <h1 >{names}</h1>
          <p>I am a Front-end Developer from Bangladesh</p>
        </div>

        <div className="skills">
          <h3>Skills :</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div className="social">
          <a href="https://www.youtube.com/">Home</a>
          <a href="https://www.youtube.com/">Github</a>
          <a href="https://www.youtube.com/">Linkedin</a>
        </div>
      </div>
    )
  }
}
export default Header;