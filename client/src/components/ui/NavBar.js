import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'

export const NavBar = () => {
  return (
    <nav className='wrap'>
      <div className='row'>
        {/* <img  className='cardImg logo ' src='https://svgsilh.com/svg/307294.svg' alt='logo'/> */}
        <span className='logo'>COUNTRY APP</span>
      </div>
      <li className='row wrap'>
        <ul>
          <NavLink className='btn' to="/principal" activeClassName='active'>Home</NavLink>
        </ul>
        <ul>
          <NavLink className='btn' to="/actividad" activeClassName='active'>Add Activity</NavLink>
        </ul>
        <ul>
          <NavLink className='btn' to="/about" activeClassName='active'>About</NavLink>
        </ul>
      </li>
      <div className='row'>
        <a href='https://www.linkedin.com/in/juan-marcos-cordobez/' className='logo'><FaLinkedinIn /></a>
        <a href='https://github.com/juancordobez' className='logo'><AiOutlineGithub /></a>
      </div>
    </nav>
  )
}
