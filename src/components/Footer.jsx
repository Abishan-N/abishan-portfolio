import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer
      ref={ref}
      style={{
        background: '#111111',
        padding: '80px 40px 40px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top grid */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '48px',
        paddingBottom: '60px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        marginBottom: '0',
      }}>
        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0 }}
        >
          {['Frontend Development', 'Web Development', 'UI Design', 'Video Editing'].map((s) => (
            <p
              key={s}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                lineHeight: 2.5,
              }}
            >
              {s}
            </p>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: '#F4F4F4',
            fontWeight: 700,
            marginBottom: '12px',
          }}>
            Computer Science Student
          </p>
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'underline',
              cursor: 'pointer',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
          >
            View Work
          </a>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: '#F4F4F4',
            fontWeight: 700,
            marginBottom: '8px',
          }}>
            Open to Learning
            <br />& Collaboration
          </p>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.1em',
          }}>
            © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>

      {/* Giant branding text */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        overflow: 'hidden',
        padding: '20px 0',
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          style={{
            fontSize: 'clamp(64px, 13vw, 200px)',
            fontWeight: 900,
            color: 'rgba(244,244,244,0.07)',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            userSelect: 'none',
            transition: 'color 0.4s ease',
            cursor: 'default',
          }}
          onMouseEnter={e => e.target.style.color = 'rgba(244,244,244,0.12)'}
          onMouseLeave={e => e.target.style.color = 'rgba(244,244,244,0.07)'}
        >
          ABISHAN
        </motion.h1>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '24px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '4px',
            letterSpacing: '0.06em',
          }}>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Get in touch
            </a>
          </p>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.06em',
          }}>
            Built with React · {new Date().getFullYear()}
          </p>
        </motion.div>

        {/* Center — email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href="mailto:abishan@example.com"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'underline',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
          >
            abishan@example.com
          </a>
        </motion.div>

        {/* Right — links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '16px', flexWrap: 'wrap' }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/Abishan-N' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/abishann' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
            >
              {link.label} ↗
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
