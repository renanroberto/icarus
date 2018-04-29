import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Shelf extends Component {
    render () {
        return <h1>Produtos</h1>
    }
}

ReactDOM.render(<Shelf />, document.querySelector('#home-shelf'))