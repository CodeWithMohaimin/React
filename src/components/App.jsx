import React from "react";
import './stylesCompo/header.style.css';
import Event from "./event";

class App extends React.Component{
    
    render() {
      return (
          <div>
              <Event/>
          </div>
      );
    };
};

export default App