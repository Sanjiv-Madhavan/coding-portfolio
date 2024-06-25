import React from 'react'
import ParticlesComponent from '../../Particle';
import { Container, Row, Col } from 'react-bootstrap'
import Typing from '../../Typing';
import ReactParallaxTilt from 'react-parallax-tilt';
import About from '../../components/about/about';

function HomePage() {
  return (
    <section className='hero'>
      <Container fluid>
        <ParticlesComponent />
        <Container className='hero-content'>
          <Row>
            <Col sm={8}>
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
            <Col sm={3} className='hero-image'>
              <ReactParallaxTilt>
                <img
                  src="./dudu.jpg"
                  alt="home pic"
                  className="img-fluid"
                />
              </ReactParallaxTilt>
            </Col>
          </Row>
          <About />
        </Container>
      </Container>
    </section>
  )
}

export default HomePage