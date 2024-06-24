import React from 'react'
import ParticlesComponent from '../../Particle';
import { Container, Row, Col } from 'react-bootstrap'
import Typing from '../../Typing'; 

function HomePage() {
  return (
    <section className='hero'>
      <Container fluid>
        <ParticlesComponent />
        <Container className='hero-content'>
          <Row>
            <Col>
              <p className='color-text-variable-comments'
                style={{ paddingLeft: "30px", fontSize: "35px" }}
              >
                // Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
              </p>
              <h1  
              style={{ paddingLeft: "30px", fontSize: "70px" }}
              >
                <Typing />
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default HomePage