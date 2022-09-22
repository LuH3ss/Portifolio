import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-wrapper--left'>
          <div className='navbar-wrapper--left-name'>Lucas</div>
          <span>toogle</span>
        </div>
        <div className='navbar-wrapper--right'>
          <div className='navbar-wrapper--right-list'>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Expiereence</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <button className='button'>
            Contactame
          </button>
        </div>

    </div>
  )
}
