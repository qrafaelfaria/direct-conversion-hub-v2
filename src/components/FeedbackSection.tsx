import React from 'react';
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const FeedbackSection: React.FC = () => {
  const feedbacks = [
    {
      name: "Ana Souza",
      text: "Gente, sério 😍 comprei sem muita expectativa e me surpreendi demais! Em menos de 1h já estava com as caixas prontas no Canva e no mesmo dia fechei encomendas. Fácil, prático e MUITO lindo 💕",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Bruna Carvalho",
      text: "Eu morria de medo de não conseguir editar 😅 mas é muito simples! Só abrir no Canva, trocar nome e cor e pronto. Imprimi em casa e ficou com cara de gráfica 👏 ",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      name: "Julia Fernandes",
      text: "Eu não sabia NADA de Canva 😅 e mesmo assim consegui editar tudo sozinha. É só clicar e trocar as informações. Muito intuitivo!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      name: "Patrícia Alves",
      text: "As clientes ficaram encantadas 🥰 Recebi vários elogios nas encomendas e isso ajudou muito no boca a boca. Já estou com agenda cheia!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-100">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-display font-black text-center text-foreground mb-10">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedbacks.map((fb, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-benefit"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={fb.avatar}
                    alt={fb.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-base font-display font-bold text-foreground">{fb.name}</h3>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: fb.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {fb.text}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="section-container mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#planos" className="cta-button animate-pulse-glow w-full sm:w-auto text-center">
              QUERO ACESSAR AGORA
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
