import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Importar o ícone de check
import image1 from "/Hosp01.webp";
import image7 from "/Hosp02.webp";
import image8 from "/Hosp03.webp";
import image20 from "/Hosp04.webp";
import image44 from "/Hosp05.webp";
import image69 from "/Hosp06.webp";
import image127 from "/Hosp07.webp";
import image128 from "/Hosp08.webp";
import image129 from "/Hosp09.webp";
import image130 from "/Hosp10.webp";
import image131 from "/Hosp11.webp";

const cards = [image1, image7, image8, image20, image44, image69, image127, image128, image129, image130, image131];
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
          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0c3769] mb-3">
            Confira alguns dos modelos que você vai receber
          </h2>
          <p className="text-black text-lg">
            Ideal para costureiras que buscam agilidade e precisão!
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-4" style={{ width: "fit-content" }}>
          {duplicated.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 h-80 sm:w-80 sm:h-80 rounded-xl overflow-hidden transition-transform duration-300"
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
            <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-6">
              Veja como você vai imprimir seus moldes 👇
            </h2>
            <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1177880972"
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
