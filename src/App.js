import React, { Component } from 'react'
import './styles/App.css'

import logo from './assets/logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          The Plant Based Kitchen
        </header>
        <img src={logo} alt='the plant based kitchen logo' style={{ height: '100px' }} />
        <p>Coming Soon...</p>
      </div>
    )
  }
}

export default App
