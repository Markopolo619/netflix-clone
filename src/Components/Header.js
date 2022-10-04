import React from 'react'
import Button from 'react-bootstrap/Button'
import Logo from '../images/logo.png'

export default function Header() {
  return (
    <nav><img src={Logo} height="200px" width="250px" alt="Netflix Logo" />
    <Button variant="primary">Pri</Button>
    </nav>
  )
}
