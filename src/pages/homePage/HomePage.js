import React from 'react'
import ParticlesComponent from '../../Particle';
import { Container, Row, Col } from 'react-bootstrap'
import Typing from '../../Typing';
import ReactParallaxTilt from 'react-parallax-tilt';
import About from '../../components/about/about';
import ProjectsComponent from '../../components/projects/ProjectsComponent';
import { Fade, Slide } from 'react-awesome-reveal';
import HeaderComponent from '../../components/Header/HeaderComponent';

function HomePage() {
  return (
    <>
    <HeaderComponent />
    <section className='hero'>
      <Container fluid id="hero">
        <ParticlesComponent />
        <Container className='hero-content'>
          <Row>
            <Col sm={8}>
              <Fade>
                <p className='color-text-variable-comments'
                  style={{ paddingLeft: "0px", fontSize: "35px" }}
                >
                // Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </p>
                <h1
                  style={{ paddingLeft: "0px", fontSize: "50px" }}
                >
                  <Typing />
                </h1>
              </Fade>
            </Col>
            <Col sm={3} className='hero-image'>
              <Fade>
                <Slide direction='right'>
                  <ReactParallaxTilt>
                    <img
                      src="./dudu.jpg"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </ReactParallaxTilt>
                </Slide>
              </Fade>
            </Col>
          </Row>
          <About />
          <ProjectsComponent />
        </Container>
      </Container>
    </section>
    </>
    
  )
}

export default HomePage