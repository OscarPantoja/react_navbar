import React from 'react'
import NavLinkDropdown from 'NavLinkDropdown'
import DropdownMenu from 'DropdownMenu'

function NavItemDropdown() {
  return (
    <li className="nav-item dropdown">
      <NavLinkDropdown />
      <DropdownMenu />
    </li>
  )
}

export default NavItemDropdown
