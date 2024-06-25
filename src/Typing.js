import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Typing...':
        return '#b3b38c';
      case 'Done Typing':
        return 'green';
      case 'Initializing':
        return 'gray';
      default:
        return 'black';
    }
  };

  return (
    <div>
      <TypeAnimation
        className='color-text-variable-keyword'
        cursor={false}
        sequence={[
          5500,
          () => {
            setTypingStatus('Typing...');
          },
          'var ',
          () => {
            setTypingStatus('Done Typing');
          },
          0, // Delay before starting the next animation
        ]}
        repeat={Infinity}
      />
      <TypeAnimation
        className='color-text-variable-name'
        cursor={false}
        sequence={[
          5800,
          () => {
            setTypingStatus('Typing...');
          },
          'name ',
          () => {
            setTypingStatus('Done Typing');
          },
          0, 
        ]}
        repeat={Infinity}
      />
      <TypeAnimation
        className='color-text-variable-operand'
        cursor={false}
        sequence={[
          6000,
          () => {
            setTypingStatus('Typing...');
          },
          '= ',
          () => {
            setTypingStatus('Done Typing');
          },
          0, 
        ]}
        repeat={Infinity}
      />
      <TypeAnimation
        className='color-text-variable-string'
        cursor={false}
        sequence={[
          6200,
          () => {
            setTypingStatus('Typing...');
          },
          '"Sanjiv Sethu Madhavan"',
          3000, 
          () => {
            setTypingStatus('Done Typing');
          },
        ]}
        repeat={Infinity}
      />
      <TypeAnimation
        className='color-text-variable-operand'
        cursor={true}
        sequence={[
          7800,
          () => {
            setTypingStatus('Typing...');
          },
          ';',
          1000, 
          () => {
            setTypingStatus('Done Typing');
          },
        ]}
      />
      <div style={{ color: getStatusColor(typingStatus), fontSize: '20px' }}>{typingStatus}</div>
    </div>
  );
};

export default Typing;
