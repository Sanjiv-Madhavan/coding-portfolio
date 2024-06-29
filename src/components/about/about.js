import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Slide, Zoom, Fade } from 'react-awesome-reveal';
import TerminalComponent from '../terminal/TerminalComponent';
import ClipboardComponent from '../CopyToClipboard/ClipboardComponent';
import { AttentionSeeker } from 'react-awesome-reveal';

export default function About() {
    return (
        <Row id="about" className='section-partition'>
            <Row>
                <h1 className='color-text-variable-keyword' style={{ fontSize: "50px" }}
                >About Me</h1>
            </Row>
            <Row>
                <Col>
                    <Slide direction='right'>
                        <lottie-player
                            src="https://lottie.host/2cf989b7-7cd3-4d7e-b9fc-dad35c531ae0/9iq3ykKZXn.json"
                            background="transparent"
                            speed="1"
                            style={{ width: "100%", height: "90%", paddingBottom: "50px" }}
                            loop
                            autoplay
                        ></lottie-player>
                    </Slide>
                </Col>
                <Col md={6} className="about-me-contents">
                    <Row className='about-me-individual-contents'>
                        <Fade>
                            <Zoom cascade>
                                <p className="color-text-variable-name-descriptors" style={{ margin: "0px" }}>
                                    I am <strong className="color-text-variable-string">Sanjiv</strong>, a seasoned <strong className="color-text-variable-string">Fullstack Developer </strong> with a knack for design,
                                    having four years of experience at <strong className="color-text-variable-string">SAP LABS India</strong>. I bring a diverse skill set and proven expertise in various technologies.
                                    To know more details, Browse the below expertise.
                                    <br /> <AttentionSeeker effect='shakeX'>
                                    <strong className='color-text-variable-string illustrator-message'>Copy the clipboard command and paste in the terminal to view skills</strong>
                                    </AttentionSeeker>
                                    <br />
                                </p>
                            </Zoom>
                        </Fade>
                    </Row>
                    <Row className='about-me-individual-contents'>
                        <TerminalComponent />
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}
