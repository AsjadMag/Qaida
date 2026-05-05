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
        </div>
      )}

      {/* Chapter Index Overlay */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
              borderRadius: '20px',
              border: '2px solid gold',
              width: '100%',
              maxWidth: '720px',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '20px 28px',
              borderBottom: '1px solid rgba(255,215,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ffd700', fontFamily: 'Arial, sans-serif', direction: 'ltr' }}>
                  Chapter Index
                </div>
                <div style={{ fontSize: '1.4rem', color: '#aaa', fontFamily: 'Arial, sans-serif', direction: 'ltr' }}>
                  {chapterNumbers.length} chapters
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowMenu(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
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
                      background: isActive ? '#ffd700' : 'rgba(255,215,0,0.2)',
                      color: isActive ? '#000' : '#ffd700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      flexShrink: 0,
                    }}>
                      {idx + 1}
                    </div>

                    {/* Titles */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.6rem', color: isActive ? '#ffd700' : 'white', fontFamily: 'ArabQuranIslamic_1, serif', fontWeight: 'normal' }}>
                        {chapter.titleArabic}
                      </div>
                      <div style={{ fontSize: '1.1rem', color: '#aaa', fontFamily: 'Arial, sans-serif', direction: 'ltr', textAlign: 'left', marginTop: '2px' }}>
                        {chapter.titleEnglish}
                      </div>
                    </div>

                    {/* Page indicator */}
                    <div style={{ fontSize: '1rem', color: '#666', fontFamily: 'Arial, sans-serif', direction: 'ltr', flexShrink: 0 }}>
                      p.{startPage}
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
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          cursor: pointer;
          text-align: right;
          direction: rtl;
          transition: background 0.2s, border-color 0.2s, transform 0.15s, box-shadow 0.2s;
          width: 100%;
        }
        .chapter-index-btn:hover {
          background: rgba(255,255,255,0.12) !important;
          border-color: rgba(255,215,0,0.4) !important;
          transform: translateX(-4px);
          box-shadow: 4px 0 16px rgba(255,215,0,0.15);
        }
        .chapter-index-btn:active {
          transform: translateX(-2px) scale(0.98);
        }
        .chapter-index-btn.active {
          background: rgba(255,215,0,0.15) !important;
          border: 1px solid rgba(255,215,0,0.6) !important;
        }
        .chapter-index-btn.active:hover {
          background: rgba(255,215,0,0.22) !important;
          transform: translateX(-4px);
          box-shadow: 4px 0 16px rgba(255,215,0,0.25);
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
