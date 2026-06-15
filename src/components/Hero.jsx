import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
  if (videoRef.current) {
    videoRef.current.play().catch(() => {});
  }
}, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay },
  });

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#0a0a0a',
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src="/videos/hero-video.mp4"
        loop
        playsInline
        style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: playing ? 1 : 0.25,
            transform: playing ? 'scale(1.08)' : 'scale(1)',
            transition: 'opacity 0.8s ease, transform 8s ease',
          }}
      />

      <div
  style={{
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle at 75% 35%, rgba(255,42,42,0.18), transparent 55%)',
    pointerEvents: 'none',
  }}
/>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.15) 100%)',
      }} />

      {/* Content */}
      <div 
        className="hero-content"
        style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
      }}>
        {/* Left — text */}
        <div style={{ flex: '1', maxWidth: '640px' }}>
          <motion.p
            {...fadeUp(0.5)}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#FF2A2A',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Computer Science Student · UCSC
          </motion.p>

          <motion.h1
            {...fadeUp(0.65)}
            style={{
              fontSize: 'clamp(60px, 9vw, 140px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '16px',
            }}
          >
            Hi, I'm{' '}
            <br />
            <span style={{
              WebkitTextStroke: '3px #ffffff',
              color: 'transparent',
              display: 'inline-block',
              letterSpacing: '-0.05em',
            }}>
              ABISHAN
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.8)}
            style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.7,
              maxWidth: '540px',
              marginBottom: '36px',
            }}
          >
            Frontend Developer · Creative Technologist · Video Editor
            <br />
            Building modern web experiences with React, JavaScript, Tailwind CSS, and modern UI design.
          </motion.p>

          <motion.div
            {...fadeUp(0.95)}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            {/* Primary CTA */}
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#fff',
                color: '#0a0a0a',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '999px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.01em',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.04)';
                e.target.style.boxShadow = '0 8px 30px rgba(255,255,255,0.25)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              View My Work
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255,255,255,0.07)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(12px)',
                padding: '14px 32px',
                borderRadius: '999px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.01em',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255,255,255,0.07)';
              }}
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right — Play Reel */}
        <motion.div
          className="play-button-container"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 1.0 }}
          style={{ flexShrink: 0 }}
        >
          <button
            onClick={togglePlay}
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              gap: '8px',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(255,42,42,0.45)';
              e.currentTarget.style.borderColor = '#FF2A2A';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            }}
          >
            <span style={{ fontSize: '32px' }}>
              {playing ? '⏸' : '▶'}
            </span>
            <span style={{
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
            }}>
              {playing ? 'PAUSE' : 'PLAY REEL'}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
        className="scroll-indicator"
      >
        <span style={{
          fontSize: '10px',
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: 'JetBrains Mono, monospace',
        }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}
        >
          ↓
        </motion.div>
      </motion.button>

      <style>{`
  @media (max-width: 768px) {

    .scroll-indicator {
      display: none !important;
    }

    .hero-content {
      flex-direction: column !important;
      justify-content: center !important;
      text-align: center;
      padding: 0 20px !important;
    }

    .play-button-container {
      margin-top: 30px;
    }
  }
`}</style>
    </section>
  );
};

export default Hero;
