import { BrowserRouter as Router } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import Insights from './components/Insights/Insights';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
//import CookieConsent from "react-cookie-consent";
import CookieConsent from './components/CookieConsent/CookieConsent.jsx';




function App() {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <div className="font-sans text-charcoal">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Team />
          <Insights />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;