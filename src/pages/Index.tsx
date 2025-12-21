import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import AchievementsSection from '@/components/AchievementsSection';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <AchievementsSection />
      <Experience />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
