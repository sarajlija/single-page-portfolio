import React from "react"
import PaternRing from "../asets/images/pattern-rings.svg"
import { Container, Card, Col, Row } from "react-bootstrap"

function Skills() {
  const Array = [
    { title: "HTML", text: "4 Years Experience" },
    { title: "CSS", text: "4 Years Experience" },
    { title: "Javascript", text: "4 Years Experience" },
    { title: "Accessibility", text: "4 Years Experience" },
    { title: "React", text: "3 Years Experience" },
    { title: "Sass", text: "3 Years Experience", img: <img src={PaternRing} alt="pattern" className="pattern-img-right" /> }
  ]
  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 mt-5 mb-5 ">
          {Array.map((item, index) => (
            <Col key={index} bsPrefix="col__skills">
              <h2 className="text-light">{item.title}</h2>
              <Card className="bg-black text-light">
                <Card.Body className="px-0">
                  <Card.Text className="fs-0">{item.text}</Card.Text>
                </Card.Body>
                {item.img}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Skills
