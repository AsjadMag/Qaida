import React, { useState, useRef, useEffect } from 'react';
import TitlePage from './pages/TitlePage';
import LessonPage from './pages/LessonPage';
import { chapterData, chapterNumbers, chapterStartPages, totalPages, advancedStartPage } from './data';
import useIsMobile from './useIsMobile';

// Small inline-SVG flags (regional-indicator emoji don't render as flags on Windows)
const flagStyle = {
  width: '22px',
  height: '15px',
  borderRadius: '2px',
  verticalAlign: '-2px',
  marginRight: '7px',
  boxShadow: '0 0 0 1px rgba(255,255,255,0.35)',
  flexShrink: 0,
};

const USFlag = () => (
  <svg viewBox="0 0 7410 3900" style={flagStyle} aria-label="USA" role="img">
    <rect width="7410" height="3900" fill="#b22234" />
    <g fill="#fff">
      <rect y="300" width="7410" height="300" />
      <rect y="900" width="7410" height="300" />
      <rect y="1500" width="7410" height="300" />
      <rect y="2100" width="7410" height="300" />
      <rect y="2700" width="7410" height="300" />
      <rect y="3300" width="7410" height="300" />
    </g>
    <rect width="2964" height="2100" fill="#3c3b6e" />
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 60 30" style={flagStyle} aria-label="UK" role="img">
    <clipPath id="ukclip"><rect width="60" height="30" /></clipPath>
    <g clipPath="url(#ukclip)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 60,30 M60,0 0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#ukclip)" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

function App() {
  const isMobile = useIsMobile();
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
        <TitlePage
          onBasic={() => { setCurrentPage(1); scrollToTop(); }}
          onAdvanced={() => { setCurrentPage(advancedStartPage); scrollToTop(); }}
        />
      ) : isLastPage ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '86vh',
          background: 'linear-gradient(165deg, #ffffff 0%, #f0faea 40%, #dcefcf 68%, #f1dfa0 100%)',
          borderRadius: '28px',
          padding: '60px 40px 120px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          gap: '26px',
        }}>
          {/* soft centered glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -55%)',
            width: '640px', height: '640px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(246,204,68,0.22) 0%, rgba(76,175,80,0.07) 48%, transparent 72%)',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* brand logo */}
          <img
            src="/images/TajweedClassLogo_trans.webp"
            alt="Tajweed Classes"
            style={{
              display: 'block',
              width: 'min(320px, 74vw)',
              height: 'auto',
              zIndex: 1,
              filter: 'drop-shadow(0 6px 18px rgba(27,94,32,0.18))',
            }}
          />

          {/* Arabic — JazakAllah Khairan */}
          <div style={{
            fontFamily: "'Amiri Quran', serif",
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            color: '#1b5e20',
            direction: 'rtl',
            lineHeight: 1.7,
            padding: '0 0.2em',
            textShadow: '0 2px 14px rgba(212,160,23,0.25)',
            zIndex: 1,
          }}>
            جَزَاكُمُ اللَّهُ خَيْرًا
          </div>

          {/* gold ornament divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', zIndex: 1 }}>
            <div style={{ width: 'clamp(50px, 14vw, 110px)', height: '1.5px', background: 'linear-gradient(90deg, transparent, #c9960c)' }} />
            <div style={{ width: '9px', height: '9px', background: '#c9960c', transform: 'rotate(45deg)', borderRadius: '2px', boxShadow: '0 0 8px rgba(201,150,12,0.5)' }} />
            <div style={{ width: 'clamp(50px, 14vw, 110px)', height: '1.5px', background: 'linear-gradient(90deg, #c9960c, transparent)' }} />
          </div>

          {/* main heading */}
          <h2 style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
            fontWeight: 'bold',
            color: '#1b5e20',
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
            direction: 'ltr',
            textShadow: '0 2px 0 rgba(255,255,255,0.55), 0 6px 18px rgba(212,160,23,0.22)',
            zIndex: 1,
          }}>
            Thank You for Reading!
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 2.4vw, 1.2rem)',
            color: '#2e7d32',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '3px',
            margin: 0,
            direction: 'ltr',
            textTransform: 'uppercase',
            fontWeight: 600,
            zIndex: 1,
          }}>
            May Allah Bless Your Learning
          </p>

          {/* bottom tagline */}
          <p style={{
            color: 'rgba(27,94,32,0.6)',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '2.5px',
            fontSize: '0.95rem',
            fontWeight: 600,
            zIndex: 1,
            margin: '8px 0 0',
          }}>
            Keep Practicing <span style={{ color: '#d4a017' }}>•</span> Stay Consistent
          </p>
        </div>
      ) : (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <LessonPage pageNumber={currentPage} />
        </div>
      )}

      {/* "Tajweed Classes" watermark — tiled faintly behind the lesson content */}
      {currentPage >= 1 && !isLastPage && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='340' height='220'><text x='10' y='130' font-family='Arial, sans-serif' font-size='26' font-weight='bold' fill='rgba(46,125,50,0.07)' transform='rotate(-28 170 110)'>Tajweed Classes</text></svg>`
            )}")`,
            backgroundRepeat: 'repeat',
          }}
        />
      )}

      {currentPage >= 1 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(180deg, #14401a 0%, #0d2a11 100%)',
          display: 'flex',
          flexDirection: 'column',
          backdropFilter: 'blur(12px)',
          borderTop: '3px solid #f6cc44',
          zIndex: 1000
        }}>
          {/* Navigation row — desktop / tablet */}
          {!isMobile && (
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            padding: '14px 24px',
            direction: 'ltr',
          }}>
            {/* Contact details list on the left */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '3px',
              flexShrink: 0,
              direction: 'ltr',
              fontFamily: 'Arial, sans-serif',
            }}>
              <a href="https://tajweedclasses.com" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#dff5dc', fontSize: '0.90rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.2px' }}>
                <span style={{ color: '#f6cc44', marginRight: '7px', fontSize: '1rem', lineHeight: 1 }}>›</span>
                🌐 tajweedclasses.com
              </a>
              <a href="tel:+19342012717"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#dff5dc', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.2px' }}>
                <span style={{ color: '#f6cc44', marginRight: '7px', fontSize: '1rem', lineHeight: 1 }}>›</span>
                <USFlag /> USA: +1 934 201 2717
              </a>
              <a href="tel:+447482798122"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#dff5dc', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.2px' }}>
                <span style={{ color: '#f6cc44', marginRight: '7px', fontSize: '1rem', lineHeight: 1 }}>›</span>
                <UKFlag /> UK: +44 74 8279 8122
              </a>
            </div>

            {/* Center navigation buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '25px',
              flex: '1 1 auto',
              flexWrap: 'nowrap',
              direction: 'rtl',
            }}>
            <button onClick={() => setCurrentPage(0)} className="nav-btn"
              style={{
                padding: '14px 28px',
                fontSize: '1.4rem',
                borderRadius: '50px',
                border: 'none',
                background: '#e05a4f',
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
                background: isLastPage ? '#666' : 'linear-gradient(135deg, #4caf50, #2e7d32)',
                color: 'white',
                cursor: isLastPage ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>
              Next
            </button>

            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              minWidth: '130px',
              textAlign: 'center',
              color: '#f6cc44',
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
                background: currentPage === 1 ? '#666' : 'linear-gradient(135deg, #f6cc44, #d4a017)',
                color: currentPage === 1 ? 'white' : '#1b3a1c',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>
              Previous
            </button>
            </div>

            {/* Index on the right */}
            <button onClick={() => setShowMenu(true)} className="nav-btn"
              style={{
                flexShrink: 0,
                padding: '14px 24px',
                fontSize: '1.4rem',
                borderRadius: '50px',
                border: '2px solid #f6cc44',
                background: 'transparent',
                color: '#f6cc44',
                cursor: 'pointer',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '1px'
              }}>
              ☰ Index
            </button>
          </div>
          )}

          {/* Navigation — mobile (compact, stacked) */}
          {isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px 12px', direction: 'ltr' }}>
            {/* Row 1: Previous · Page · Next */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', direction: 'rtl' }}>
              <button onClick={goNext} className="nav-btn" disabled={isLastPage}
                style={{
                  flex: '1 1 0', padding: '11px 8px', fontSize: '1rem', borderRadius: '50px', border: 'none',
                  background: isLastPage ? '#666' : 'linear-gradient(135deg, #4caf50, #2e7d32)', color: 'white',
                  cursor: isLastPage ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontFamily: 'Arial, sans-serif',
                }}>
                Next
              </button>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', minWidth: '84px', textAlign: 'center', color: '#f6cc44', fontFamily: 'Arial, sans-serif', flexShrink: 0 }}>
                Page {currentPage}
              </div>
              <button onClick={goPrev} disabled={currentPage === 1} className="nav-btn"
                style={{
                  flex: '1 1 0', padding: '11px 8px', fontSize: '1rem', borderRadius: '50px', border: 'none',
                  background: currentPage === 1 ? '#666' : 'linear-gradient(135deg, #f6cc44, #d4a017)',
                  color: currentPage === 1 ? 'white' : '#1b3a1c', cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold', fontFamily: 'Arial, sans-serif',
                }}>
                Previous
              </button>
            </div>

            {/* Row 2: Exit · Index */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <button onClick={() => setCurrentPage(0)} className="nav-btn"
                style={{
                  flex: '1 1 0', padding: '10px 8px', fontSize: '0.95rem', borderRadius: '50px', border: 'none',
                  background: '#e05a4f', color: 'white', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'sans-serif',
                }}>
                Exit
              </button>
              <button onClick={() => setShowMenu(true)} className="nav-btn"
                style={{
                  flex: '1 1 0', padding: '10px 8px', fontSize: '0.95rem', borderRadius: '50px', border: '2px solid #f6cc44',
                  background: 'transparent', color: '#f6cc44', cursor: 'pointer', fontFamily: 'Arial, sans-serif', letterSpacing: '1px',
                }}>
                ☰ Index
              </button>
            </div>

            {/* Row 3: contact strip */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
              gap: '3px 14px', direction: 'ltr', fontFamily: 'Arial, sans-serif',
              paddingTop: '6px', borderTop: '1px solid rgba(246,204,68,0.22)',
            }}>
              <a href="https://tajweedclasses.com" target="_blank" rel="noopener noreferrer"
                style={{ color: '#dff5dc', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none' }}>
                🌐 tajweedclasses.com
              </a>
              <a href="tel:+19342012717"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#dff5dc', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none' }}>
                <USFlag /> +1 934 201 2717
              </a>
              <a href="tel:+447482798122"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#dff5dc', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none' }}>
                <UKFlag /> +44 74 8279 8122
              </a>
            </div>
          </div>
          )}
        </div>
      )}

      {/* Chapter Index Overlay */}
      {showMenu && (
        <div
          onClick={() => { setShowMenu(false); setSearchQuery(''); setGoToPageInput(''); }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(13, 42, 17, 0.55)',
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
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1b5e20', fontFamily: 'Arial, sans-serif', direction: 'ltr' }}>
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
                  background: 'rgba(27,94,32,0.08)',
                  border: '1.5px solid rgba(27,94,32,0.25)',
                  color: '#1b5e20',
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
            <div className="index-search-row" style={{
              padding: '12px 16px',
              borderBottom: '1.5px solid rgba(201,150,12,0.25)',
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              flexShrink: 0,
              background: 'rgba(255,255,255,0.4)',
            }}>
              {/* Chapter search */}
              <input
                type="text"
                placeholder="Search chapter..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  border: '1.5px solid rgba(201,150,12,0.4)',
                  background: 'rgba(255,255,255,0.85)',
                  color: '#1b5e20',
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
                  color: '#1b5e20',
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
                      <div style={{ fontSize: '1.35rem', fontWeight: 'bold', color: isActive ? '#1b5e20' : '#14401a', fontFamily: 'Arial, sans-serif', direction: 'ltr', textAlign: 'left', marginTop: '3px' }}>
                        {chapter.titleEnglish}
                      </div>
                      {/* Page indicator — bottom left */}
                      <div style={{ fontSize: '0.9rem', color: '#9a7800', fontFamily: 'Arial, sans-serif', direction: 'ltr', textAlign: 'left', marginTop: '5px', fontWeight: '500' }}>
                        Page {startPage}
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

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        /* ---- Responsive: lesson content ---- */

        /* ── Tablet (769–1024px) ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .lesson-container { padding: 30px clamp(20px, 5vw, 60px) 200px !important; }
          .lesson-header-title { font-size: clamp(2rem, 4vw, 3rem) !important; }
          .lesson-row { gap: clamp(12px, 2vw, 24px) !important; }
          .teacher-panel { gap: 18px !important; padding: 22px 24px !important; }
          .teacher-panel .teacher-images img { max-width: min(340px, 38vw) !important; }
        }

        /* ── Mobile ≤ 768px ── */
        @media (max-width: 768px) {
          .lesson-container { padding: 20px 14px 240px !important; }
          .lesson-header-title { font-size: clamp(1.7rem, 7vw, 2.6rem) !important; }
          .lesson-row { gap: 14px !important; margin-bottom: 34px !important; }
          .lesson-card-wrap { padding: 12px !important; margin: -12px !important; }
          /* Fixed 20px padding is huge on a small phone card — shrink it so
             letters and card images have room to render at a usable size.
             white-space:normal lets over-wide labels (e.g. "Pause Condition")
             wrap instead of being clipped; Arabic words have no internal break
             points so they stay on one line and are unaffected. */
          .word-card .letter { padding: 10px !important; white-space: normal !important; }
          /* Condition header cards ("Writing/Pause/Joining Condition" + down arrow):
             shrink the label and arrow so the full two-line label + arrow fit. */
          .word-card.has-down-arrow .letter { font-size: 1rem !important; line-height: 1.15 !important; }
          .word-card.has-down-arrow .down-arrow { font-size: 1.4rem !important; margin-top: 6px !important; }
          /* Separator cards ("X ⇐ Y", "a = b") stack their parts vertically and
             each part may contain spaced letters — keep them on one line (nowrap)
             and size by width AND height (3 stacked lines) so everything fits. */
          .word-card.has-separator .letter { white-space: nowrap !important; font-size: min(24cqw, 20cqh) !important; gap: 2px !important; }

          .teacher-panel {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
            padding: 18px 18px !important;
            margin-bottom: 40px !important;
          }
          .teacher-panel > div { min-width: 0 !important; }
          .teacher-panel .teacher-title { font-size: 1.5rem !important; }
          .teacher-panel .teacher-list { font-size: 1.1rem !important; line-height: 1.7rem !important; }
          .teacher-panel .teacher-goal,
          .teacher-panel .teacher-note { font-size: 1.1rem !important; padding: 12px 16px !important; }
          .teacher-panel .teacher-images { width: 100% !important; }
          /* Cap wide/landscape diagrams to the available width so they fill the
             screen without being cut, while small images keep their intended size. */
          .teacher-panel .teacher-images img { max-width: 100% !important; height: auto !important; }

          /* WordCard images are tiny at 50% on a small phone card — enlarge them. */
          .card-image { max-width: 92% !important; max-height: 92% !important; }
        }

        /* ── Small mobile ≤ 480px ── */
        @media (max-width: 480px) {
          .lesson-container { padding: 16px 8px 240px !important; }
          .lesson-row { gap: 10px !important; }
          .word-card .letter { padding: 6px !important; }
          .index-search-row input[type="text"] { flex: 1 1 100% !important; }
        }

        /* ── Large screens ≥ 1441px: cap page width, scale type up slightly ── */
        @media (min-width: 1441px) {
          .lesson-container { padding: 50px clamp(60px, 8vw, 240px) 220px !important; }
          .lesson-header-title { font-size: clamp(3.4rem, 3.5vw, 5rem) !important; }
          .lesson-row { gap: clamp(24px, 2vw, 56px) !important; }
          .teacher-panel { gap: 28px !important; padding: 32px 36px !important; }
          .teacher-panel .teacher-title { font-size: 2.4rem !important; }
          .teacher-panel .teacher-list { font-size: 1.5rem !important; }
          .chapter-index-btn { padding: 18px 24px; font-size: 1.1rem; }
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
