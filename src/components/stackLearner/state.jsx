import React, { Component } from 'react'

export default class state extends Component {
    //Old Style
    // constructor(props) {
    //     super(props)
    //     this.count = 0;
    //     this.state = {
    //         count:1
    //     }
    // }

    state = {
        count: 0,
        double: 0,
        nam: 'mohaimin',
    }

  render() {
    return (
        <div>
              <h1>count = {this.state.count}</h1>

              <button onClick={() => {
                  this.setState(prev => {
                      return {
                          count: prev.count + 1
                      }
                  }, () => {
                      console.log(this.state.count)
                  })
              }}>Click ME</button>

          </div>
    )
  }
}
