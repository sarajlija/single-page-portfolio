import React from "react"

import { Container, Card, Col, Row } from "react-bootstrap"

function Skills() {
  const Array = [
    { title: "HTML", text: "4 Years Experience" },
    { title: "CSS", text: "4 Years Experience" },
    { title: "Javascript", text: "4 Years Experience" },
    { title: "Accessibility", text: "4 Years Experience" },
    { title: "React", text: "3 Years Experience" },
    { title: "Sass", text: "3 Years Experience" }
  ]
  return (
    <div>
      <Container>
        <Row xs={1} md={3} className="g-4 mt-5">
          {Array.map((item, index) => (
            <Col key={index}>
              <h1>{item.title}</h1>
              <Card className="bg-black text-light">
                <Card.Body>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Skills
