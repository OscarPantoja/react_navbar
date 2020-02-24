import React from 'react'
import NavItemActive from './NavItemActive'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu'

function NavbarNav() {
  return (
    <ul className="navbar-nav mr-auto">
      <NavItemActive />
      <NavItem />
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
      <DropdownMenu />
    </ul>
  )
}

export default NavbarNav
