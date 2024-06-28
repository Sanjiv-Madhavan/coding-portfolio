import React, { useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import image_go from '../../assets/skill-icons/go.png'
import image_k8s from '../../assets/skill-icons/k8s.png'
import image_java from '../../assets/skill-icons/java.png'
import image_grafana from '../../assets/skill-icons/grafana.png'
import image_prom from '../../assets/skill-icons/prom.png'
import image_sql from '../../assets/skill-icons/sql.png'
import image_dynamo from '../../assets/skill-icons/dynamo.png'

function BackendSkillsComponent() {

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
                    <img src={image_go} alt="" />
                    <img src={image_k8s} alt="" />
                    <img src={image_java} alt="" />
                    <img src={image_prom} alt="" />
                    <img src={image_grafana} alt="" />
                    <img src={image_dynamo} alt="" />
                    <img src={image_sql} alt="" />
                    </div>    
                </Slide>
            </Col>
        </Row>
    )
}

export default BackendSkillsComponent