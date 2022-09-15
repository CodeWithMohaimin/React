import React from "react";
import './stylesCompo/header.style.css';
import Timer from '../components/timer'

class App extends React.Component{
    
    render() {
      return (
          <div>
              <Timer/>
          </div>
      );
    };
};

export default App