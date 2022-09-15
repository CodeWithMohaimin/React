import React, { Component } from 'react'

export default class timers extends Component {

    state = {
        count : 0
    }
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    intervalId = null

    startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count - 1 },()=> {
                    if(this.state.count === 0){
                        alert('Timer Finished')
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            }, 1000)
        }
    }

    pauseTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    restTimer = () => {
        this.setState({count:0})
        clearInterval(this.intervalId)
        this.intervalId = null
    }











  render() {
    return (
        <div className='root'>
            <div className="secOne">
                <button onClick={this.decrement}> - </button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}> + </button>
            </div>
            <div className="secTwo">
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.pauseTimer}>Pause</button>
                <button onClick={this.restTimer}>Reset</button>
            </div>
        </div>
    )
  }
}
