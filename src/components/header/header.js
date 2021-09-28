import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from "react-router-dom"
import Logo from '../../assets/logo.png'
import './header.css'

class Header extends Component {
  render () {
    return (
      <header>
        <Link to='/'>
          <img src={Logo} alt='logoHeader' className='logoHeader' />
        </Link>
        <nav id='navbar'>

          <NavLink to='/' className='nav-menu' exact={true}>Accueil</NavLink>

          <NavLink to='/About' className='nav-menu'>A propos</NavLink>


        </nav>
      </header>
    )
  }
}

export default Header
