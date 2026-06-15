import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: '#0d0d0d',
        padding: '120px 40px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            color: '#FF2A2A',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Let's Talk
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 900,
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}
        >
          Ready to{' '}
          <span style={{ color: '#FF2A2A' }}>collaborate</span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
            marginBottom: '48px',
          }}
        >
          I'm open to learning, collaboration, and exciting opportunities.
          <br />Whether it's a project, internship, or just a conversation — reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="mailto:abishan@example.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#FF2A2A',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '15px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              padding: '16px 36px',
              borderRadius: '999px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#cc0000';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#FF2A2A';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Send me an email ↗
          </a>
          <a
            href="https://linkedin.com/in/abishann"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '15px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              padding: '16px 36px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
