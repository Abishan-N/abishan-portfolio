import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    num: '01',
    title: 'Personal Portfolio',
    desc: 'A premium personal portfolio website built with React.js, Framer Motion, and Tailwind CSS, featuring cinematic animations and a luxury editorial aesthetic.',
    stack: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/Abishan-N',
    live: '#',
    color: '#FF2A2A',
  },
  {
    num: '02',
    title: 'Responsive Web App',
    desc: 'A fully responsive web application developed as part of my Responsive Web Development certification, focusing on performance and mobile-first design.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Abishan-N',
    live: '#',
    color: '#1a1a1a',
  },
  {
    num: '03',
    title: 'IoT Dashboard',
    desc: 'An Internet of Things monitoring dashboard built during my IoT certification course, displaying real-time sensor data with a clean interface.',
    stack: ['Python', 'JavaScript', 'React'],
    github: 'https://github.com/Abishan-N',
    live: '#',
    color: '#0d0d0d',
  },
  {
    num: '04',
    title: 'Creative Video Reel',
    desc: 'A video editing and motion graphics portfolio showcasing cinematic transitions, colour grading, and visual storytelling projects created with industry-standard tools.',
    stack: ['Premiere Pro', 'After Effects', 'Figma'],
    github: 'https://github.com/Abishan-N',
    live: '#',
    color: '#111',
  },
];

const ProjectCard = ({ project, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
      style={{
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        group: true,
      }}
    >
      {/* Top color bar */}
      <div style={{
        height: '200px',
        background: `linear-gradient(135deg, ${project.color} 0%, rgba(255,42,42,0.1) 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '72px',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.06)',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-0.04em',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <span>{project.num}</span>
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,42,42,0.12)',
            transition: 'opacity 0.3s ease',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '28px 28px 32px' }}>
        <h3 style={{
          fontSize: '22px',
          fontWeight: 800,
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.75,
          fontFamily: 'Inter, sans-serif',
          marginBottom: '20px',
        }}>
          {project.desc}
        </p>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                background: 'rgba(255,42,42,0.1)',
                border: '1px solid rgba(255,42,42,0.2)',
                color: '#FF2A2A',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.03em',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '13px', fontFamily: 'Inter, sans-serif',
              textDecoration: 'none', fontWeight: 500,
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '999px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#FF2A2A'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            <span>GitHub ↗</span>
          </a>
          <a
            href={project.live}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: '#fff',
              fontSize: '13px', fontFamily: 'Inter, sans-serif',
              textDecoration: 'none', fontWeight: 600,
              padding: '8px 16px',
              background: '#FF2A2A',
              borderRadius: '999px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#cc0000'}
            onMouseLeave={e => e.currentTarget.style.background = '#FF2A2A'}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ background: '#0a0a0a', padding: '120px 40px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              color: '#FF2A2A',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 900,
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            My{' '}
            <span style={{ color: '#FF2A2A' }}>Projects</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <a
            href="https://github.com/Abishan-N"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '15px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              padding: '14px 32px',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '999px',
              transition: 'all 0.3s ease',
              background: 'rgba(255,255,255,0.04)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,42,42,0.1)';
              e.currentTarget.style.borderColor = '#FF2A2A';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            }}
          >
            View All on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
