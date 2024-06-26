import React, { useState } from 'react';
import { TerminalOutput, TerminalInput } from 'react-terminal-ui';
import Terminal from 'react-terminal-ui';
import SkillsComponent from '../Skills/SkillsComponent';
import ClipboardComponent from '../CopyToClipboard/ClipboardComponent';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Col } from 'react-bootstrap';

const TerminalComponent = () => {
    const [terminalLines, setTerminalLines] = useState([
        <TerminalOutput>Welcome to the React Terminal! Type 'echo skills' to see your skills.</TerminalOutput>,
    ]);
    const [showSkills, setShowSkills] = useState(false);

    const handleInput = (input) => {
        let newLines = [...terminalLines, <TerminalInput>{input}</TerminalInput>];

        if (input === 'echo skills') {
            setShowSkills(true);
        } else {
            newLines = [
                ...newLines,
                <TerminalOutput>Command not found: {input}</TerminalOutput>,
            ];
            setTerminalLines(newLines);
        }
    };

    const toggleTerminal = () => {
        setShowSkills(!showSkills);
        let newLines = [
            <TerminalOutput>Welcome to the React Terminal! Type 'echo skills' to see your skills.</TerminalOutput>,
        ];
        setTerminalLines(newLines);
    };

    return (
        <div style={{ height: '300px', width: '600px' }}>
            {showSkills ? (
                <div>
                    <SkillsComponent />
                    <button className="showTerminalButton" onClick={toggleTerminal}>Show Terminal</button>
                </div>
            ) : (
                <Col style={{ overflow: "hidden" }}>
                    <Fade>
                        <ClipboardComponent />
                        <Terminal
                            name="React Terminal"
                            colorMode="dark"
                            onInput={handleInput}
                        >
                            {terminalLines}
                        </Terminal>
                    </Fade>
                </Col>
            )}
        </div>
    );
};

export default TerminalComponent;
