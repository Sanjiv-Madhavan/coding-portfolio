import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavHashLink } from 'react-router-hash-link'

function HeaderComponent() {
  return (
    <Container className='navigationPane'>
      <Row>
        <Col>
          <div className='navigationPane-items'>
            <div>
              {/* <span style={{ color: "white", fontSize: "3rem" }}>{"Portfolio"}</span> */}
            </div>
            <div>
            <NavHashLink className='navigationPane-items-navLinks' smooth to="#home">
              Home
            </NavHashLink>
            <NavHashLink className='navigationPane-items-navLinks' smooth to="#about">
              About Me
            </NavHashLink>
            <NavHashLink className='navigationPane-items-navLinks' smooth to="#projects">
              Projects
            </NavHashLink>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderComponent