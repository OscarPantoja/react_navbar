import React from 'react'
import NavItem from './NavItem'
import DropdownMenu from './DropdownMenu'

function NavbarNav() {
  return (
    <ul className="navbar-nav mr-auto">
      <NavItem 
      text='Home'
      to='/home'
      active
      />
      <NavItem 
      text='Sign In'
      to='/sing-in'
      active
      />
      <DropdownMenu />
    </ul>
  )
}

export default NavbarNav
