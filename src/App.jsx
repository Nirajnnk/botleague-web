import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import UserJourney from './components/UserJourney';
import WhatIsBotLeague from './components/WhatIsBotLeague';
import CategoriesSection from './components/CategoriesSection';
import DisciplinesSection from './components/DisciplinesSection';
import LeagueAdvantage from './components/LeagueAdvantage';
import EcosystemSection from './components/EcosystemSection';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-orbitron overflow-x-hidden">
      <Navbar />
      <Hero />
      <EventsSection />
      <UserJourney />
      <WhatIsBotLeague />
      <CategoriesSection />
      <DisciplinesSection />
      <LeagueAdvantage />
      <EcosystemSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default App;
