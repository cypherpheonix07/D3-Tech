import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Domains } from './components/sections/Domains';
import { Events } from './components/sections/Events';
import { Projects } from './components/sections/Projects';
import { Team } from './components/sections/Team';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';
import { FAQ } from './components/sections/FAQ';
import { OfficialLink } from './components/sections/OfficialLink';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-teal-500/30">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Domains />
        <Events />
        <Projects />
        <Team />
        <Gallery />
        <Contact />
        <FAQ />
        <OfficialLink />
      </main>
      <Footer />
    </div>
  );
}

export default App;
