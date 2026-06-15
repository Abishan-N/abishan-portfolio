import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const fadeLeft = {
    initial: { opacity: 0, x: -60 },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 60 },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 },
  };

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: '#FF2A2A',
        padding: '100px 40px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating star decorations */}
      {[
        { top: '8%', left: '5%', size: 28, rotate: 20, delay: 0 },
        { top: '20%', left: '88%', size: 18, rotate: -15, delay: 0.2 },
        { top: '60%', left: '92%', size: 24, rotate: 35, delay: 0.1 },
        { top: '75%', left: '3%', size: 20, rotate: -30, delay: 0.3 },
        { top: '45%', left: '48%', size: 14, rotate: 10, delay: 0.15 },
      ].map((star, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [star.rotate, star.rotate + 360] }}
          transition={{ repeat: Infinity, duration: 12 + i * 2, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            fontSize: star.size,
            color: 'rgba(0,0,0,0.18)',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          ✦
        </motion.div>
      ))}

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '80px',
        flexWrap: 'wrap',
      }}>
        {/* Left — Hanging ID Card */}
        <motion.div
          {...fadeLeft}
          style={{ flex: '0 0 320px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Lanyard strap */}
            <div style={{
              width: '3px',
              height: '80px',
              background: '#0a0a0a',
              borderRadius: '2px',
            }} />

            {/* Metal clip */}
            <div style={{
              width: '20px',
              height: '12px',
              background: '#555',
              borderRadius: '6px 6px 0 0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }} />

            {/* ID Card */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.03 }}
              style={{
                width: '260px',
                background: '#1a1a1a',
                borderRadius: '20px',
                padding: '28px 24px',
                transform: 'rotate(-3deg)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
            >
              {/* Hole punch */}
              <div style={{
                width: '18px', height: '18px',
                background: '#FF2A2A',
                borderRadius: '50%',
                margin: '0 auto 20px',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
              }} />

              {/* Profile photo placeholder */}
              <div style={{
                width: '100%',
                height: '160px',
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                borderRadius: '12px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <img
                  src="/images/profile.jpg"
                  alt="Abishan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML += '<span style="font-size:56px">👨‍💻</span>';
                  }}
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <p style={{
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '18px',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.02em',
                }}>ABISHAN</p>
                <p style={{
                  color: '#FF2A2A',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '0.1em',
                  marginTop: '4px',
                }}>Frontend Developer</p>
                <div style={{
                  width: '80%',
                  height: '1px',
                  background: 'rgba(255,255,255,0.1)',
                  margin: '14px auto',
                }} />
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '0.08em',
                }}>UCSC · 2024</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Text content */}
        <motion.div
          {...fadeRight}
          style={{ flex: '1', minWidth: '280px', paddingTop: '20px' }}
        >
          <h2 style={{
            fontSize: 'clamp(52px, 7vw, 96px)',
            fontWeight: 900,
            color: '#0a0a0a',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            marginBottom: '28px',
          }}>
            Hello!
          </h2>

          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            color: '#fff',
            lineHeight: 1.8,
            maxWidth: '520px',
            fontFamily: 'Inter, sans-serif',
          }}>
            I'm{' '}
            <strong style={{ color: '#0a0a0a', fontWeight: 900, letterSpacing: '0.02em' }}>
              ABISHAN
            </strong>
            , a Computer Science student at the{' '}
            <span style={{ color: '#0a0a0a', fontWeight: 700 }}>
              University of Colombo School of Computing
            </span>
            . My journey into technology started with curiosity and evolved into a passion for
            creating modern digital experiences. I enjoy building responsive web applications,
            designing clean user interfaces, and exploring new technologies.
          </p>

          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            maxWidth: '520px',
            fontFamily: 'Inter, sans-serif',
            marginTop: '16px',
          }}>
            Alongside software development, I have a strong interest in{' '}
            <strong style={{ color: '#fff' }}>video editing and visual storytelling</strong>
            . As an{' '}
            <strong style={{ color: '#0a0a0a', fontWeight: 700 }}>
              American Corner Jaffna Youth Alumni
            </strong>
            , I've developed leadership, communication, and collaboration skills that shape
            my personal and professional growth.
          </p>

          {/* Tech logos */}
          <div style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {[
              { label: 'React', icon: '⚛️' },
              { label: 'JavaScript', icon: '🟡' },
              { label: 'Python', icon: '🐍' },
            ].map((tech) => (
              <motion.div
                key={tech.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + Math.random(), ease: 'easeInOut' }}
                whileHover={{ scale: 1.15 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: '72px',
                  height: '72px',
                  background: 'rgba(0,0,0,0.15)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(8px)',
                }}>
                  {tech.icon}
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#0a0a0a',
                  fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '0.08em',
                }}>
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Torn Paper Divider */}
      <div style={{ marginTop: '100px', lineHeight: 0, overflow: 'hidden' }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          <path
            d="M0,60 C40,40 80,80 120,55 C160,30 200,70 240,50 C280,30 320,65 360,45 C400,25 440,60 480,40 C520,20 560,55 600,38 C640,20 680,58 720,42 C760,26 800,60 840,44 C880,28 920,62 960,46 C1000,30 1040,65 1080,48 C1120,31 1160,66 1200,50 C1240,34 1280,68 1320,52 C1360,36 1400,70 1440,55 L1440,80 L0,80 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
