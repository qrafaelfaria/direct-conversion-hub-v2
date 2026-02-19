import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Importar o ícone de check
import image1 from "/1.jpg";
import image7 from "/7.jpg";
import image8 from "/8.jpg";
import image20 from "/20.jpg";
import image44 from "/44.jpg";
import image69 from "/69.jpg";
import image127 from "/127.jpg";
import image141 from "/141.jpg";
import image152 from "/152.jpg";
import image156 from "/156.jpg";
import image186 from "/186.jpg";
import image227 from "/227.jpg";
import image245 from "/245.jpg";

const cards = [image1, image7, image8, image20, image44, image69, image127, image141, image152, image156, image186, image227, image245];
const duplicated = [...cards, ...cards];

const CarouselSection = () => {
  return (
    <section className="py-12 sm:py-20 overflow-hidden">
      <div className="section-container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground mb-3">
            Centenas de Opções Editáveis{" "}
            <span className="text-[#ff0073]">no Canva</span>
          </h2>
          <p className="text-black text-lg">
            Escolha o modelo ideal para você
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-2 sm:gap-2" style={{ width: "fit-content" }}>
          {duplicated.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 h-80 sm:w-80 sm:h-80 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={card}
                alt={`Capa de Caderno Personalizada ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
          <div className="section-container mt-24 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-foreground mb-6">
              Veja o material por dentro
            </h2>
            <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1166056065"
                title="Vimeo video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            >
              <a href="#planos" className="cta-button animate-pulse-glow w-full sm:w-auto text-center">
                QUERO ACESSAR AGORA
              </a>
            </motion.div>
          </div>
    </section>
  );
};

export default CarouselSection;
