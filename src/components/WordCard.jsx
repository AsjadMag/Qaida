import React, { useState } from 'react';
import './WordCard.css';

const WordCard = ({ letter, customFont, useImage, imagePath, imageHoverPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  // التحقق من وجود علامة اليساوي
  const hasEquals = letter && letter.includes('=');

  // منطق تقسيم الكلمة (الحرف الأول والباقي)
  const renderSplitWord = () => {
    if (!letter) return null;

    // الحرف الأول
    const firstChar = letter.charAt(0);
    // بقية الحروف
    const restOfWord = letter.slice(1);

    return (
      <span style={{ direction: 'rtl' }}>
        <span style={{
          color: isHovered ? '#ffffff' : '#000',
          transition: 'color 0.28s'
        }}>
          {firstChar}
        </span>
        <span style={{
          color: isHovered ? '#4ade80' : '#000',
          transition: 'color 0.28s'
        }}>
          {restOfWord}
        </span>
      </span>
    );
  };

  // Render image instead of text
  const renderImage = () => {
    const currentImagePath = isHovered && imageHoverPath ? imageHoverPath : imagePath;
    return (
      <img
        src={currentImagePath}
        alt={letter}
        style={{
          maxWidth: '50%',
          maxHeight: '50%',
          objectFit: 'contain',
          transition: 'opacity 0.28s',
        }}
      />
    );
  };

  return (
    <div
      className="word-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="letter"
        style={{
          fontFamily: customFont ? `${customFont}, serif` : 'ArabQuranIslamic_1, serif',
          fontSize: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: hasEquals ? '10px' : '0',
          width: '100%',
          padding: '20px',
        }}
      >
        {useImage ? (
          // Render image if useImage flag is true
          renderImage()
        ) : hasEquals ? (
          <>
            {/* الجزء قبل = (يتحول للأبيض) */}
            <span style={{
              color: isHovered ? '#ffffff' : '#000',
              transition: 'color 0.28s',
              direction: 'rtl',
            }}>
              {letter.split('=')[0]}
            </span>

            {/* علامة = */}
            <span style={{
              color: isHovered ? '#ffffff' : '#000',
              fontSize: '2rem',
              transition: 'color 0.28s',
            }}>
              =
            </span>

            {/* الجزء بعد = (يتحول للأخضر) */}
            <span style={{
              color: isHovered ? '#4ade80' : '#000',
              transition: 'color 0.28s',
              direction: 'rtl',
            }}>
              {letter.split('=')[1]}
            </span>
          </>
        ) : (
          // المنطق الجديد للكلمات العادية: الأول أبيض والباقي أخضر
          <div className={`arabic-text ${letter.length > 1 ? 'multi-letter' : 'single-letter'}`}>
            {renderSplitWord()}
          </div>
        )}
      </div>
    </div>
  );
};

export default WordCard;