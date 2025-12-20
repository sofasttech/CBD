import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import Loading from './components/Loading';

// Lazy load all components for better performance
const Homepage = lazy(() => import('./components/Homepage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const Contact = lazy(() => import('./components/Contact'));
const OurStory = lazy(() => import('./components/OurStory'));
const PanelBeating = lazy(() => import('./components/PanelBeating'));
const Mechanical = lazy(() => import('./components/Mechanical'));
const CaravansBoats = lazy(() => import('./components/CaravansBoats'));
const FAQs = lazy(() => import('./components/FAQs'));
const TipsAdvice = lazy(() => import('./components/TipsAdvice'));
const CoolantGuide = lazy(() => import('./components/CoolantGuide'));
const EngineOilGuide = lazy(() => import('./components/EngineOilGuide'));
const BatteryChargingGuide = lazy(() => import('./components/BatteryChargingGuide'));
const BumperRepairGuide = lazy(() => import('./components/BumperRepairGuide'));
const HybridCarsGuide = lazy(() => import('./components/HybridCarsGuide'));
const IdleVibrationGuide = lazy(() => import('./components/IdleVibrationGuide'));
const FuelConsumptionGuide = lazy(() => import('./components/FuelConsumptionGuide'));
const TyreRepairGuide = lazy(() => import('./components/TyreRepairGuide'));
const BrakeWarningGuide = lazy(() => import('./components/BrakeWarningGuide'));
const DashboardWarningLights = lazy(() => import('./components/DashboardWarningLights'));
const WinterPreparationGuide = lazy(() => import('./components/WinterPreparationGuide'));
const SummerCareGuide = lazy(() => import('./components/SummerCareGuide'));
const PanelBeatingCosts = lazy(() => import('./components/PanelBeatingCosts'));
const MinorAccidentGuide = lazy(() => import('./components/MinorAccidentGuide'));
const RepairOrReplace = lazy(() => import('./components/RepairOrReplace'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all images to load
    const handleLoad = () => {
      const images = Array.from(document.images);
      const promises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
        });
      });

      Promise.all(promises).then(() => {
        // Add a small delay to ensure smooth transition
        setTimeout(() => setIsLoading(false), 500);
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
        <Route path="/tips-advice/brake-warning-signs" element={<BrakeWarningGuide />} />
        <Route path="/tips-advice/dashboard-warning-lights" element={<DashboardWarningLights />} />
        <Route path="/tips-advice/winter-preparation-guide" element={<WinterPreparationGuide />} />
        <Route path="/tips-advice/summer-care-guide" element={<SummerCareGuide />} />
        <Route path="/tips-advice/panel-beating-costs" element={<PanelBeatingCosts />} />
        <Route path="/tips-advice/minor-accident-guide" element={<MinorAccidentGuide />} />
        <Route path="/tips-advice/repair-or-replace" element={<RepairOrReplace />} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

