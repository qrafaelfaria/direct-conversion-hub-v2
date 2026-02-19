import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-white text-black/80">
      <div className="section-container text-center">
        <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
        <h2 className="text-3xl sm:text-4xl font-display font-black mb-4">
          Sua Satisfação é Nossa Garantia!
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Temos tanta certeza da qualidade e do valor do nosso produto que oferecemos uma garantia incondicional. Se você não estiver 100% satisfeito, nós devolvemos seu dinheiro.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
