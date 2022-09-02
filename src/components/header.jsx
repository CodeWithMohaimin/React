import React from "react";
import './stylesCompo/header.style.css';

import Bio from "./bio";
import Skills from "./skills";
import Social from "./social";

class Header extends React.Component{
  render() {
    return (
      <div className="container">
        <Bio/>
        <Skills/>
        <Social/>
      </div>
    )
  }
}
export default Header;