import { Navbar } from "@/components/landing/Navbar";
import { HeroSection, FeaturesSection } from "@/components/landing/HeroSection";
import { DiscoverySection } from "@/components/landing/DiscoverySection";
import { DemoSection } from "@/components/landing/DemoSection";
import { MerchantDashboard } from "@/components/landing/MerchantDashboard";
import { SustainabilitySection } from "@/components/landing/SustainabilitySection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="discovery">
          <DiscoverySection />
        </section>
        <DemoSection />
        <section id="merchants">
          <MerchantDashboard />
        </section>
        <section id="sustainability">
          <SustainabilitySection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
