import React from "react";
import './stylesCompo/header.style.css';
import Timers from "./timers";

class App extends React.Component{
    
    render() {
      return (
          <div>
              <Timers/>
          </div>
      );
    };
};

export default App