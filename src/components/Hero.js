import React from "react"
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
      <Row>
        <Col md={6} lg={8}>
          <Navbar.Brand href="#" className=" d-flex fw-semibold text-light position-fixed ps-3 z-1">
            <h2>adamkeyes</h2>
          </Navbar.Brand>
          <Card className="border-0 h-100 bg-black ">
            <Card.Img src={PaternRing} alt="Card image" className="pattern-ring " />
            <Card.ImgOverlay>
              <Card.Body className=" ps-0 ">
                <h1 className="hero">
                  Nice to meet you!
                  <br />
                  I'm <span className="hero-line">Adam Keyes.</span>
                </h1>
                <Card.Text className=" w-50 lh-lg text-light mt-5">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</Card.Text>
              </Card.Body>{" "}
              <a href="/#" className="link fs-3">
                contact me
              </a>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="d-flex justify-content-end ">
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
          </Figure>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
