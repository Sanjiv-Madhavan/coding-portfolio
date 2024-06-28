import React, { useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import image_html from '../../assets/skill-icons/html.png'
import image_react from '../../assets/skill-icons/react.png'
import image_angular from '../../assets/skill-icons/angular.png'
import image_js from '../../assets/skill-icons/js.png'
import image_css from '../../assets/skill-icons/css.png'

function FrontendSkillsComponent() {

    const [selectedCategory, setSelectedCategory] = useState('')

    const handleCategorySelection = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
        console.log(selectedCategory - "SelectedCaegory");
    }
    return (
        <Row>
            <Col>
                <Slide direction='right'>
                    <div className='skill-icons'>
                    <img src={image_react} alt="" />
                    <img src={image_html} alt="" />
                    <img src={image_angular} alt="" />
                    <img src={image_js} alt="" />
                    <img src={image_css} alt="" />
                    </div>    
                </Slide>
            </Col>
        </Row>
    )
}

export default FrontendSkillsComponent