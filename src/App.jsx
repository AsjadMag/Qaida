import React, { useState, useRef, useEffect } from 'react';
import TitlePage from './pages/TitlePage';
import LessonPage, { chapterData } from './pages/LessonPage';

const chapterNumbers = Object.keys(chapterData).map(n => parseInt(n, 10)).sort((a, b) => a - b);

const chapterStartPages = {};
let pageCounter = 1;
for (const num of chapterNumbers) {
  chapterStartPages[num] = pageCounter;
  pageCounter += chapterData[num].pages ? chapterData[num].pages.length : 0;
}

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [goToPageInput, setGoToPageInput] = useState('');
  const activeChapterRef = useRef(null);
  const chapterListRef = useRef(null);

  useEffect(() => {
    if (showMenu && activeChapterRef.current && chapterListRef.current) {
      setTimeout(() => {
        activeChapterRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 80);
    }
  }, [showMenu]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

  const totalPages = pageCounter - 1;
  const isLastPage = currentPage >= totalPages;
  const goNext = () => { if (!isLastPage) { setCurrentPage(prev => prev + 1); scrollToTop(); } };
  const goPrev = () => { setCurrentPage(prev => Math.max(1, prev - 1)); scrollToTop(); };

  const jumpToChapter = (chapterNum) => {
    setCurrentPage(chapterStartPages[chapterNum]);
    setShowMenu(false);
    setSearchQuery('');
    setGoToPageInput('');
    scrollToTop();
  };

  const handleGoToPage = () => {
    const p = parseInt(goToPageInput, 10);
    if (!isNaN(p) && p >= 1 && p <= totalPages) {
      setCurrentPage(p);
      setShowMenu(false);
      setSearchQuery('');
      setGoToPageInput('');
      scrollToTop();
    }
  };

  // Tracks the current section (basic/advanced) while rendering the chapter index
  let lastSection = null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff 0%, #f5e6d3 50%, #f6cc44 100%)',
      direction: 'rtl',
      color: '#0f2a44',
      position: 'relative'
    }}>
      {currentPage === 0 ? (
        <TitlePage onStart={() => setCurrentPage(1)} />
      ) : isLastPage ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          background: 'linear-gradient(160deg, #0a1628 0%, #0d2744 40%, #1a4a7a 75%, #c9960c 100%)',
          borderRadius: '28px',
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          gap: '28px',
        }}>
          {/* radial glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -60%)',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(246,204,68,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* top icon */}
          <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 16px rgba(255,215,0,0.8))', zIndex: 1 }}>☪️</div>

          {/* gem divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1 }}>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, #ffd700)' }} />
            <span style={{ color: '#ffd700', fontSize: '1.2rem' }}>✦</span>
            <span style={{ color: '#ffd700', fontSize: '1.4rem' }}>✦</span>
            <span style={{ color: '#ffd700', fontSize: '1.2rem' }}>✦</span>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #ffd700, transparent)' }} />
          </div>

          {/* main card */}
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '2px solid rgba(255,215,0,0.4)',
            borderRadius: '24px',
            padding: '32px 48px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
            zIndex: 1,
          }}>
            <p style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 'bold',
              color: '#ffd700',
              margin: '0 0 12px',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '2px',
              textShadow: '0 0 30px rgba(255,215,0,0.6)',
            }}>
              🎉 Thank You for Reading! 🎉
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'rgba(255,235,150,0.9)',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '3px',
              margin: 0,
              textTransform: 'uppercase',
            }}>
              May Allah Bless Your Learning
            </p>
          </div>

          {/* floating icons row */}
          <div style={{ display: 'flex', gap: '18px', zIndex: 1 }}>
            {['📖','🌙','⭐','🌙','📖'].map((e, i) => (
              <span key={i} style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 8px rgba(255,215,0,0.6))' }}>{e}</span>
            ))}
          </div>

          {/* bottom tagline */}
          <p style={{
            color: 'rgba(255,235,150,0.6)',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '2px',
            fontSize: '0.95rem',
            zIndex: 1,
            margin: 0,
          }}>
            ★ &nbsp; Keep Practicing &nbsp; ★ &nbsp; Stay Consistent &nbsp; ★
          </p>
        </div>
      ) : (
        <LessonPage pageNumber={currentPage} />
      )}

      {currentPage >= 1 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.85)',
          padding: '18px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '25px',
          backdropFilter: 'blur(12px)',
          borderTop: '3px solid gold',
          zIndex: 1000
        }}>
          <button onClick={() => setCurrentPage(0)} className="nav-btn"
            style={{
              padding: '14px 28px',
              fontSize: '1.4rem',
              borderRadius: '50px',
              border: 'none',
              background: '#ff4757',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontFamily: 'sans-serif'
            }}>
            Exit
          </button>

          <button onClick={goNext} className="nav-btn"
            disabled={isLastPage}
            style={{
              padding: '14px 34px',
              fontSize: '1.4rem',
              borderRadius: '50px',
              border: 'none',
              background: isLastPage ? '#666' : '#4ecdc4',
              color: 'white',
              cursor: isLastPage ? 'not-allowed' : 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}>
            Next
          </button>

          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            minWidth: '130px',
            textAlign: 'center',
            color: '#ffd700',
            fontFamily: 'Arial, sans-serif'
          }}>
            Page {currentPage}
          </div>

          <button onClick={goPrev} disabled={currentPage === 1} className="nav-btn"
            style={{
              padding: '14px 34px',
              fontSize: '1.4rem',
              borderRadius: '50px',
              border: 'none',
              background: currentPage === 1 ? '#666' : '#ff6b6b',
              color: 'white',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}>
            Previous
          </button>

          {/* Index pinned to the right edge */}
          <button onClick={() => setShowMenu(true)} className="nav-btn"
            style={{
              position: 'absolute',
              right: '24px',
              padding: '14px 24px',
              fontSize: '1.4rem',
              borderRadius: '50px',
              border: '2px solid gold',
              background: 'transparent',
              color: 'gold',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '1px'
            }}>
            ☰ Index
          </button>
        </div>
      )}

      {/* Chapter Index Overlay */}
      {showMenu && (
        <div
          onClick={() => { setShowMenu(false); setSearchQuery(''); setGoToPageInput(''); }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 42, 68, 0.55)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'linear-gradient(170deg, #fffdf5 0%, #fff8dc 55%, #f6e89a 100%)',
              borderRadius: '24px',
              border: '2.5px solid #c9960c',
              width: '100%',
              maxWidth: '720px',
              maxHeight: '82vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(15,42,68,0.35), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '20px 28px',
              borderBottom: '1.5px solid rgba(201,150,12,0.35)',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              background: 'linear-gradient(90deg, rgba(246,204,68,0.35) 0%, rgba(255,253,245,0.0) 100%)',
              position: 'relative',
            }}>
              {/* Centered title */}
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0f2a44', fontFamily: 'Arial, sans-serif', direction: 'ltr' }}>
                  Chapter Index
                </div>
                <div style={{ fontSize: '1.1rem', color: '#7a6000', fontFamily: 'Arial, sans-serif', direction: 'ltr', marginTop: '2px' }}>
                  {chapterNumbers.length} chapters
                </div>
              </div>
              {/* Close button pinned to the right */}
              <button
                type="button"
                onClick={() => { setShowMenu(false); setSearchQuery(''); setGoToPageInput(''); }}
                style={{
                  position: 'absolute',
                  right: '20px',
                  background: 'rgba(15,42,68,0.08)',
                  border: '1.5px solid rgba(15,42,68,0.2)',
                  color: '#0f2a44',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }}
              >
                ✕
              </button>
            </div>

            {/* Search + Go to page */}
            <div style={{
              padding: '12px 16px',
              borderBottom: '1.5px solid rgba(201,150,12,0.25)',
              display: 'flex',
              gap: '10px',
              flexShrink: 0,
              background: 'rgba(255,255,255,0.4)',
            }}>
              {/* Chapter search */}
              <input
                type="text"
                placeholder="🔍  Search chapter..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  border: '1.5px solid rgba(201,150,12,0.4)',
                  background: 'rgba(255,255,255,0.85)',
                  color: '#0f2a44',
                  fontFamily: 'Arial, sans-serif',
                  outline: 'none',
                  direction: 'ltr',
                }}
              />
              {/* Go to page */}
              <input
                type="number"
                placeholder={`Page 1–${totalPages}`}
                value={goToPageInput}
                onChange={e => setGoToPageInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleGoToPage()}
                min={1}
                max={totalPages}
                style={{
                  width: '130px',
                  padding: '10px 14px',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  border: '1.5px solid rgba(201,150,12,0.4)',
                  background: 'rgba(255,255,255,0.85)',
                  color: '#0f2a44',
                  fontFamily: 'Arial, sans-serif',
                  outline: 'none',
                  direction: 'ltr',
                }}
              />
              <button
                type="button"
                onClick={handleGoToPage}
                style={{
                  padding: '10px 18px',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: '#c9960c',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: 'Arial, sans-serif',
                  whiteSpace: 'nowrap',
                }}
              >
                Go
              </button>
            </div>

            {/* Chapter list */}
            <div ref={chapterListRef} style={{ overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {chapterNumbers.filter(num => {
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase();
                return (
                  chapterData[num].titleEnglish.toLowerCase().includes(q) ||
                  chapterData[num].titleArabic.includes(searchQuery)
                );
              }).map((num) => {
                const realIdx = chapterNumbers.indexOf(num);
                const chapter = chapterData[num];
                const startPage = chapterStartPages[num];
                const isActive = currentPage >= startPage &&
                  (realIdx === chapterNumbers.length - 1 || currentPage < chapterStartPages[chapterNumbers[realIdx + 1]]);
                // Insert a section divider when entering the Basic (ch 1–15) or Advanced (ch 16+) group
                const section = realIdx < 15 ? 'basic' : 'advanced';
                const showHeader = section !== lastSection;
                lastSection = section;
                const sectionHeader = showHeader ? (
                  <div key={`hdr-${section}`} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    direction: 'ltr', margin: realIdx === 0 ? '2px 4px 6px' : '14px 4px 6px',
                  }}>
                    <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(201,150,12,0.55))' }} />
                    <span style={{
                      fontSize: '1.15rem', fontWeight: 'bold', color: '#7a4800',
                      fontFamily: 'Arial, sans-serif', whiteSpace: 'nowrap', letterSpacing: '0.5px',
                    }}>
                      {section === 'basic' ? 'Basic Qaida · Chapters 1–15' : 'Advanced Qaida · Chapters 16+'}
                    </span>
                    <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, rgba(201,150,12,0.55), transparent)' }} />
                  </div>
                ) : null;
                return (
                  <React.Fragment key={`row-${num}`}>
                  {sectionHeader}
                  <button
                    key={num}
                    ref={isActive ? activeChapterRef : null}
                    type="button"
                    onClick={() => jumpToChapter(num)}
                    className={`chapter-index-btn${isActive ? ' active' : ''}`}
                  >
                    {/* Chapter number badge */}
                    <div style={{
                      minWidth: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: isActive ? '#c9960c' : 'rgba(201,150,12,0.15)',
                      color: isActive ? '#fff' : '#7a6000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      flexShrink: 0,
                      boxShadow: isActive ? '0 2px 10px rgba(201,150,12,0.4)' : 'none',
                    }}>
                      {realIdx + 1}
                    </div>

                    {/* Titles */}
                    <div style={{ flex: 1 }}>
                      {chapter.titleArabic && (
                        <div style={{ fontSize: '1.1rem', color: '#9a8050', fontFamily: 'ArabQuranIslamic_1, serif', fontWeight: 'normal' }}>
                          {chapter.titleArabic}
                        </div>
                      )}
                      <div style={{ fontSize: '1.35rem', fontWeight: 'bold', color: isActive ? '#7a4800' : '#0f2a44', fontFamily: 'Arial, sans-serif', direction: 'ltr', textAlign: 'left', marginTop: '3px' }}>
                        {chapter.titleEnglish}
                      </div>
                      {/* Page indicator — bottom left */}
                      <div style={{ fontSize: '0.9rem', color: '#9a7800', fontFamily: 'Arial, sans-serif', direction: 'ltr', textAlign: 'left', marginTop: '5px', fontWeight: '500' }}>
                        p.{startPage}
                      </div>
                    </div>
                  </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap');

        @font-face {
          font-family: 'ArabQuranIslamic_1';
          src: url('data:font/truetype;charset=utf-8;base64,') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          .word-card {
            height: 3.0in !important;
            font-size: 3.4rem !important;
          }
        }

        .chapter-index-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(201,150,12,0.2);
          border-radius: 14px;
          cursor: pointer;
          text-align: right;
          direction: rtl;
          transition: background 0.2s, border-color 0.2s, transform 0.15s, box-shadow 0.2s;
          width: 100%;
        }
        .chapter-index-btn:hover {
          background: rgba(246,204,68,0.35) !important;
          border-color: rgba(201,150,12,0.55) !important;
          transform: translateX(-4px);
          box-shadow: 4px 0 16px rgba(201,150,12,0.2);
        }
        .chapter-index-btn:active {
          transform: translateX(-2px) scale(0.98);
        }
        .chapter-index-btn.active {
          background: rgba(246,204,68,0.45) !important;
          border: 1.5px solid rgba(201,150,12,0.75) !important;
        }
        .chapter-index-btn.active:hover {
          background: rgba(246,204,68,0.6) !important;
          transform: translateX(-4px);
          box-shadow: 4px 0 16px rgba(201,150,12,0.3);
        }

        .nav-btn {
          transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
        }
        .nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          filter: brightness(1.15);
        }
        .nav-btn:active {
          transform: translateY(0px) scale(0.96);
          filter: brightness(0.95);
        }
        .nav-btn:disabled {
          transform: none !important;
          box-shadow: none !important;
          filter: none !important;
        }
      `}</style>
    </div>
  );
}

export default App;
