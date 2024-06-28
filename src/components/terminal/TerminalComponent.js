import React, { useState } from 'react';
import { TerminalOutput, TerminalInput } from 'react-terminal-ui';
import Terminal from 'react-terminal-ui';
import { Col } from 'react-bootstrap';
import ClipboardComponent from '../CopyToClipboard/ClipboardComponent';
import SkillsComponent from '../Skills/SkillsComponent';

const TerminalComponent = () => {
    const [terminalLines, setTerminalLines] = useState([
        <TerminalOutput>Type 'echo skills' to see your skills.</TerminalOutput>,
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
            <TerminalOutput>Type 'echo skills' to see my skills.</TerminalOutput>,
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

                        <ClipboardComponent />
                        <Terminal
                            name="Terminal"
                            colorMode="dark"
                            onInput={handleInput}
                        >
                            {terminalLines}
                        </Terminal>

                </Col>
            )}
        </div>
    );
};

export default TerminalComponent;
