import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import { useState } from 'react'

function SkillsComponent() {
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleCategorySelection = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
        console.log(selectedCategory - "SelectedCaegory");
    }
    return (
        <Row>
            <Col>
                <Slide direction='right'>
                    <div>
                        <Nav justify variant="pills" activeKey={selectedCategory} defaultActiveKey="backend">
                            <Nav.Item className="navItem">
                                <Nav.Link className={`navLink ${selectedCategory === 'backend' ? 'active' : ''}`} as={Link} to="backend" eventKey="link-1" onClick={() => handleCategorySelection('backend')}>Backend</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navItem">
                                <Nav.Link className={`navLink ${selectedCategory === 'frontend' ? 'active' : ''}`} as={Link} to="frontend" eventKey="link-2" onClick={() => handleCategorySelection('frontend')}>Frontend</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="navItem">
                                <Nav.Link className={`navLink ${selectedCategory === 'devops' ? 'active' : ''}`} as={Link} to="devops" eventKey="link-3" onClick={() => handleCategorySelection('devops')}>DevOps</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Outlet />
                    </div>
                </Slide>
            </Col>
        </Row>
    )
}

export default SkillsComponent