import { motion } from "framer-motion";
import { Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 sm:pt-20 sm:pb-12 bg-[#0c3769]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe500] text-black text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Oferta por tempo limitado</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-tight text-white text-balance mt-6">
            DESCUBRA COMO USAR +100 MOLDES DE ROUPAS HOSPITALARES PARA CRIAR UMA RENDA CONSTANTE{" "}
            <span className="text-[#ffe500]"> MESMO COMEÇANDO DO ZERO NA COSTURA</span>
          </h1>

          <img src="/HeroHospital.png" alt="Descrição da Imagem" className="mx-auto mb-8 w-full max-w-7xl h-auto object-contain mt-12" />

          <div className="flex flex-col items-center justify-center gap-3 text-md text-white font-black">
            <div className="flex items-center gap-2">
              <span>Sem experiência.</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Sem precisar inventar modelo.</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Sem depender de ninguém.</span>
            </div>
            
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#planos" className="cta-button animate-pulse-glow w-full sm:w-auto text-center">
              👉 QUERO ACESSAR OS MOLDES AGORA
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
