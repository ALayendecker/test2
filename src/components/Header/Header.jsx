import React from "react";
// import Nav from "react-bootstrap/Nav";
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>

    </ul>
  );
}

export default Header;
