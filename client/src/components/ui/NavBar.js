import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
          <ul>
            <li>
              <NavLink to="/principal" activeClassName>Principal</NavLink>
            </li>
            <li>
              <NavLink to="/actividad" activeClassName>Actividad</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName>About</NavLink>
            </li>
          </ul>
        </nav>
    )
}
