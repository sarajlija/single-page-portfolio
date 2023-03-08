import React from "react"

import { Col, Card, Container, Row } from "react-bootstrap"
import ProL1 from "../asets/images/thumbnail-project-1-large.webp"
import ProL2 from "../asets/images/thumbnail-project-2-large.webp"
import ProL3 from "../asets/images/thumbnail-project-3-large.webp"
import ProL4 from "../asets/images/thumbnail-project-4-large.webp"
import ProL5 from "../asets/images/thumbnail-project-5-large.webp"
import ProL6 from "../asets/images/thumbnail-project-6-large.webp"
function Projects() {
  const projects = [
    { img: ProL1, title: "DESIGN PORTFOLIO", text: "HTML CSS" },
    { img: ProL2, title: "E-LEARNING LANDING PAGE", text: "HTML CSS" },
    { img: ProL3, title: "TODO WEB APP", text: "HTML CSS JAVASCRIPT" },
    { img: ProL4, title: "ENTERTAINMENT WEB APP", text: "HTML CSS JAVASCRIPT" },
    { img: ProL5, title: "MEMORY GAME", text: "HTML CSS JAVASCRIPT" },
    { img: ProL6, title: "ART GALLERY SHOWCASE", text: "HTML CSS JAVASCRIPT" }
  ]
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <h2 className="text-light">Projects</h2>
          <a href="/#" className="custom-link fs-3">
            contact me
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 mt-2">
        {projects.map((item, index) => (
          <Col key={index}>
            <Card className="bg-black text-light">
              <Card.Img src={item.img} />
              <Card.Body className="px-0">
                <Card.Title className="fs-4 fw-bold">{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects
