import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import ReelsSection from './components/ReelsSection';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import ReadyToPaintBanner from './components/ReadyToPaintBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal, .scale-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Menu />
        <Gallery />
        <ReelsSection />
        <Events />
        <Testimonials />
        <ReadyToPaintBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
