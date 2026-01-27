import React, { useState } from 'react';
import './WordCard.css';

const CompoundWordCard = ({ letter, customFont }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Check if it contains = sign
  const hasEquals = letter.includes('=');
  
  if (!hasEquals) {
    // If no = sign, use regular WordCard logic
    return (
      <div
        className="word-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.4) translateY(-20px)' : 'scale(1)',
          zIndex: isHovered ? 1000 : 1,
        }}
      >
        <div 
          className="letter"
          style={{
            fontFamily: customFont ? `${customFont}, serif` : 'ArabQuranIslamic_1, serif',
            color: isHovered ? '#ffffff' : '#000',
            fontSize: '4.2rem',
          }}
        >
          {letter}
        </div>
      </div>
    );
  }
  
  // Split by = sign
  const parts = letter.split('=');
  
  return (
    <div
      className="word-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.4) translateY(-20px)' : 'scale(1)',
        zIndex: isHovered ? 1000 : 1,
      }}
    >
      <div 
        className="letter"
        style={{
          fontFamily: customFont ? `${customFont}, serif` : 'ArabQuranIslamic_1, serif',
          fontSize: '4.2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          padding: '20px',
        }}
      >
        {/* Top part (before =) */}
        <div style={{
          color: isHovered ? '#ffffff' : '#000',
          transition: 'color 0.28s',
        }}>
          {parts[0]}
        </div>
        
        {/* Equals sign */}
        <div style={{
          color: isHovered ? '#ffffff' : '#000',
          fontSize: '2rem',
          transition: 'color 0.28s',
        }}>
          =
        </div>
        
        {/* Bottom part (after =) */}
        <div style={{
          color: isHovered ? '#4ade80' : '#000', // Green on hover
          transition: 'color 0.28s',
        }}>
          {parts[1]}
        </div>
      </div>
    </div>
  );
};

export default CompoundWordCard;