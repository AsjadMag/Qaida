import React, { useState } from 'react';
import './WordCard.css';

const IdghamArrow = ({ src = '/images/shared/Curved%20Arrow.webp' }) => {
  // The green ghunnah arrow (NotArrow) is wider/flatter, so it needs a larger
  // width than the red curved arrow to render at the same visual height.
  const isGhunnah = src.includes('NotArrow');
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{ display: 'block', width: isGhunnah ? '26%' : '22%', height: 'auto', pointerEvents: 'none', flexShrink: 0 }}
    />
  );
};

const WordCard = ({ letter, customFont, useImage, imagePath, imageHoverPath, annotation, arrowImage, downArrow, pageTextLength }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSeparator = letter && (letter.includes('=') || letter.includes('—') || letter.includes('⇐'));
  const isVeryLong = letter && letter.length > 15;

  // Calculate font size based on text length.
  // Uses container-query units: cqw (% of card width) caps the width so text
  // doesn't overflow narrow cards, and cqh (% of card height) caps the glyph
  // height so tall Arabic letters (with harakat) fit short cards on mobile.
  // Desktop cards are tall & wide, so both terms exceed the rem cap there and
  // the original desktop sizing is preserved exactly.
  const getFontSize = (length) => {
    const heightCap = hasSeparator ? '25cqh' : (downArrow ? '32cqh' : '42cqh');
    if (!length || useImage) return `clamp(1rem, min(40cqw, ${heightCap}), 6rem)`;
    if (length <= 5) return `clamp(1rem, min(40cqw, ${heightCap}), 6rem)`;
    if (length <= 10) return `clamp(1rem, min(33cqw, ${heightCap}), 5rem)`;
    if (length <= 15) return `clamp(0.9rem, min(27cqw, ${heightCap}), 4rem)`;
    if (length <= 20) return `clamp(0.8rem, min(23cqw, ${heightCap}), 3.5rem)`;
    return `clamp(0.7rem, min(20cqw, ${heightCap}), 3rem)`;
  };

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
      const isArabicBase = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/.test(char);

      // Check if it's a combining mark (diacritic)
      const isCombiningMark = /[ً-ٟؐ-ؚۖ-ۭ]/.test(char);

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
    const cleaned = text.replace(/[ً-ٟؐ-ؚۖ-ۭ\s​‌‍]/g, '');
    return cleaned.length;
  };

  // Render image instead of text
  const renderImage = () => {
    const currentImagePath = isHovered && imageHoverPath ? imageHoverPath : imagePath;
    return (
      <img
        className="card-image"
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
    const separatorType = separator === '=' ? 'equals' :
      separator === '—' ? 'dash' : 'arrow';

    return (
      <div className={`separated-text separator-${separatorType}`}>
        <span style={{
          color: isHovered ? '#ffffff' : '#000',
          transition: 'color 0.28s',
          direction: 'rtl',
          fontSize: '1em',
        }}>
          {parts[0]}
        </span>

        <span className="word-separator" style={{
          color: isHovered ? '#ffffff' : '#000',
          transition: 'color 0.28s',
        }}>
          {separatorChar}
        </span>

        <span style={{
          color: isHovered ? '#4ade80' : '#000',
          transition: 'color 0.28s',
          direction: 'rtl',
          fontSize: '1em',
        }}>
          {parts[1]}
        </span>
      </div>
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
            const containsArabicLetter = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/.test(visualLetter);
            const isSpaceOrPunctuation = /[\s​‌‍.,!?;:]/.test(visualLetter);

            // For single Arabic letter, always white on hover
            if (arabicLetterCount === 1 && containsArabicLetter && !isSpaceOrPunctuation) {
              return (
                <span key={index} style={{ color: isHovered ? '#ffffff' : '#000', transition: 'color 0.28s' }}>
                  {visualLetter}
                </span>
              );
            }

            // Noon + kasra cluster: keep noon at natural height, raise kasra up beneath it
            if (isSpaceOrPunctuation && visualLetter.includes('ۨ')) {
              const c = isHovered ? '#ffffff' : '#000';
              return (
                <span key={index} style={{
                  display: 'inline-block',
                  position: 'relative',
                  width: '0.7em',
                  margin: '0 0.1em',
                  color: c,
                  transition: 'color 0.28s',
                }}>
                  {/* noon at its natural high position */}
                  <span style={{ fontSize: '0.85em', verticalAlign: 'super', lineHeight: 1 }}>{'ۨ'}</span>
                  {/* kasra raised up to sit right below the noon */}
                  <span style={{ fontSize: '0.78em', verticalAlign: '0.35em', lineHeight: 1 }}>{'ِ'}</span>
                </span>
              );
            }

            // For spaces and punctuation, keep them white
            if (isSpaceOrPunctuation) {
              // The Arabic Quran fonts used here render U+0020/U+00A0 with zero
              // advance width, so a literal space in card text is invisible unless
              // we give it an explicit width ourselves.
              const isWhitespace = /^[\s​‌‍]+$/.test(visualLetter);
              return (
                <span key={index} style={{
                  color: isHovered ? '#ffffff' : '#000',
                  transition: 'color 0.28s',
                  ...(isWhitespace ? { display: 'inline-block', width: '0.3em' } : {}),
                }}>
                  {visualLetter}
                </span>
              );
            }

            // For actual Arabic letters in multi-letter words: alternate colors
            if (containsArabicLetter && arabicLetterCount > 1) {
              const currentLetterIndex = letterIndex;
              letterIndex++;
              const isEvenIndex = currentLetterIndex % 2 === 0;
              return (
                <span key={index} style={{ color: isHovered ? (isEvenIndex ? '#ffffff' : '#4ade80') : '#000', transition: 'color 0.28s' }}>
                  {visualLetter}
                </span>
              );
            }

            // For anything else (shouldn't happen), use default
            return (
              <span key={index} style={{ color: isHovered ? '#ffffff' : '#000', transition: 'color 0.28s' }}>
                {visualLetter}
              </span>
            );
          })}
        </span>
      </div>
    );
  };

  const showArrow = annotation === 'idgham' && !useImage;

  return (
    <div
      className={`word-card ${isVeryLong ? 'multi-line' : ''} ${downArrow ? 'has-down-arrow' : ''} ${hasSeparator ? 'has-separator' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="letter"
        style={{
          fontFamily: customFont ? `${customFont}, serif` : 'ArabQuranIslamic_1, serif',
          fontSize: getFontSize(pageTextLength || Array.from(letter || '').length),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          whiteSpace: isVeryLong || downArrow ? 'normal' : 'nowrap',
        }}
      >
        {showArrow && <IdghamArrow src={arrowImage || undefined} />}
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
        {downArrow && (
          <div
            aria-hidden="true"
            className="down-arrow"
            style={{
              direction: 'ltr',
              fontFamily: 'Arial, sans-serif',
              fontSize: '2.4rem',
              lineHeight: 1,
              marginTop: '14px',
              color: isHovered ? '#ffffff' : '#1b5e20',
              transition: 'color 0.28s',
            }}
          >
            ↓
          </div>
        )}
      </div>
    </div>
  );
};

export default WordCard;
