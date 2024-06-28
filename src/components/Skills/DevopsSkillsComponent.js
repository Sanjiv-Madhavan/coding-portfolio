import React, { useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import image_helm from '../../assets/skill-icons/helm.png'
import image_docker from '../../assets/skill-icons/docker.png'
import image_aws from '../../assets/skill-icons/aws.png'

function DevopsSkillsComponent() {

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
                    <img src={image_helm} alt="" />
                    <img src={image_docker} alt="" />
                    <img src={image_aws} alt="" />
                    </div>    
                </Slide>
            </Col>
        </Row>
    )
}

export default DevopsSkillsComponent