import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
          <ul>
            <li>
              <NavLink to="/principal" activeClassName='active'>Principal</NavLink>
            </li>
            <li>
              <NavLink to="/actividad" activeClassName='active'>Actividad</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName='active'>About</NavLink>
            </li>
          </ul>
        </nav>
    )
}
