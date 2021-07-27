import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
          <li className='row'>
            <ul>
              <NavLink  className='btn' to="/principal" activeClassName='active'>Principal</NavLink>
            </ul>
            <ul>
              <NavLink  className='btn' to="/actividad" activeClassName='active'>Actividad</NavLink>
            </ul>
            <ul>
              <NavLink  className='btn' to="/about" activeClassName='active'>About</NavLink>
            </ul>
          </li>
        </nav>
    )
}
