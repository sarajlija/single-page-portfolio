import React, { useState } from "react"
import PaternRing from "../asets/images/pattern-rings.svg"
import Github from "../asets/images/icon-github.svg"
import FrontEndMentor from "../asets/images/icon-frontend-mentor.svg"
import Linkedin from "../asets/images/icon-linkedin.svg"
import Twitter from "../asets/images/icon-twitter.svg"
import { Col, Card, Container, Form, Button, Row, Navbar, Nav, Image } from "react-bootstrap"

function Contact() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <footer>
      <Container>
        <Row xs={1} md={1} lg={2} className="contact">
          <Col bsPrefix="col">
            <Card className="border-0 px-0 mt-5" bsPrefix="card__contact">
              <Card.Body className="" bsPrefix="card-body__contact">
                <h1 className=" fw-bolder  text-light">Contact</h1>
                <Card.Text className="lh-lg text-light mt-2">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Form className="text-light" noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3 " controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control className="text-light" placeholder="name" required type="text" defaultValue="" />
              </Form.Group>
              <Form.Group className="mb-3 text-light" controlId="formBasicEmail" required>
                <Form.Label>Email address</Form.Label>
                <Form.Control className="text-light" type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control className="text-light" as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit" className="rounded-0 text-uppercase float-end">
                send message
              </Button>
            </Form>
            <Card.Img src={PaternRing} alt="Card image" bsPrefix="img-pattern-contact" />
          </Col>
        </Row>{" "}
        <hr className="border border-light border-1 opacity-75" />
        <Row xs={1} md={1} lg={2}>
          <Col className=" w-100 mb-5">
            <Navbar bg="transparent" className="d-flex px-0 align-items-center justify-content-between flex-sm-column flex-md-row" bsPrefix="">
              <Navbar.Brand href="#home" className=" d-flex fw-semibold text-light " bsPrefix="navbar__contact">
                adamkeyes
              </Navbar.Brand>

              <Nav bsPrefix="nav__contact">
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
    </footer>
  )
}

export default Contact
