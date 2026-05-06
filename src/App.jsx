import React, { useState } from 'react';
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

  const goNext = () => { setCurrentPage(prev => prev + 1); scrollToTop(); };
  const goPrev = () => { setCurrentPage(prev => Math.max(1, prev - 1)); scrollToTop(); };

  const jumpToChapter = (chapterNum) => {
    setCurrentPage(chapterStartPages[chapterNum]);
    setShowMenu(false);
    scrollToTop();
  };

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
            style={{
              padding: '14px 34px',
              fontSize: '1.4rem',
              borderRadius: '50px',
              border: 'none',
              background: '#4ecdc4',
              color: 'white',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}>
            Next
          </button>

          <button onClick={() => setShowMenu(true)} className="nav-btn"
            style={{
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
        </div>
      )}

      {/* Chapter Index Overlay */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
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
                onClick={() => setShowMenu(false)}
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

            {/* Chapter list */}
            <div style={{ overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {chapterNumbers.map((num, idx) => {
                const chapter = chapterData[num];
                const startPage = chapterStartPages[num];
                const isActive = currentPage >= startPage &&
                  (idx === chapterNumbers.length - 1 || currentPage < chapterStartPages[chapterNumbers[idx + 1]]);
                return (
                  <button
                    key={num}
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
                      {idx + 1}
                    </div>

                    {/* Titles */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.1rem', color: '#9a8050', fontFamily: 'ArabQuranIslamic_1, serif', fontWeight: 'normal' }}>
                        {chapter.titleArabic}
                      </div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 'bold', color: isActive ? '#7a4800' : '#0f2a44', fontFamily: 'Arial, sans-serif', direction: 'ltr', textAlign: 'left', marginTop: '3px' }}>
                        {chapter.titleEnglish}
                      </div>
                      {/* Page indicator — bottom left */}
                      <div style={{ fontSize: '0.9rem', color: '#9a7800', fontFamily: 'Arial, sans-serif', direction: 'ltr', textAlign: 'left', marginTop: '5px', fontWeight: '500' }}>
                        p.{startPage}
                      </div>
                    </div>
                  </button>
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
