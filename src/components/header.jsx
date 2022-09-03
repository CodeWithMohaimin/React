import React from "react";
import './stylesCompo/header.style.css';

import Bio from "./bio";
import Skills from "./skills";
import Social from "./social";


class Header extends React.Component {
  me = {
    nam: "Mohaimin",
    title: "React developer",
    skillA: "React",
    skillB: "Tailwind",
    skillC: "Javascript"
  };
  
  render() {
   
    return (
      <div className="container">
        <Bio
          name={this.me.nam}
          title={this.me.title}
        />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Social
          linkA="https://www.youtube.com/"
          linkB="https://www.youtube.com/"
          linkC="https://www.youtube.com/"
        />
      </div>
    )
 }
}
export default Header;