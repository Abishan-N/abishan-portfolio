import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Programming',
    emoji: '⚙️',
    skills: ['Python', 'C', 'C++', 'PHP'],
  },
  {
    title: 'Tools',
    emoji: '🛠',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    title: 'Creative',
    emoji: '✨',
    skills: ['Video Editing', 'Motion Graphics', 'UI Design'],
  },
];

const SkillCard = ({ category, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: index * 0.12 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '24px',
        padding: '36px 32px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Red accent corner */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '80px', height: '80px',
        background: 'radial-gradient(circle at top right, rgba(255,42,42,0.15) 0%, transparent 70%)',
      }} />

      <div style={{ marginBottom: '20px', fontSize: '32px' }}>{category.emoji}</div>

      <h3 style={{
        fontSize: '20px',
        fontWeight: 800,
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-0.02em',
        marginBottom: '20px',
      }}>
        {category.title}
      </h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.8)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '13px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 400,
              letterSpacing: '0.03em',
              transition: 'all 0.25s ease',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.4 }}
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: '60%',
          height: '2px',
          background: '#FF2A2A',
          originX: 0,
          borderRadius: '0 2px 0 0',
        }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background: '#0a0a0a',
        padding: '120px 40px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              color: '#FF2A2A',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            What I Know
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 900,
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            My Skills &{' '}
            <span style={{ color: '#FF2A2A' }}>Expertise</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} inView={inView} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginTop: '80px' }}
        >
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            Certifications
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              'Responsive Web Development',
              'Building Blocks of Internet of Things',
              'American Corner Jaffna Youth Alumni',
            ].map((cert) => (
              <div
                key={cert}
                style={{
                  background: 'rgba(255,42,42,0.08)',
                  border: '1px solid rgba(255,42,42,0.25)',
                  borderRadius: '12px',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ color: '#FF2A2A', fontSize: '16px' }}>🏆</span>
                <span style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}>
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
