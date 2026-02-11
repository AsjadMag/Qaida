import React, { useState } from 'react';
import './WordCard.css';

const WordCard = ({ letter, customFont, useImage, imagePath, imageHoverPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate font size based on text length
  const getFontSize = (text) => {
    if (!text || useImage) return '6rem';
    const length = text.length;
    if (length <= 5) return '6rem';
    if (length <= 10) return '5rem';
    if (length <= 15) return '4rem';
    if (length <= 20) return '3.5rem';
    return '3rem'; // Very long strings
  };

  // Check if text contains special separators
  const hasSeparator = letter && (letter.includes('=') || letter.includes('—') || letter.includes('⇐'));
  
  // Check if text is very long
  const isVeryLong = letter && letter.length > 15;

  // More robust Arabic text splitter using Intl.Segmenter if available
  const splitArabicText = (text) => {
    // First, check if Intl.Segmenter is available (modern browsers)
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      try {
        const segmenter = new Intl.Segmenter('ar', { granularity: 'grapheme' });
        const segments = Array.from(segmenter.segment(text));
        return segments.map(segment => segment.segment);
      } catch (e) {
        // Fall back to manual splitting
        console.log('Intl.Segmenter failed, using fallback');
      }
    }
    
    // Fallback: Manual splitting with improved regex
    // This regex tries to capture Arabic letters along with their diacritics
    const graphemeRegex = /(\p{Script=Arabic}\p{M}*|\p{M}+|[^\p{Script=Arabic}\p{M}])/gu;
    const matches = text.match(graphemeRegex) || [];
    
    // Further grouping: combine base letters with their following marks
    const result = [];
    let current = '';
    
    for (let i = 0; i < matches.length; i++) {
      const char = matches[i];
      
      // Check if it's an Arabic base character
      const isArabicBase = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(char);
      
      // Check if it's a combining mark (diacritic)
      const isCombiningMark = /[\u064B-\u065F\u0610-\u061A\u06D6-\u06ED]/.test(char);
      
      if (isArabicBase && current === '') {
        // Start a new group with Arabic base character
        current = char;
      } else if (isCombiningMark && current !== '') {
        // Add combining mark to current group
        current += char;
      } else if (isArabicBase && current !== '') {
        // New Arabic base, push current and start new
        result.push(current);
        current = char;
      } else {
        // Other characters (spaces, punctuation, etc.)
        if (current !== '') {
          result.push(current);
          current = '';
        }
        result.push(char);
      }
    }
    
    // Don't forget the last group
    if (current !== '') {
      result.push(current);
    }
    
    return result;
  };

  // Helper function to count actual Arabic letters (ignoring diacritics and spaces)
  const countActualArabicLetters = (text) => {
    // Remove common Arabic diacritics and non-letter characters
    const cleaned = text.replace(/[\u064B-\u065F\u0610-\u061A\u06D6-\u06ED\s\u200B\u200C\u200D]/g, '');
    return cleaned.length;
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

  // Render text with separator
  const renderSeparatedText = (separator) => {
    const parts = letter.split(separator);
    const separatorChar = separator === '=' ? '=' : 
                         separator === '—' ? '—' : '⇐';
    const separatorSize = separator === '=' ? '0.5em' : 
                         separator === '—' ? '1.5rem' : '1.5rem'; // ⇐ same size as —
    
    return (
      <>
        {/* Part before separator */}
        <span style={{
          color: isHovered ? '#ffffff' : '#000',
          transition: 'color 0.28s',
          direction: 'rtl',
          fontSize: '1em',
        }}>
          {parts[0]}
        </span>

        {/* Separator */}
        <span style={{
          color: isHovered ? '#ffffff' : '#000',
          fontSize: separatorSize,
          transition: 'color 0.28s',
        }}>
          {separatorChar}
        </span>

        {/* Part after separator */}
        <span style={{
          color: isHovered ? '#4ade80' : '#000',
          transition: 'color 0.28s',
          direction: 'rtl',
          fontSize: '1em',
        }}>
          {parts[1]}
        </span>
      </>
    );
  };

  // Render regular text (without separator) with alternating colors
  const renderRegularText = () => {
    // Split the word into visual Arabic letters
    const visualLetters = splitArabicText(letter);
    
    // Count actual Arabic letters (for color alternation)
    const arabicLetterCount = countActualArabicLetters(letter);
    
    // Track position for color alternation
    let letterIndex = 0;
    
    return (
      <div className={`arabic-text ${arabicLetterCount > 1 ? 'multi-letter' : 'single-letter'}`}>
        <span style={{ direction: 'rtl', display: 'inline-block' }}>
          {visualLetters.map((visualLetter, index) => {
            // Check if this visualLetter contains an actual Arabic letter (not just diacritics or spaces)
            const containsArabicLetter = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(visualLetter);
            const isSpaceOrPunctuation = /[\s\u200B\u200C\u200D.,!?;:]/.test(visualLetter);
            
            // For single Arabic letter, always white on hover
            if (arabicLetterCount === 1 && containsArabicLetter && !isSpaceOrPunctuation) {
              return (
                <span key={index} style={{
                  color: isHovered ? '#ffffff' : '#000',
                  transition: 'color 0.28s'
                }}>
                  {visualLetter}
                </span>
              );
            }
            
            // For spaces and punctuation, keep them white
            if (isSpaceOrPunctuation) {
              return (
                <span key={index} style={{
                  color: isHovered ? '#ffffff' : '#000',
                  transition: 'color 0.28s'
                }}>
                  {visualLetter}
                </span>
              );
            }
            
            // For actual Arabic letters in multi-letter words: alternate colors
            if (containsArabicLetter && arabicLetterCount > 1) {
              // Increment letter index only for actual Arabic letters
              const currentLetterIndex = letterIndex;
              letterIndex++;
              
              // Alternate colors: even indices white, odd indices green
              const isEvenIndex = currentLetterIndex % 2 === 0;
              
              return (
                <span key={index} style={{
                  color: isHovered 
                    ? (isEvenIndex ? '#ffffff' : '#4ade80')
                    : '#000',
                  transition: 'color 0.28s'
                }}>
                  {visualLetter}
                </span>
              );
            }
            
            // For anything else (shouldn't happen), use default
            return (
              <span key={index} style={{
                color: isHovered ? '#ffffff' : '#000',
                transition: 'color 0.28s'
              }}>
                {visualLetter}
              </span>
            );
          })}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`word-card ${isVeryLong ? 'multi-line' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="letter"
        style={{
          fontFamily: customFont ? `${customFont}, serif` : 'ArabQuranIslamic_1, serif',
          fontSize: getFontSize(letter),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: hasSeparator ? '10px' : '0',
          width: '100%',
          padding: isVeryLong ? '10px' : '20px',
          whiteSpace: isVeryLong ? 'normal' : 'nowrap',
        }}
      >
        {useImage ? (
          renderImage()
        ) : hasSeparator && letter.includes('⇐') ? (
          renderSeparatedText('⇐')
        ) : hasSeparator && letter.includes('—') ? (
          renderSeparatedText('—')
        ) : hasSeparator && letter.includes('=') ? (
          renderSeparatedText('=')
        ) : (
          renderRegularText()
        )}
      </div>
    </div>
  );
};

export default WordCard;