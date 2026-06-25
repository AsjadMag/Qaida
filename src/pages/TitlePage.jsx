import React from 'react';

const floaters = [
  { emoji: '⭐', top: '8%',  left: '5%',  size: '2.4rem', dur: '3.1s', delay: '0s'    },
  { emoji: '🌙', top: '12%', left: '88%', size: '2.8rem', dur: '3.8s', delay: '0.4s'  },
  { emoji: '⭐', top: '22%', left: '93%', size: '1.8rem', dur: '2.6s', delay: '0.9s'  },
  { emoji: '✨', top: '35%', left: '3%',  size: '2rem',   dur: '3.4s', delay: '0.2s'  },
  { emoji: '🌟', top: '55%', left: '90%', size: '2.2rem', dur: '2.9s', delay: '1.1s'  },
  { emoji: '⭐', top: '70%', left: '6%',  size: '1.9rem', dur: '3.6s', delay: '0.7s'  },
  { emoji: '✨', top: '80%', left: '85%', size: '2.1rem', dur: '3s',   delay: '0.3s'  },
  { emoji: '🌙', top: '88%', left: '15%', size: '2.5rem', dur: '4s',   delay: '1.4s'  },
  { emoji: '⭐', top: '15%', left: '50%', size: '1.6rem', dur: '2.7s', delay: '0.6s'  },
  { emoji: '🌟', top: '45%', left: '96%', size: '2rem',   dur: '3.3s', delay: '1.8s'  },
  { emoji: '✨', top: '60%', left: '1%',  size: '2.3rem', dur: '3.7s', delay: '0.5s'  },
  { emoji: '⭐', top: '92%', left: '55%', size: '2rem',   dur: '2.5s', delay: '1.2s'  },
];

// Big landing-page mode button (gold = Basic, blue = Advanced)
const ModeButton = ({ label, sublabel, icon, onClick, variant }) => {
  const palettes = {
    gold: {
      bg: 'linear-gradient(135deg, #ffd700 0%, #ff9500 50%, #ffd700 100%)',
      base: '0 6px 0 #b36e00, 0 10px 40px rgba(255,150,0,0.55)',
      hover: '0 10px 0 #b36e00, 0 18px 55px rgba(255,150,0,0.75)',
      color: '#0a1628',
      subColor: 'rgba(10,22,40,0.65)',
    },
    blue: {
      bg: 'linear-gradient(135deg, #4aa3e0 0%, #1a4a7a 50%, #4aa3e0 100%)',
      base: '0 6px 0 #0c2c4d, 0 10px 40px rgba(46,127,196,0.55)',
      hover: '0 10px 0 #0c2c4d, 0 18px 55px rgba(46,127,196,0.8)',
      color: '#ffffff',
      subColor: 'rgba(255,255,255,0.8)',
    },
  };
  const p = palettes[variant];
  return (
    <button
      onClick={onClick}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
        padding: '13px 36px',
        minWidth: '210px',
        background: p.bg,
        backgroundSize: '200% 200%',
        color: p.color,
        border: 'none',
        borderRadius: '42px',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
        boxShadow: p.base,
        zIndex: 1,
        animation: 'btnShimmer 2.5s linear infinite',
        transition: 'transform 0.15s, box-shadow 0.15s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.06) translateY(-4px)';
        e.currentTarget.style.boxShadow = p.hover;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = p.base;
      }}
    >
      <span style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', fontWeight: 'bold', letterSpacing: '1px' }}>
        {icon} {label}
      </span>
      <span style={{ fontSize: '0.72rem', letterSpacing: '1.6px', textTransform: 'uppercase', color: p.subColor }}>
        {sublabel}
      </span>
    </button>
  );
};

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
      background: 'linear-gradient(160deg, #0a1628 0%, #0d2744 30%, #1a4a7a 65%, #c9960c 100%)',
    }}>

      {/* Radial glow behind center */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -60%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246,204,68,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Floating emojis */}
      {floaters.map((f, i) => (
        <span key={i} style={{
          position: 'absolute',
          top: f.top, left: f.left,
          fontSize: f.size,
          animation: `floatBob ${f.dur} ${f.delay} infinite ease-in-out alternate`,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          filter: 'drop-shadow(0 2px 8px rgba(255,215,0,0.5))',
        }}>{f.emoji}</span>
      ))}

      {/* Hero logo — themed emblem (gold wordmark) directly on the gradient */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        marginBottom: '26px',
      }}>
        {/* Warm glow pooling behind the logo */}
        <div style={{
          position: 'absolute',
          inset: '-50px',
          background: 'radial-gradient(circle, rgba(255,205,60,0.22) 0%, transparent 68%)',
          filter: 'blur(8px)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <img
          src="/images/TajweedClassLogo_themed.png"
          alt="Tajweed Classes"
          style={{
            display: 'block',
            width: 'min(500px, 84vw)',
            height: 'auto',
            filter: 'drop-shadow(0 6px 22px rgba(0,0,0,0.45)) drop-shadow(0 0 24px rgba(255,200,50,0.28))',
          }}
        />
      </div>

      {/* App name — supporting subtitle under the hero logo */}
      <h1 className="urdu-text" style={{
        fontSize: 'clamp(2.4rem, 6.5vw, 4rem)',
        fontWeight: 'bold',
        color: '#ffd700',
        textShadow: '0 0 26px rgba(255,215,0,0.55), 0 4px 16px rgba(0,0,0,0.45)',
        margin: 0,
        padding: '0.18em 0.1em 0.12em',
        lineHeight: 1.6,
        textAlign: 'center',
        zIndex: 1,
        animation: 'glow 2.5s ease-in-out infinite alternate',
      }}>
        نورانی قاعدہ
      </h1>
      <p style={{
        margin: '4px 0 34px',
        fontSize: 'clamp(0.85rem, 2.2vw, 1.15rem)',
        color: 'rgba(255,235,150,0.9)',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        fontWeight: '600',
        zIndex: 1,
      }}>
        ✨ Learn the Holy Quran ✨
      </p>

      {/* Mode buttons — choose Basic or Advanced Qaida */}
      <div style={{
        display: 'flex',
        gap: '28px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        direction: 'ltr',
        zIndex: 1,
      }}>
        <ModeButton
          variant="gold"
          icon="📖"
          label="Basic Qaida"
          sublabel="Start from the beginning"
          onClick={onBasic}
        />
        <ModeButton
          variant="blue"
          icon="🌟"
          label="Advanced Qaida"
          sublabel="Rules &amp; advanced lessons"
          onClick={onAdvanced}
        />
      </div>

      {/* Bottom tagline */}
      <p style={{
        marginTop: '28px',
        fontSize: '1rem',
        color: 'rgba(255,235,150,0.6)',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '2px',
        zIndex: 1,
      }}>
        ★ &nbsp; Step by Step &nbsp; ★ &nbsp; Fun &amp; Easy &nbsp; ★ &nbsp; For Kids &nbsp; ★
      </p>

      <style>{`
        @keyframes floatBob {
          0%   { transform: translateY(0px) rotate(-4deg); }
          100% { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes glow {
          0%   { text-shadow: 0 0 20px rgba(255,215,0,0.4), 0 4px 20px rgba(0,0,0,0.4); }
          100% { text-shadow: 0 0 50px rgba(255,215,0,0.95), 0 0 80px rgba(255,150,0,0.5), 0 4px 20px rgba(0,0,0,0.4); }
        }
        @keyframes btnShimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes btnBounce {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default TitlePage;
