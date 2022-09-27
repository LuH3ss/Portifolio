import React from 'react'
import Toogle from '../Toogle/Toogle'
import './Navbar.css'
import {Link} from 'react-scroll'
export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-wrapper--left'>
          <div className='navbar-wrapper--left-name'>Lucas</div>
          <Toogle />
        </div>
        <div className='navbar-wrapper--right'>
          <div className='navbar-wrapper--right-list'>
            <ul>
              <Link spy={true} activeClass="activeClass" smooth={true} to="Intro">
              <li>Home</li>
              </Link>
              <Link spy={true}  smooth={true} to='Servicios'>
              <li>Servicios</li>
              </Link>
              <Link spy={true}  smooth={true} to='Proyectos'>
              <li>Portfolio</li>
              </Link>
            </ul>
          </div>
          <button className='button n-button'>
            <Link spy={true}  smooth={true} to='Contacto'>
            Contactame
            </Link>
          </button>
        </div>

    </div>
  )
}
