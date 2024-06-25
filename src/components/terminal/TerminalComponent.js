import React, { useState } from 'react';
import { TerminalOutput, TerminalInput } from 'react-terminal-ui';
import Terminal from 'react-terminal-ui';
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
                    <div style={{ color: 'white', fontSize: '24px' }}>Skills</div>
                    <button onClick={toggleTerminal}>Show Terminal</button>
                </div>
            ) : (
                <Terminal
                    name="React Terminal"
                    colorMode="dark"
                    onInput={handleInput}
                >
                    {terminalLines}
                </Terminal>
            )}
        </div>
    );
};

export default TerminalComponent;
