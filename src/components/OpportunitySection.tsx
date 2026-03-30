import { motion } from "framer-motion";
import { Check } from "lucide-react";

const OpportunitySection = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#0c3769]">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-black text-[#ffe500] text-center">
            Enquanto muita gente tenta vender roupa comum…
          </h2>

          <p className="text-center text-white font-display font-black text-lg">
            Existe um mercado silencioso que compra TODOS OS DIAS:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center text-foreground font-display font-bold">
            <li className="card-benefit border-2 border-[#ff0073]/60 rounded-full py-3">⭐ Uniformes hospitalares</li>
            <li className="card-benefit border-2 border-[#ff0073]/60 rounded-full py-3">⭐ Scrubs</li>
            <li className="card-benefit border-2 border-[#ff0073]/60 rounded-full py-3">⭐ Jalecos</li>
            <li className="card-benefit border-2 border-[#ff0073]/60 rounded-full py-3">⭐ Roupas para clínicas e estética</li>
          </ul>

          <p className="text-center text-white font-display font-black text-lg">👉 E esse mercado não para.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="card-benefit text-center border-2 border-[#ff0073]/60 rounded-full py-3 font-display font-bold text-foreground">
              🚨 Não depende de moda.
            </div>
            <div className="card-benefit text-center border-2 border-[#ff0073]/60 rounded-full py-3 font-display font-bold text-foreground">
              🚨 Não depende de tendência.
            </div>
            <div className="card-benefit text-center border-2 border-[#ff0073]/60 rounded-full py-3 font-display font-bold text-foreground">
              🚨 Não depende de “sorte”.
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-2xl sm:text-3xl font-display font-black text-[#ffe500] text-center">“Mas eu não sei costurar direito…”</p>
            <p className="text-[#0c3769] text-xl font-display font-black">Perfeito.</p>
            <p className="text-center text-black font-display font-black text-lg bg-[#ffe500] px-4 py-2">
              Porque aqui você não precisa criar nada do zero.
            </p>
            <p className="text-center text-white font-display font-black text-lg">
              Você só precisa:
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <li className="card-benefit border-2 border-[#0c3769] rounded-full py-3 font-display font-bold text-[#0c3769]">1. Escolher o molde</li>
            <li className="card-benefit border-2 border-[#0c3769] rounded-full py-3 font-display font-bold text-[#0c3769]">2. Seguir o modelo</li>
            <li className="card-benefit border-2 border-[#0c3769] rounded-full py-3 font-display font-bold text-[#0c3769]">3. Produzir</li>
            <li className="card-benefit border-2 border-[#0c3769] rounded-full py-3 font-display font-bold text-[#0c3769]">4. Vender</li>
          </ul>

          <p className="text-center text-white text-lg font-display font-bold">Simples assim.</p>

          <div className="mt-12 space-y-8">
            <h3 className="text-center text-[#ffe500] text-2xl sm:text-3xl font-display font-black pb-8">
              Isso é pra você que:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Quer ganhar dinheiro com costura",
                  description:
                    "Produza peças com demanda real e recorrente no setor de saúde.",
                },
                {
                  title: "Precisa de renda extra (ou principal)",
                  description:
                    "Um caminho prático para começar a faturar sem promessas vazias.",
                },
                {
                  title: "Quer trabalhar de casa",
                  description:
                    "Organize sua produção no seu ritmo, do seu espaço.",
                },
                {
                  title: "Está cansada de depender dos outros",
                  description:
                    "Tenha autonomia: modelo pronto, você apenas executa.",
                },
                {
                  title: "Não sabe por onde começar",
                  description:
                    "Siga o passo a passo com moldes prontos para imprimir e produzir.",
                },
              ].map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0c3769] flex items-center justify-center shadow-lg border border-[#ffe500]">
                    <Check className="w-8 h-8 text-[#ffe500]" />
                  </div>
                  <div className="bg-white rounded-2xl px-6 py-8 shadow-md text-center">
                    <h4 className="text-xl sm:text-2xl font-display font-black text-[#0c3769]">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


           <div className="section-container mt-24 text-center pt-12">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#ffe500] text-center">
              Veja como você vai imprimir seus moldes 👇
            </h2>
            <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden mt-8">
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

        </motion.div>
      </div>
    </section>
  );
};

export default OpportunitySection;
