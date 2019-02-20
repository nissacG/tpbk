import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div className='nav nav-bar header' style={{position: 'fixed', top: '0', left: '0', width: '100%'}}>
        <a href='#header'>TPBK</a>
        <ul className='navbar'>
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Beauty</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navbar