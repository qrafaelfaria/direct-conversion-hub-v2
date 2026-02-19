import { motion } from "framer-motion";
import { Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 sm:pt-20 sm:pb-12 bg-[#97c9fc]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-urgency/10 text-urgency text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Oferta por tempo limitado</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-tight text-foreground text-balance mb-6">
            +200 Capas de Caderno{" "}
            <span className="text-[#ff0073]">Infantis Editáveis</span>
          </h1>

          <img src="/HeroFinal.jpg" alt="Descrição da Imagem" className="mx-auto mb-8 w-full max-w-7xl h-auto object-contain" />

          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto mb-8 text-balance">
            Edite e imprima! Rápido, fácil, sem stress!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#planos" className="cta-button animate-pulse-glow w-full sm:w-auto text-center">
              QUERO ACESSAR AGORA
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-black" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-black" />
              <span>Oferta limitada</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-black" />
              <span>100% editável</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
