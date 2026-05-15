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

const TitlePage = ({ onStart }) => {
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

      {/* Top crescent */}
      <div style={{
        fontSize: '4.5rem',
        marginBottom: '4px',
        zIndex: 1,
        animation: 'floatBob 3.5s ease-in-out infinite alternate',
        filter: 'drop-shadow(0 0 18px rgba(255,215,0,0.8))',
      }}>☪️</div>

      {/* Gem divider */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        marginBottom: '18px', zIndex: 1,
      }}>
        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #ffd700)' }} />
        <span style={{ fontSize: '1.2rem', color: '#ffd700' }}>✦</span>
        <span style={{ fontSize: '1rem',  color: '#ffd700' }}>✦</span>
        <span style={{ fontSize: '1.4rem', color: '#ffd700' }}>✦</span>
        <span style={{ fontSize: '1rem',  color: '#ffd700' }}>✦</span>
        <span style={{ fontSize: '1.2rem', color: '#ffd700' }}>✦</span>
        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, #ffd700, transparent)' }} />
      </div>

      {/* Main title card */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(255,255,255,0.06)',
        border: '2px solid rgba(255,215,0,0.4)',
        borderRadius: '28px',
        padding: '28px 50px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
        marginBottom: '28px',
      }}>
        {/* Corner ornaments */}
        {['top:10px;left:12px', 'top:10px;right:12px', 'bottom:10px;left:12px', 'bottom:10px;right:12px'].map((pos, i) => (
          <span key={i} style={{
            position: 'absolute',
            ...Object.fromEntries(pos.split(';').map(p => p.split(':'))),
            fontSize: '1.3rem', color: '#ffd700', opacity: 0.7,
          }}>✦</span>
        ))}

        <h1 className="urdu-text" style={{
          fontSize: 'clamp(3.8rem, 11vw, 7rem)',
          fontWeight: 'bold',
          color: '#ffd700',
          textShadow: '0 0 30px rgba(255,215,0,0.6), 0 4px 20px rgba(0,0,0,0.4)',
          margin: 0,
          lineHeight: 1.2,
          animation: 'glow 2.5s ease-in-out infinite alternate',
        }}>
          نورانی قاعدہ
        </h1>

        <p style={{
          margin: '12px 0 0',
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: 'rgba(255,235,150,0.9)',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontWeight: '600',
        }}>
          ✨ Learn the Holy Quran ✨
        </p>
      </div>

      {/* Floating icon row */}
      <div style={{
        display: 'flex', gap: '20px',
        marginBottom: '36px',
        zIndex: 1,
      }}>
        {[
          { e: '📖', d: '0s'  },
          { e: '🌙', d: '0.2s'},
          { e: '⭐', d: '0.4s'},
          { e: '🌙', d: '0.6s'},
          { e: '📖', d: '0.8s'},
        ].map(({ e, d }, i) => (
          <span key={i} style={{
            fontSize: '2.4rem',
            animation: `floatBob 2.8s ${d} infinite ease-in-out alternate`,
            filter: 'drop-shadow(0 2px 10px rgba(255,215,0,0.6))',
            display: 'inline-block',
          }}>{e}</span>
        ))}
      </div>

      {/* Start button */}
      <button
        className="urdu-text"
        onClick={onStart}
        style={{
          position: 'relative',
          padding: '22px 88px',
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          background: 'linear-gradient(135deg, #ffd700 0%, #ff9500 50%, #ffd700 100%)',
          backgroundSize: '200% 200%',
          color: '#0a1628',
          border: 'none',
          borderRadius: '60px',
          cursor: 'pointer',
          fontWeight: 'bold',
          letterSpacing: '3px',
          boxShadow: '0 6px 0 #b36e00, 0 10px 40px rgba(255,150,0,0.55)',
          zIndex: 1,
          animation: 'btnShimmer 2.5s linear infinite, btnBounce 1.8s ease-in-out infinite',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 0 #b36e00, 0 18px 55px rgba(255,150,0,0.75)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 0 #b36e00, 0 10px 40px rgba(255,150,0,0.55)';
        }}
      >
         شروع کریں
      </button>

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
