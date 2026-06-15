import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
