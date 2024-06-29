import React, { useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Slide } from 'react-awesome-reveal'
import { Link, Outlet, useLocation } from 'react-router-dom'
import BackendSkillsComponent from '../Skills/BackendSkillsComponent'
import FrontendSkillsComponent from '../Skills/FrontendSkillsComponent'
import DevopsSkillsComponent from '../Skills/DevopsSkillsComponent'
import BackendProjectsComponent from './BackendProjectsComponent'
import FrontendProjectsComponent from './FrontendProjectsComponent'
import DevopsProjectsComponent from './DevopsProjectsComponent'

function ProjectsComponent() {
    const [selectedProjectCategory, setselectedProjectCategory] = useState('')
    const location = useLocation();
    const handleCategorySelection = (selectedProjectCategory) => {
        setselectedProjectCategory(selectedProjectCategory);
        console.log(selectedProjectCategory );
    }
  return (
    <Container id="projects" fluid className='section-partition-projects'>
        <h1 className='color-text-variable-keyword' style={{ paddingBottom: "30px"}}>My Projects</h1>
        <Row>
            <Col className='project-grid'>
                <Slide direction='right'>
                    <div>
                        <Nav justify variant="pills" activeKey={selectedProjectCategory} defaultActiveKey="backendprojects">
                            <Nav.Item className="navItem">
                                <Nav.Link className={`navLink ${selectedProjectCategory === 'backendprojects' ? 'active' : ''}`} as={Link} to="/" eventKey="link-1" onClick={() => handleCategorySelection('backendprojects')}>Backend</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navItem">
                                <Nav.Link className={`navLink ${selectedProjectCategory === 'frontendprojects' ? 'active' : ''}`} as={Link} to="/" eventKey="link-2" onClick={() => handleCategorySelection('frontendprojects')}>Frontend</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navItem">
                                <Nav.Link className={`navLink ${selectedProjectCategory === 'devopsprojects' ? 'active' : ''}`} as={Link} to="/" eventKey="link-3" onClick={() => handleCategorySelection('devopsprojects')}>DevOps</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {(selectedProjectCategory === 'backendprojects' && <BackendProjectsComponent />)}
                        {(selectedProjectCategory === 'frontendprojects' && <FrontendProjectsComponent />)}
                        {(selectedProjectCategory === 'devopsprojects' && <DevopsProjectsComponent />)}
                    </div>
                </Slide>
            </Col>
        </Row>
    </Container>
  )
}

export default ProjectsComponent