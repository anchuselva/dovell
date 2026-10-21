import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureEngines from '../components/FeatureEngines';
import ShowcaseBanner from '../components/ShowcaseBanner';
import RoiCalculator from '../components/RoiCalculator';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import TelemetryEcosystem from '../components/TelemetryEcosystem';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="landing-page-wrapper">
      {/* 1. Top Bar & Main Navigation */}
      <Navbar />

      {/* 2. Hero Section (with signature circular framing & AI cluster graphics) */}
      <Hero />

      {/* 3. Core Optimization Engines (3 Cards layout matching reference "PROCHAINEMENT") */}
      <FeatureEngines />

      {/* 4. Showcase Banner (matches reference "LOUER UNE SALLE" dark banner) */}
      <ShowcaseBanner />

      {/* 5. Additional Section 1: Real-Time Cluster Savings Calculator */}
      <RoiCalculator />

      {/* 6. Additional Section 2: Kernel Driver Architecture Pipeline */}
      <ArchitecturePipeline />

      {/* 7. Additional Section 3: Live Telemetry & Model Ecosystem */}
      <TelemetryEcosystem />

      {/* 8. Pricing Section (Requested) */}
      <Pricing />

      {/* 9. FAQ Section (Requested) */}
      <Faq />

      {/* 10. Contact Us Section (Requested) */}
      <ContactSection />

      {/* 11. Footer (Requested: "footer must important") */}
      <Footer />
    </main>
  );
}
