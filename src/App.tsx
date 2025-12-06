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
import CoolantGuide from './components/CoolantGuide';
import EngineOilGuide from './components/EngineOilGuide';
import BatteryChargingGuide from './components/BatteryChargingGuide';
import BumperRepairGuide from './components/BumperRepairGuide';
import HybridCarsGuide from './components/HybridCarsGuide';
import IdleVibrationGuide from './components/IdleVibrationGuide';
import FuelConsumptionGuide from './components/FuelConsumptionGuide';
import TyreRepairGuide from './components/TyreRepairGuide';

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
        <Route path="/tips-advice/coolant-guide" element={<CoolantGuide />} />
        <Route path="/tips-advice/engine-oil-guide" element={<EngineOilGuide />} />
        <Route path="/tips-advice/battery-charging-guide" element={<BatteryChargingGuide />} />
        <Route path="/tips-advice/bumper-repair-guide" element={<BumperRepairGuide />} />
        <Route path="/tips-advice/hybrid-cars-guide" element={<HybridCarsGuide />} />
        <Route path="/tips-advice/idle-vibration-guide" element={<IdleVibrationGuide />} />
        <Route path="/tips-advice/fuel-consumption-guide" element={<FuelConsumptionGuide />} />
        <Route path="/tips-advice/tyre-repair-guide" element={<TyreRepairGuide />} />
      </Routes>
    </Router>
  );
}

export default App;

