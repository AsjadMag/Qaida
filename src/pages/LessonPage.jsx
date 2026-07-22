import React from 'react';
import WordCard from '../components/WordCard';
import useIsMobile from '../useIsMobile';
import '../index.css';
import { chapterData, chapterNumbers, totalPages } from '../data';

// Inline {{IMG:...|size}} symbols must scale with the surrounding (already
// responsive) text. `rem` is fixed to the document root, so a size authored
// in `rem` would stay full-size on small screens while the text shrinks;
// `em` scales with the inherited, clamp()-driven font-size instead.
const inlineSymbolMaxHeight = (customSize) => (customSize || '2.2rem').replace(/rem$/, 'em');

const LessonPage = ({ pageNumber }) => {
  const isMobile = useIsMobile();

  if (!pageNumber || pageNumber < 1 || pageNumber > totalPages) {
    return (
      <div className="urdu-text" style={{ textAlign: 'center', padding: '100px 4vw', fontSize: '3rem', color: '#0f2a44' }}>
        صفحہ {pageNumber} جلد ہی شامل کیا جائے گا ان شاء اللہ
      </div>
    );
  }

  // Find which chapter and which page inside that chapter corresponds to the global pageNumber
  let remaining = pageNumber; // 1-based
  let currentChapterNum = chapterNumbers[0];
  let pageInChapter = 0;

  for (const ch of chapterNumbers) {
    const pages = chapterData[ch].pages ? chapterData[ch].pages.length : 0;
    if (remaining <= pages) {
      currentChapterNum = ch;
      pageInChapter = remaining - 1; // zero-based index inside chapter
      break;
    }
    remaining -= pages;
  }

  const currentChapter = chapterData[currentChapterNum];
  const currentLetters = currentChapter.pages[pageInChapter];
  const pageAnnotation = currentChapter.pageAnnotations?.[pageInChapter] ?? null;
  const pageTextLength = currentLetters.flat().reduce((longestLength, item) => {
    if (typeof item === 'object' && item.useImage) return longestLength;
    const text = typeof item === 'object' ? item.text : item;
    return Math.max(longestLength, Array.from(text || '').length);
  }, 1);

  // Determine page-specific title if provided, otherwise use chapter title
  const pageTitle = (currentChapter.pageTitles && currentChapter.pageTitles[pageInChapter])
    ? currentChapter.pageTitles[pageInChapter]
    : { titleArabic: currentChapter.titleArabic, titleEnglish: currentChapter.titleEnglish };

  // Chapter keys are sequential and match the number shown to learners.
  const displayChapterNo = currentChapterNum;

  return (
    <div className="lesson-container" style={{ padding: 'clamp(20px, 3vw, 40px) clamp(16px, 8vw, 96px) 180px', maxWidth: '100%', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '55px' }}>
        {/* Section label - Basic / Advanced */}
        <div style={{
          display: 'inline-block',
          fontSize: '0.95rem',
          fontWeight: 700,
          color: '#7a4800',
          background: 'rgba(246,204,68,0.20)',
          border: '1px solid rgba(201,150,12,0.45)',
          borderRadius: '50px',
          padding: '6px 22px',
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
        }}>
          {displayChapterNo <= 15 ? 'Basic Qaida' : 'Advanced Qaida'}
        </div>

        {/* Chapter overline */}
        <div style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#c9960c',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '10px',
        }}>
          Chapter {displayChapterNo.toString().padStart(2, '0')}
        </div>

        {/* Prominent chapter title (English, consistent) */}
        <h1 className="lesson-header-title" style={{
          fontSize: 'clamp(1.8rem, 5vw, 3.4rem)',
          fontWeight: 800,
          color: '#0f2a44',
          fontFamily: 'Arial, sans-serif',
          margin: '0 auto 16px',
          lineHeight: 1.15,
          letterSpacing: '0.3px',
          maxWidth: '900px',
        }}>
          {pageTitle.titleEnglish}
        </h1>

        {/* Gold underline accent */}
        <div style={{
          width: '96px',
          height: '4px',
          margin: '0 auto',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #f6cc44, #c9960c)',
        }} />
      </div>
      {/* Teacher Instructions: chapter-level (page 0) OR page-specific */}
      {(() => {
        const selectedTeacher = (pageInChapter === 0 && currentChapter.teacherInfo)
          ? currentChapter.teacherInfo
          : (currentChapter.pageTeacherInfo && currentChapter.pageTeacherInfo[pageInChapter])
            ? currentChapter.pageTeacherInfo[pageInChapter]
            : null;

        if (!selectedTeacher) return null;

        const selectedImagePaths = (
          selectedTeacher.imagePaths ||
          (selectedTeacher.imagePath ? [selectedTeacher.imagePath] : null) ||
          (selectedTeacher.image && selectedTeacher.image.imagePath ? [selectedTeacher.image.imagePath] : null) ||
          (currentChapter.teacherImage && currentChapter.teacherImage.imagePath ? [currentChapter.teacherImage.imagePath] : null)
        );

        const selectedImageAlt = (
          selectedTeacher.imageAlt ||
          (selectedTeacher.image && selectedTeacher.image.alt) ||
          (currentChapter.teacherImage && currentChapter.teacherImage.alt) ||
          ''
        );

        return (
          <div
            className="teacher-panel"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '28px',
              background: '#fef9e7',
              borderLeft: '8px solid #f6cc44',
              borderRadius: '12px',
              padding: '28px 36px',
              marginBottom: '60px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              direction: 'ltr',
              textAlign: 'left',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {/* Left: instructions + goal */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4 className="teacher-title" style={{
                fontSize: '2rem',
                color: '#0f2a44',
                marginTop: 0,
                marginBottom: '18px',
                fontWeight: '600',
                borderBottom: '2px solid #f6cc44',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                Teacher Instructions
              </h4>

              <ul className="teacher-list" style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 25px 0',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                lineHeight: '2.4rem',
                color: '#2c3e50',
              }}>
                {selectedTeacher.instructions.map((item, idx) => (
                  <li key={idx} style={{
                    marginBottom: '16px',
                    display: 'block',
                    listStyle: 'none',
                  }}>
                    <span style={{ display: 'inline', overflowWrap: 'anywhere' }}>
                      {item.split(/(\*\*.*?\*\*|\{\{IMG:.*?\}\})/g).map((part, index) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={index}>{part.slice(2, -2)}</strong>;
                        }
                        if (part.startsWith('{{IMG:') && part.endsWith('}}')) {
                          const inner = part.slice(6, -2); // e.g. "/images/shared/Zabar.webp" or "/images/shared/Zabar.webp|4rem"
                          const [src, customSize] = inner.split('|');
                          return (
                            <img
                              key={index}
                              src={src}
                              alt="symbol"
                              style={{
                                height: 'auto',
                                width: 'auto',
                                maxHeight: inlineSymbolMaxHeight(customSize),
                                maxWidth: '100%',
                                verticalAlign: 'middle',
                                display: 'inline-block',
                                margin: '0 4px',
                                mixBlendMode: 'multiply',
                              }}
                            />
                          );
                        }
                        return <span key={index}>{part}</span>;
                      })}
                    </span>
                  </li>
                ))}
              </ul>

              {selectedTeacher.goal && (
                <div className="teacher-goal" style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                  color: '#0f2a44',
                  backgroundColor: '#fff3d6',
                  padding: '16px 24px',
                  borderRadius: '40px',
                  marginTop: '5px',
                  fontWeight: '500',
                  border: '1px dashed #f6cc44',
                }}>
                  <strong>Goal:</strong> {selectedTeacher.goal}
                </div>
              )}

              {selectedTeacher.note && (() => {
                const noteLines = Array.isArray(selectedTeacher.note) ? selectedTeacher.note : [selectedTeacher.note];
                const renderNoteParts = (text, lineIdx) =>
                  text.split(/(\*\*.*?\*\*|\{\{IMG:.*?\}\})/g).map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**'))
                      return <strong key={`${lineIdx}-${index}`}>{part.slice(2, -2)}</strong>;
                    if (part.startsWith('{{IMG:') && part.endsWith('}}')) {
                      const [src, customSize] = part.slice(6, -2).split('|');
                      return (
                        <img
                          key={`${lineIdx}-${index}`}
                          src={src}
                          alt="symbol"
                          style={{ height: 'auto', width: 'auto', maxHeight: inlineSymbolMaxHeight(customSize), maxWidth: '100%', verticalAlign: 'middle', display: 'inline-block', margin: '0 4px', mixBlendMode: 'multiply' }}
                        />
                      );
                    }
                    return <span key={`${lineIdx}-${index}`}>{part}</span>;
                  });
                return noteLines.map((line, lineIdx) => (
                  <div key={lineIdx} className="teacher-note" style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                    color: '#0f2a44',
                    backgroundColor: '#ffe8cc',
                    padding: '16px 24px',
                    borderRadius: '40px',
                    marginTop: '12px',
                    fontWeight: '500',
                    border: '1px dashed #ff9800',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <span style={{ width: '5px', alignSelf: 'stretch', borderRadius: '3px', background: '#ff9800', flexShrink: 0 }} />
                    <span style={{ display: 'inline', overflowWrap: 'anywhere' }}>
                      {renderNoteParts(line, lineIdx)}
                    </span>
                  </div>
                ));
              })()}

            </div>

            {/* Right: teacher image(s) */}
            {selectedImagePaths && (
              <div className="teacher-images" style={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}>
                {selectedImagePaths.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={selectedImageAlt}
                    style={{
                      width: 'min(400px, 38vw)',
                      height: 'auto',
                      borderRadius: '8px',
                      mixBlendMode: 'multiply',
                      ...selectedTeacher.imageStyle,
                      maxWidth: '100%',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })()}

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '40px 0',
        overflow: 'visible',
      }}>
        {currentLetters.map((row, i) => {
          // Calculate appropriate width based on number of cards
          const cardCount = row.length;
          let rowWidth = '100%';
          let rowMargin = '0 auto';

          if (cardCount === 1) {
            rowWidth = isMobile ? '80%' : '50%';
          } else if (cardCount === 2) {
            rowWidth = isMobile ? '96%' : '70%';
          } else if (cardCount === 3) {
            rowWidth = isMobile ? '100%' : '85%';
          }

          return (
            <div key={i} className="lesson-row" style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cardCount}, 1fr)`,
              gap: isMobile ? '10px' : 'clamp(16px, 3vw, 48px)', /* fluid gap instead of fixed 0.5in */
              width: rowWidth,
              margin: rowMargin,
              marginBottom: '60px', /* Space for hover */
              position: 'relative',
            }}>
              {row.map((item, j) => {
                const letter = typeof item === 'object' ? item.text : item;
                const font = typeof item === 'object' ? item.font : null;
                const useImage = typeof item === 'object' ? item.useImage : false;
                const imagePath = typeof item === 'object' ? item.imagePath : null;
                const imageHoverPath = typeof item === 'object' ? item.imageHoverPath : null;
                const arrowImage = typeof item === 'object' ? item.arrowImage : null;
                const downArrow = typeof item === 'object' ? item.downArrow : false;

                return letter ? (
                  <div
                    key={j}
                    className="lesson-card-wrap"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '30px', /* Padding for hover space */
                      margin: '-30px', /* Negative margin to offset padding */
                    }}
                  >
                    <WordCard
                      letter={letter}
                      customFont={font}
                      useImage={useImage}
                      imagePath={imagePath}
                      imageHoverPath={imageHoverPath}
                      annotation={pageAnnotation}
                      arrowImage={arrowImage}
                      downArrow={downArrow}
                      pageTextLength={pageTextLength}
                    />
                  </div>
                ) : (
                  <div key={j}></div>
                );
              })}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default LessonPage;

