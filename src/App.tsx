import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
