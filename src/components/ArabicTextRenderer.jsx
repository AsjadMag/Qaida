import React from 'react';

const ArabicTextRenderer = ({ text, isHovered, isCompound }) => {
  // For better Arabic rendering
  const renderText = () => {
    if (!isCompound || text.length <= 2) {
      // Return as whole text for proper Arabic joining
      return (
        <span style={{
          color: isHovered ? '#ffffff' : '#000',
          display: 'inline-block'
        }}>
          {text}
        </span>
      );
    }
    
    // For longer compound words, we need a smarter approach
    // Group letters that should stay together
    const groups = [];
    let currentGroup = '';
    
    // Simple grouping logic - you might need to adjust this
    for (let i = 0; i < text.length; i++) {
      currentGroup += text[i];
      
      // Group 2-3 characters together for better rendering
      if (currentGroup.length >= 2 || i === text.length - 1) {
        groups.push(currentGroup);
        currentGroup = '';
      }
    }
    
    return groups.map((group, groupIndex) => (
      <span 
        key={groupIndex}
        className="arabic-group"
        style={{
          color: isHovered 
            ? (groupIndex % 2 === 0 ? '#ffffff' : '#4ade80')
            : '#000',
          display: 'inline-block',
          marginRight: groupIndex < groups.length - 1 ? '-0.2em' : '0'
        }}
      >
        {group}
      </span>
    ));
  };

  return (
    <div className="arabic-text-renderer" style={{
      fontFamily: 'inherit',
      fontSize: 'inherit',
      direction: 'rtl',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }}>
      {renderText()}
    </div>
  );
};

export default ArabicTextRenderer;