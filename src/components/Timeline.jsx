import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const timelineCards = [
  {
    num: '01',
    title: 'Learn',
    desc: 'Building strong foundations in computer science and modern web technologies.',
    side: 'right',
    rotation: 3,
  },
  {
    num: '02',
    title: 'Create',
    desc: 'Developing personal projects and transforming ideas into real applications.',
    side: 'left',
    rotation: -2,
  },
  {
    num: '03',
    title: 'Improve',
    desc: 'Continuously learning new tools, frameworks, and development practices.',
    side: 'right',
    rotation: 2,
  },
  {
    num: '04',
    title: 'Grow',
    desc: 'Preparing for internships, opportunities, and future software engineering roles.',
    side: 'left',
    rotation: -3,
  },
];

const TimelineCard = ({ card, index, activeIndex }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isActive = index <= activeIndex;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: card.side === 'right' ? 80 : -80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      style={{
        display: 'flex',
        justifyContent: card.side === 'right' ? 'flex-end' : 'flex-start',
        paddingLeft: card.side === 'right' ? '52%' : '0',
        paddingRight: card.side === 'left' ? '52%' : '0',
        marginBottom: '80px',
      }}
      className="timeline-card-wrapper"
    >
      <motion.div
        animate={{
          background: isActive ? '#FF2A2A' : '#fff',
          boxShadow: isActive
            ? '0 20px 60px rgba(255,42,42,0.4)'
            : '0 12px 40px rgba(0,0,0,0.15)',
        }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
        style={{
          width: '280px',
          borderRadius: '24px',
          padding: '32px 28px',
          transform: `rotate(${card.rotation}deg)`,
          position: 'relative',
          cursor: 'default',
        }}
      >
        {/* Hole punch */}
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: isActive ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.1)',
          margin: '0 auto 20px',
          transition: 'background 0.5s ease',
        }} />

        <span style={{
          fontSize: '56px',
          fontWeight: 900,
          fontStyle: 'italic',
          color: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.08)',
          lineHeight: 1,
          display: 'block',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.04em',
          marginBottom: '12px',
        }}>
          {card.num}
        </span>

        <h3 style={{
          fontSize: '28px',
          fontWeight: 900,
          color: isActive ? '#fff' : '#0a0a0a',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.03em',
          marginBottom: '12px',
          transition: 'color 0.5s ease',
        }}>
          {card.title}
        </h3>

        <p style={{
          fontSize: '14px',
          color: isActive ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.65)',
          lineHeight: 1.7,
          fontFamily: 'Inter, sans-serif',
          transition: 'color 0.5s ease',
        }}>
          {card.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const idx = Math.floor(v * 5) - 1;
      setActiveIndex(Math.min(idx, 3));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#fff',
        padding: '120px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            display: 'inline-block',
            background: 'transparent',
            border: '1px solid rgba(0,0,0,0.15)',
            borderRadius: '999px',
            padding: '6px 18px',
            fontSize: '12px',
            fontFamily: 'JetBrains Mono, monospace',
            color: 'rgba(0,0,0,0.5)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            My Journey
          </span>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 900,
            color: '#0a0a0a',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            My journey through technology,{' '}
            <br />
            creativity, and continuous learning
          </h2>

          {/* Sketch arrow */}
          <div style={{
            fontSize: '28px',
            transform: 'rotate(20deg)',
            display: 'inline-block',
            marginTop: '8px',
            color: '#FF2A2A',
          }}>
            ↓
          </div>
        </div>

        {/* Timeline with SVG path */}
        <div style={{ position: 'relative', minHeight: '1200px' }}>
          {/* Animated SVG path */}
          <svg
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: 0,
              width: '80px',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1,
            }}
            viewBox="0 0 80 1200"
            preserveAspectRatio="none"
          >
            {/* Ghost path */}
            <path
              d="M40,0 C60,100 20,200 40,300 C60,400 20,500 40,600 C60,700 20,800 40,900 C60,1000 20,1100 40,1200"
              fill="none"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="3"
              strokeDasharray="8 6"
            />
            {/* Animated fill path */}
            <motion.path
              d="M40,0 C60,100 20,200 40,300 C60,400 20,500 40,600 C60,700 20,800 40,900 C60,1000 20,1100 40,1200"
              fill="none"
              stroke="#FF2A2A"
              strokeWidth="3"
              strokeDasharray="8 6"
              style={{ pathLength }}
            />
          </svg>

          {/* Cards */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            {timelineCards.map((card, i) => (
              <TimelineCard
                key={card.num}
                card={card}
                index={i}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>

        {/* Handwritten note */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
        }}>
          <p style={{
            fontSize: '28px',
            color: '#FF2A2A',
            fontFamily: 'cursive, Georgia, serif',
            transform: 'rotate(-2deg)',
            display: 'inline-block',
          }}>
            Still learning, still building.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-card-wrapper {
            justify-content: center !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
