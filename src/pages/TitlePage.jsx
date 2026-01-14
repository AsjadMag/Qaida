import React from 'react';

const TitlePage = ({ onStart }) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <img src="/images/title.png" alt="نورانی قاعدہ"
        style={{ maxWidth: '90%', maxHeight: '65vh', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} />

      <h1 className="urdu-text" style={{ fontSize: '4.5rem', margin: '30px 0 10px' }}>نورانی قاعدہ</h1>
      <h2 className="urdu-text" style={{ fontSize: '2.2rem', marginBottom: '50px' }}>بچوں کے لیے آسان قرآن پاک سیکھیں</h2>

      <button className="urdu-text" onClick={onStart}
        style={{
          padding: '20px 70px',
          fontSize: '2.2rem',
          background: '#ffd93d',
          color: '#333',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
          transition: 'all 0.3s'
        }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
      >
        شروع کریں
      </button>
    </div>
  );
};

export default TitlePage;
