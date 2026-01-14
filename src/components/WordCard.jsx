import React from 'react';
import './WordCard.css';
import { useState } from 'react';

const WordCard = ({ letter, customFont }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Split the word into individual characters
  const characters = letter.split('');

  return (
    <div
      className="word-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: '3.5in',
        background: isHovered 
          ? 'linear-gradient(to bottom, #3b82f6 0%, #0A2472 100%)'
          : 'linear-gradient(to bottom, #ffffff 0%, #f6cc44 100%)',
        borderRadius: '34px',
        boxShadow: isHovered 
          ? '0 30px 70px rgba(0,0,0,0.35)'
          : '0 14px 36px rgba(0,0,0,0.18)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s, background 0.28s',
        cursor: 'default',
        transform: isHovered ? 'scale(1.4) translateY(-20px)' : 'scale(1)',
        zIndex: isHovered ? 100 : 1,
      }}
    >
      <div className="letter-container" style={{
        // Apply the customFont if provided, otherwise use the default
        fontFamily: customFont ? `${customFont}, serif` : 'ArabQuranIslamic_1, serif',
        fontSize: 'calc(3.2in - 1.2in)',
        direction: 'rtl',
        whiteSpace: 'nowrap',
        textAlign: 'center'
      }}>
        {characters.map((char, index) => (
          <span 
            key={index} 
            style={{
              color: isHovered 
                ? (index % 2 === 0 ? '#ffffff' : '#4ade80') // Alternating White/Green
                : '#000',
              transition: 'color 0.28s',
              lineHeight: 1,
            }}
          >
            {/* \u200D is the Zero Width Joiner. 
                We place it before and after characters to force them to connect 
                across span boundaries.
            */}
            {index > 0 ? '\u200D' : ''}
            {char}
            {index < characters.length - 1 ? '\u200D' : ''}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordCard;