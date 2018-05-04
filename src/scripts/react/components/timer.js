import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let interval

class Timer extends Component {
  state = {
    time: 0,
  }

  componentDidMount() {
    interval = window.setInterval(this.updateTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(interval)
  }

  updateTime = () => {
    this.setState(prevState => ({ time: prevState.time + 1 }))
  }

  render() {
    const { time } = this.state

    return (
      <h1>Você está aqui há {time} segundo{time === 1 ? '' : 's'}</h1>
    )
  }
}

ReactDOM.render(<Timer />, document.querySelector('.wellcome-message'))
