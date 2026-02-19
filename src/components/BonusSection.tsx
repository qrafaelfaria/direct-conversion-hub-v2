import { motion } from "framer-motion";
import { Timer } from "lucide-react";
import plannerImage from "/Image_202602112202.jpeg";
import stickersImage from "/A_cheerful_and_202602112202.jpeg";
import labelsImage from "/A_colorful_and_202602112203.jpeg";

const bonuses = [
  {
    image: labelsImage,
    title: "Planner Semanal Infantil",
    description: "Organize a semana das crianças de forma divertida e colorida.",
  },
  {
    image: stickersImage,
    title: "Pack de Adesivos Divertidos",
    description: "Adesivos para personalizar cadernos, livros e materiais escolares.",
  },
  {
    image: plannerImage,
    title: "Etiquetas Escolares Personalizáveis",
    description: "Etiquetas com diversos temas para identificar o material dos pequenos.",
  },
];

const BonusSection = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-urgency/10 text-urgency text-sm font-bold mb-4">
            <Timer className="w-4 h-4" />
            <span>Disponível apenas hoje</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground mb-3">
            Bônus exclusivos{" "}
            <span className="text-[#ff0073]">apenas hoje</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Aproveite antes que a oferta expire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-benefit relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="badge-exclusive">BÔNUS</span>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-display font-bold text-foreground mb-2">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {bonus.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
