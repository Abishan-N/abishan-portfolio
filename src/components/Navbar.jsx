import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10000,
          padding: scrolled ? '12px 40px' : '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('Home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          Abishan
          <span style={{ color: '#FF2A2A', fontSize: '28px', lineHeight: 1 }}>.</span>
        </button>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            gap: '36px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link}
              label={link}
              active={activeLink === link}
              onClick={() => handleNav(link)}
            />
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => handleNav('Contact')}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(12px)',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              padding: '10px 24px',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'rgba(255,255,255,0.15)';
              e.target.style.boxShadow = '0 0 20px rgba(255,42,42,0.3)';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'rgba(255,255,255,0.08)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Let's Connect
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
            className="hamburger-btn"
          >
            <span style={{
              display: 'block', width: '24px', height: '2px',
              background: '#fff', borderRadius: '2px',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px',
              background: '#fff', borderRadius: '2px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px',
              background: '#fff', borderRadius: '2px',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform 0.3s ease',
            }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#FF2A2A',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: 'none', border: 'none', color: '#fff',
                fontSize: '32px', cursor: 'pointer', fontFamily: 'Inter',
              }}
            >×</button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 + 0.1 }}
                onClick={() => handleNav(link)}
                style={{
                  background: 'none', border: 'none', color: '#fff',
                  fontSize: '36px', fontWeight: 800, cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em',
                  padding: '8px 0',
                }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

const NavLink = ({ label, active, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        color: active ? '#fff' : 'rgba(255,255,255,0.65)',
        fontSize: '14px',
        fontWeight: active ? 600 : 400,
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        padding: '4px 0',
        letterSpacing: '0.02em',
        transition: 'color 0.3s ease',
      }}
    >
      {label}
      <motion.span
        initial={false}
        animate={{ scaleX: hovered || active ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: '100%', height: '1.5px',
          background: '#FF2A2A',
          borderRadius: '2px',
          originX: 0,
          display: 'block',
        }}
      />
    </button>
  );
};

export default Navbar;
