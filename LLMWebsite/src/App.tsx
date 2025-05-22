import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import Insights from './components/Insights/Insights';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {
  // Update document title
  useEffect(() => {
    document.title = 'LLM International | Premium Commodity Trading & Resource Management';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'LLM International - South Africa\'s premier commodity trading, mining, and resource management company specializing in ethical sourcing and sustainable growth.');
    }
  }, []);

  return (
    <div className="font-sans text-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;