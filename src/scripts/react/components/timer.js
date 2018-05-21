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

  convertTime = (time) => {
    const [unitS, unitM, unitH] = ['segundos', 'minutos', 'horas']
    let [seconds, minutes, hours] = [0, 0, 0]
    let res = ''

    seconds = time % 60
    minutes = Math.floor(time / 60) % 60
    hours = Math.floor(time / 3600)

    if (hours) res += `${hours} ${unitH} e `
    if (minutes) res += `${minutes} ${unitM} e `
    res += `${seconds} ${unitS}`

    return res
  }

  render() {
    const { time } = this.state

    return (
      <h1>Você está aqui a {this.convertTime(time)}</h1>
    )
  }
}
console.log('eita porra')
ReactDOM.render(<Timer />, document.querySelector('.tipbar'))
