import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import CarouselSection from "@/components/CarouselSection";
import HowItWorksSection from "@/components/HowItWorksSection"; // Importar o novo componente
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import FeedbackSection from "@/components/FeedbackSection"; // Importar o novo componente
import GuaranteeSection from "@/components/GuaranteeSection"; // Importar o novo componente
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <HeroSection />
      <HowItWorksSection />
      <CarouselSection />
      <FeedbackSection />
      <BonusSection />
      <PricingSection /> {/* Adicionar o novo componente aqui */}
      <GuaranteeSection /> {/* Adicionar o novo componente aqui */}
      <FinalCTA />
    </div>
  );
};

export default Index;
