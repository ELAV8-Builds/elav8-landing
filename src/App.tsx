import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 bg-surface-950 -z-50" />
      <div className="fixed inset-0 bg-radial-fade -z-40" />
      <div className="fixed inset-0 bg-grid -z-30 opacity-50" />

      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
