import React, { useState } from 'react';
import TitlePage from './pages/TitlePage';
import LessonPage from './pages/LessonPage';


function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const goNext = () => setCurrentPage(prev => prev + 1);
  const goPrev = () => setCurrentPage(prev => Math.max(1, prev - 1));

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
          <button onClick={() => setCurrentPage(0)}
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

          <button onClick={goPrev} disabled={currentPage === 1}
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

          <button onClick={goNext}
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
      `}</style>
    </div>
  );
}

export default App;
