// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {secondsCount: 0}

  tick = () => {
    this.setState(prevState => ({
      secondsCount: prevState.secondsCount + 1,
    }))
  }

  onStartTime = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  onStopTime = () => {
    clearInterval(this.timerID)
  }

  onReset = () => {
    clearInterval(this.timerID)
    this.setState({secondsCount: 0})
  }

  render() {
    const {secondsCount} = this.state
    const minutes = Math.floor(secondsCount / 60)
    const seconds = secondsCount % 60
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-img"
              />
              <p className="timer-name">Timer</p>
            </div>
            <h1 className="time">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
            <button
              className="btn start"
              type="button"
              onClick={this.onStartTime}
            >
              Start
            </button>
            <button
              className="btn stop"
              type="button"
              onClick={this.onStopTime}
            >
              Stop
            </button>
            <button className="btn reset" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
