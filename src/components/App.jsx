import React from "react";
import Bio from "./bio";
import './stylesCompo/header.style.css';
import Skills from "./skills";
import Social from "./social";
import Image from "./image";//jsx file
import imageA from "./image/mohaimin.jpg"
import imageB from "./image/natasha.jpg"
import imageC from "./image/rimpa.jpg"

class App extends React.Component{

    getContext() {
        
    }

    render() {
      return (
          <div >
              <div className="container">
                  <Bio
                      name='Rim'
                      title='Lover Girl'
                  />
                  <Image
                      image = {imageB}
                      altA='Rim'
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
                  <Image
                      image = {imageA}
                      altA='Rim'
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
                  <Image
                      image = {imageC}
                      altA='Rim'
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