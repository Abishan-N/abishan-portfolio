import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 900);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#FF2A2A',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background ghost text */}
          <span
            style={{
              position: 'absolute',
              fontSize: 'clamp(56px, 12vw, 120px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: 'rgba(0,0,0,0.18)',
              userSelect: 'none',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Abishan.
          </span>

          {/* Foreground water-fill text */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              style={{
                fontSize: 'clamp(56px, 12vw, 120px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                position: 'relative',
              }}
            >
              Abishan.
            </motion.div>
          </div>

          {/* Exit scale fade on logo */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'absolute' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
