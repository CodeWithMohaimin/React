import React from "react";
import Bio from "./bio";
import './stylesCompo/header.style.css';
import Skills from "./skills";
import Social from "./social";

class App extends React.Component{
    render() {
      return (
          <div >
              <div className="container">
                  <Bio
                      name=' Rim'
                      title='Lover Girl'
                  />
                  <Skills
                      skillA='Love'
                      skillB='Hate'
                      skillC='Fucking'
                  />
                  < Social
                    linkA="https://www.youtube.com/"
                    linkB="https://www.youtube.com/"
                    linkC="https://www.youtube.com/"
                  />
              </div>


              <div className="container">
                  <Bio
                      name=' Mohaimin'
                      title='Programmer , React Developer'
                  />
                  <Skills
                      skillA='React'
                      skillB='JavaScript'
                      skillC='Node'
                  />
                  < Social
                    linkA="https://www.youtube.com/"
                    linkB="https://www.youtube.com/"
                    linkC="https://www.youtube.com/"
                  />
              </div>


              <div className="container">
                  <Bio
                      name=' Natasha'
                      title='UX-UI Designer'
                  />
                  <Skills
                      skillA='PhotoShope'
                      skillB='Illustrator'
                      skillC='Figma'
                  />
                  < Social
                    linkA="https://www.youtube.com/"
                    linkB="https://www.youtube.com/"
                    linkC="https://www.youtube.com/"
                  />
              </div>
          </div>
      );
    };
};

export default App