import React from 'react'
import NavbarNav from './NavbarNav'
import FormInLine from './FormInLine'

function NavbarCollapse() {
  return (
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <NavbarNav />
      <FormInLine />
    </div>
  )
}

export default NavbarCollapse
