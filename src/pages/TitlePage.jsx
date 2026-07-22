import React from 'react';

// Big landing-page mode button (green = Basic, gold = Advanced) - matches the brand logo
const ModeButton = ({ label, sublabel, onClick, variant }) => {
  const palettes = {
    green: {
      bg: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 50%, #4caf50 100%)',
      base: '0 5px 0 #1b5e20, 0 12px 30px rgba(46,125,50,0.28)',
      hover: '0 8px 0 #1b5e20, 0 18px 42px rgba(46,125,50,0.4)',
      color: '#ffffff',
      subColor: 'rgba(255,255,255,0.82)',
    },
    gold: {
      bg: 'linear-gradient(135deg, #f6cc44 0%, #d4a017 50%, #f6cc44 100%)',
      base: '0 5px 0 #9a7500, 0 12px 30px rgba(212,160,23,0.28)',
      hover: '0 8px 0 #9a7500, 0 18px 42px rgba(212,160,23,0.42)',
      color: '#1b3a1c',
      subColor: 'rgba(27,58,28,0.68)',
    },
  };
  const p = palettes[variant];
  return (
    <button
      onClick={onClick}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '15px clamp(20px, 5vw, 44px)',
        minWidth: 'clamp(160px, 40vw, 230px)',
        background: p.bg,
        backgroundSize: '200% 200%',
        color: p.color,
        border: 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
        boxShadow: p.base,
        zIndex: 1,
        transition: 'transform 0.18s, box-shadow 0.18s',
        minHeight: '44px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = p.hover;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = p.base;
      }}
    >
      <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.45rem)', fontWeight: 'bold', letterSpacing: '0.5px' }}>
        {label}
      </span>
      <span style={{ fontSize: 'clamp(0.62rem, 1.4vw, 0.7rem)', letterSpacing: '1.8px', textTransform: 'uppercase', color: p.subColor }}>
        {sublabel}
      </span>
    </button>
  );
};

// A small, refined gold ornament divider (pure CSS - no emoji)
const Ornament = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', zIndex: 1 }}>
    <div style={{ width: 'clamp(50px, 14vw, 110px)', height: '1.5px', background: 'linear-gradient(90deg, transparent, #c9960c)' }} />
    <div style={{ width: '9px', height: '9px', background: '#c9960c', transform: 'rotate(45deg)', borderRadius: '2px', boxShadow: '0 0 8px rgba(201,150,12,0.5)' }} />
    <div style={{ width: 'clamp(50px, 14vw, 110px)', height: '1.5px', background: 'linear-gradient(90deg, #c9960c, transparent)' }} />
  </div>
);

const TitlePage = ({ onBasic, onAdvanced }) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(165deg, #ffffff 0%, #f0faea 40%, #dcefcf 68%, #f1dfa0 100%)',
    }}>

      {/* Brand logo - pinned to the top-left corner with tagline beneath */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '30px',
        zIndex: 3,
        textAlign: 'left',
        direction: 'ltr',
      }}>
        <img
          src="/images/brand/TajweedClassLogo_trans.webp"
          alt="Tajweed Classes"
          style={{
            display: 'block',
            width: 'min(225px, 26vw, 46vh)',
            height: 'auto',
            filter: 'drop-shadow(0 4px 12px rgba(27,94,32,0.16))',
          }}
        />
        <p style={{
          margin: '6px 0 0 6px',
          fontSize: 'clamp(0.72rem, 1.7vw, 0.92rem)',
          fontWeight: 700,
          color: '#2e7d32',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '1.5px',
        }}>
          Love Quran <span style={{ color: '#d4a017' }}>•</span> Learn Quran
        </p>
      </div>

      {/* Soft centered glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -52%)',
        width: 'clamp(300px, 80vw, 680px)', height: 'clamp(300px, 80vw, 680px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246,204,68,0.22) 0%, rgba(76,175,80,0.07) 48%, transparent 72%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Bismillah - centered Quranic calligraphy */}
      <div style={{
        fontFamily: "'Amiri Quran', serif",
        fontSize: 'clamp(2rem, 6vw, 3.6rem)',
        color: '#1b5e20',
        direction: 'rtl',
        lineHeight: 1.7,
        marginBottom: '22px',
        padding: '0 0.2em',
        textShadow: '0 2px 14px rgba(212,160,23,0.25)',
        zIndex: 1,
      }}>
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>

      <Ornament />

      {/* App name - hero title */}
      <h1 className="urdu-text" style={{
        fontSize: 'clamp(2.6rem, 7vw, 4.4rem)',
        fontWeight: 'bold',
        color: '#1b5e20',
        textShadow: '0 2px 0 rgba(255,255,255,0.55), 0 6px 18px rgba(212,160,23,0.22)',
        margin: '20px 0 0',
        padding: '0.18em 0.1em 0.12em',
        lineHeight: 1.5,
        textAlign: 'center',
        zIndex: 1,
      }}>
        نورانی قاعدہ
      </h1>
      <p style={{
        margin: '2px 0 36px',
        fontSize: 'clamp(0.82rem, 2.1vw, 1.1rem)',
        color: '#2e7d32',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        fontWeight: '600',
        zIndex: 1,
      }}>
        A Complete Noorani Qaida Course by<br />Tajweedclasses.com
      </p>

      {/* Mode buttons - choose Basic or Advanced Qaida */}
      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        direction: 'ltr',
        zIndex: 1,
      }}>
        <ModeButton
          variant="green"
          label="Basic Qaida"
          sublabel="Start from the beginning"
          onClick={onBasic}
        />
        <ModeButton
          variant="gold"
          label="Advanced Qaida"
          sublabel="Rules &amp; advanced lessons"
          onClick={onAdvanced}
        />
      </div>

      {/* Bottom tagline */}
      <p style={{
        marginTop: '34px',
        fontSize: 'clamp(0.72rem, 1.8vw, 0.95rem)',
        color: 'rgba(27,94,32,0.6)',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '2.5px',
        fontWeight: 600,
        zIndex: 1,
      }}>
        Step by Step <span style={{ color: '#d4a017' }}>•</span> Fun &amp; Easy <span style={{ color: '#d4a017' }}>•</span> For Kids
      </p>
    </div>
  );
};

export default TitlePage;
