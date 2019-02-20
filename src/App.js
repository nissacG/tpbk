import React, { Component } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header id='#header'>
          The Plant Based Kitchen
        </header>
        <p>Coming Soon...</p>
        <Footer />
      </div>
    )
  }
}

export default App
