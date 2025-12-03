import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import OurStory from './components/OurStory';
import PanelBeating from './components/PanelBeating';
import Mechanical from './components/Mechanical';
import CaravansBoats from './components/CaravansBoats';
import FAQs from './components/FAQs';
import TipsAdvice from './components/TipsAdvice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/panel-beating" element={<PanelBeating />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/caravans-boats" element={<CaravansBoats />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/tips-advice" element={<TipsAdvice />} />
      </Routes>
    </Router>
  );
}

export default App;

