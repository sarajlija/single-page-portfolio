import React from "react"
import "./Hero.scss"
import HeroImage from "../asets/images/image-profile-desktop.webp"
import Github from "../asets/images/icon-github.svg"
import FrontEndMentor from "../asets/images/icon-frontend-mentor.svg"
import Linkedin from "../asets/images/icon-linkedin.svg"
import Twitter from "../asets/images/icon-twitter.svg"
//import PaternCircle from "../asets/images/pattern-circle.svg"
import PaternRing from "../asets/images/pattern-rings.svg"
import { Container, Nav, Image, Card, Figure, Col, Row, Navbar } from "react-bootstrap"

function Hero() {
  return (
    <Container>
      <Row className="flex-column-reverse flex-md-row">
        <Col md={6} lg={8} className="px-0 ">
          <Navbar.Brand href="#" className=" d-flex fw-semibold text-light position-absolute ps-3 z-1">
            <h2>adamkeyes</h2>
          </Navbar.Brand>
          <Card className="border-0 px-0 bg-black mt-5" bsPrefix="card">
            <Card.Img src={PaternRing} alt="Card image" bsPrefix="pattern-img " />
            <Card.Body className="position-absolute ps-0 top-5">
              <h1 className=" fw-bolder  text-light">
                Nice to meet you!
                <br />
                I'm <span className="hero-line">Adam Keyes.</span>
              </h1>
              <Card.Text className=" w-50 lh-lg text-light mt-5">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</Card.Text>{" "}
              <a href="/#" className="fs-3">
                contact me
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="d-flex justify-content-end px-0 ">
          <Figure className="d-flex align-items-start justify-content-end">
            <Figure.Caption className=" position-absolute z-1 ">
              <Nav>
                <Nav.Link href="#">
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
            </Figure.Caption>
            <Figure.Image fluid className="d-flex align-self-end" alt="Card image" src={HeroImage} />
          </Figure>{" "}
        </Col>{" "}
      </Row>{" "}
      <hr className="border border-light border-1 opacity-75" />
    </Container>
  )
}

export default Hero
