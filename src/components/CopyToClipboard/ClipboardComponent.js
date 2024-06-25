import React, { useState } from 'react';
import { IoClipboardSharp } from "react-icons/io5";

const ClipboardComponent = () => {
    // const [textToCopy, setTextToCopy] = useState('Hello, World!');
    const textToCopy = "echo skills"
    const [copySuccess, setCopySuccess] = useState('');

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopySuccess('Copied!');
                setTimeout(() => setCopySuccess(''), 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                setCopySuccess('Failed to copy!');
                setTimeout(() => setCopySuccess(''), 2000);
            });
    };

    return (
        <div >
            <div className='about-me-individual-contents-clipboard'
                onClick={handleCopy}
                style={{
                    backgroundColor: "#282c34",
                    cursor: 'pointer',
                    display: 'inline-block'
                }}
            >
                <div style={{ display: "flex"}}>
                    echo skills
                    <div className='copy-icon' style={{ marginLeft: "5px", color: "#a2a2a2" }}>
                        <IoClipboardSharp />
                    </div>
                </div>
            </div>

            {copySuccess && <div style={{ color: '#527347', marginTop: '0px' }}>{copySuccess}</div>}
        </div>
    );
};

export default ClipboardComponent;
