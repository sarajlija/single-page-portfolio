import React from "react"

import { Navbar, Container } from "react-bootstrap"
function Header() {
  return (
    <Container className="p-0">
      <Navbar expand="md" variant="dark" bg="dark" className="position-fixed">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header
