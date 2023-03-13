import React from "react"
import PaternRing from "../asets/images/pattern-rings.svg"
import Github from "../asets/images/icon-github.svg"
import FrontEndMentor from "../asets/images/icon-frontend-mentor.svg"
import Linkedin from "../asets/images/icon-linkedin.svg"
import Twitter from "../asets/images/icon-twitter.svg"
import { Col, Card, Container, Form, Button, Row, Navbar, Nav, Image } from "react-bootstrap"

function Contact() {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <Container className="contact">
      <Row xs={1} md={1} lg={2}>
        <Col bsPrefix="col">
          <Card className="border-0 px-0" bsPrefix="card">
            <Card.Body className="ps-0">
              <h1 className=" fw-bolder  text-light">Contact</h1>
              <Card.Text className="w-50 lh-lg text-light mt-2">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Form className="text-light" onSubmit={e => handleSubmit()}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" className="rounded-0 text-uppercase float-end">
              send message
            </Button>
          </Form>
          <Card.Img src={PaternRing} alt="Card image" bsPrefix="img-pattern-contact" />
        </Col>
        <hr className="border border-light border-1 opacity-75" />
      </Row>
      <Row xs={1} md={1} lg={2}>
        <Col>
          <Navbar expand="lg" variant="dark" bg="dark" className="d-flex px-0 align-items-center justify-content-between" bsPrefix="navbar">
            <Navbar.Brand href="#home" className=" d-flex fw-semibold text-light " bsPrefix="navbar">
              adamkeyes
            </Navbar.Brand>

            <Nav>
              <Nav.Link href="https://github.com/sarajlija/single-page-portfolio" target="_blank" bsPrefix="nav-link">
                <Image src={Github} />
              </Nav.Link>
              <Nav.Link href="#">
                <Image src={FrontEndMentor} />
              </Nav.Link>
              <Nav.Link href="#">
                <Image src={Linkedin} />
              </Nav.Link>
              <Nav.Link href="#">
                <Image src={Twitter} />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
