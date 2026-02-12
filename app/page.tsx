'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      fetch('https://script.google.com/macros/s/AKfycbzyr5QT3FG54_CuZBy49t3vC8KFCb2L0J3cVYljpgT3nXecNVkfAD12gP7iDsvZqqy0/exec', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
    }
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0F0F0F',
      }}
    >
      <style>{`
        @keyframes subtle-sparkle {
          0%, 100% { opacity: 0.9; text-shadow: 0 0 8px rgba(255,255,255,0.5); }
          50% { opacity: 1; text-shadow: 0 0 15px rgba(255,255,255,0.9), 0 0 25px rgba(255,255,255,0.5); }
        }
      `}</style>

      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0F0F0F',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, width: '100%' }}>

        {/* Coming Soon with sparkle */}
        <p
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <span style={{ animation: 'subtle-sparkle 2s ease-in-out infinite', display: 'inline-block' }}>✦</span>
          {' '}COMING SOON{' '}
          <span style={{ animation: 'subtle-sparkle 2s ease-in-out 1s infinite', display: 'inline-block' }}>✦</span>
        </p>

        {/* Title with inline logo */}
        <h1
          style={{
            fontSize: 'clamp(36px, 8vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 32,
            letterSpacing: -1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(8px, 2vw, 14px)',
            flexWrap: 'nowrap',
          }}
        >
          <svg width="clamp(36px, 7vw, 56px)" height="clamp(36px, 7vw, 56px)" viewBox="0 0 180 180" style={{ flexShrink: 0, width: 'clamp(36px, 7vw, 56px)', height: 'clamp(36px, 7vw, 56px)' }}>
            <path d="M 65 163 A 83 83 0 1 1 115 163" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="91" cy="38" r="17" fill="#22c55e"/>
            <rect x="50" y="58" width="19" height="76" rx="9.5" fill="#22c55e"/>
            <rect x="111" y="56" width="19" height="82" rx="9.5" fill="#22c55e"/>
            <rect x="50" y="88" width="80" height="16" rx="8" fill="#22c55e" transform="rotate(-1 90 96)"/>
            <ellipse cx="59.5" cy="142" rx="11" ry="6" fill="#22c55e"/>
            <ellipse cx="122" cy="150" rx="13" ry="7" fill="#22c55e"/>
          </svg>
          <span>RPG for Humanity</span>
          <span style={{ fontSize: 'clamp(12px, 2vw, 18px)', verticalAlign: 'super', marginLeft: -4, opacity: 0.6, alignSelf: 'flex-start', marginTop: 'clamp(4px, 1vw, 8px)' }}>™</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(20px, 4vw, 28px)',
            fontWeight: 600,
            lineHeight: 1.4,
            color: '#22c55e',
            marginBottom: 20,
          }}
        >
          Move freely in any language.<br />
          Connect across cultures.
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 40,
          }}
        >
          A living archive of culture in motion — built by creators, powered by AI.
          <br />A role-playing world for communication and cultural intelligence.
        </p>

        {/* Email signup */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: 0,
              justifyContent: 'center',
              marginBottom: 48,
              flexWrap: 'wrap',
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '16px 24px',
                fontSize: 16,
                borderRadius: '999px 0 0 999px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRight: 'none',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                outline: 'none',
                width: 'min(100%, 300px)',
                fontFamily: 'inherit',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '16px 28px',
                fontSize: 16,
                fontWeight: 600,
                borderRadius: '0 999px 999px 0',
                border: 'none',
                background: '#22c55e',
                color: '#0a0a1a',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#22c55e',
              marginBottom: 48,
              padding: '16px 0',
            }}
          >
            You&apos;re on the list. We&apos;ll be in touch.
          </p>
        )}

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 1,
            background: 'rgba(255,255,255,0.15)',
            margin: '0 auto 40px',
          }}
        />

        {/* Philosophy */}
        <p
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            fontWeight: 600,
            lineHeight: 1.5,
            color: '#22c55e',
            marginBottom: 48,
          }}
        >
          Anyone can build. Everyone can learn.
        </p>

        {/* Footer */}
        <p
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          © 2025 RPG for Humanity ✦ NYC
        </p>
      </div>
    </main>
  );
}
