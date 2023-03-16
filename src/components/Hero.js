import React, { useEffect, useState } from "react"
import HeroImageDesktop from "../asets/images/image-profile-desktop.webp"
import HeroImageTablet from "../asets/images/image-profile-tablet.webp"
import HeroImageMobile from "../asets/images/image-profile-mobile.webp"
import Github from "../asets/images/icon-github.svg"
import FrontEndMentor from "../asets/images/icon-frontend-mentor.svg"
import Linkedin from "../asets/images/icon-linkedin.svg"
import Twitter from "../asets/images/icon-twitter.svg"
//import PaternCircle from "../asets/images/pattern-circle.svg"
import PaternRing from "../asets/images/pattern-rings.svg"
import { Container, Nav, Image, Card, Figure, Col, Row, Navbar } from "react-bootstrap"

function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })
  console.log(windowWidth)
  // Add a listener for when the window resizes

  return (
    <>
      <Container className="">
        <Navbar.Brand href="#home" className="d-flex fw-semibold text-light mt-2 ms-0 p-0" bsPrefix="navbar__hero">
          adamkeyes
        </Navbar.Brand>

        <Row className=" flex-column-reverse flex-md-row">
          <Col md={6} lg={8} className="px-0 mt-5">
            <Card className="border-0 px-0 bg-black " bsPrefix="card__heading">
              <Card.Img src={PaternRing} alt="Card image" bsPrefix="pattern-img " />
              <Card.Body bsPrefix="card-body__hero">
                <h1 className=" fw-bolder  text-light">
                  Nice to meet you!
                  <br />
                  I'm <span className="hero-line">Adam Keyes.</span>
                </h1>
                <Card.Text bsPrefix="card-text" className=" w-50 lh-lg text-light mt-5">
                  Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
                </Card.Text>{" "}
                <a href="/#" className="">
                  contact me
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col__hero">
            <Card className="bg-dark text-white">
              <Card.Img className="d-flex img-fluid " src={windowWidth > 1024 ? HeroImageDesktop : windowWidth > 576 ? HeroImageTablet : HeroImageMobile} />
              <Card.ImgOverlay bsPrefix="'card-img-overlay__hero">
                <Nav className="position-absolute top-0 mt-3" bsPrefix="nav__hero">
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
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <hr className="border border-light border-1 opacity-75" />
      </Container>
    </>
  )
}

export default Hero
