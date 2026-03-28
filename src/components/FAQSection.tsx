import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="section-container max-w-3xl">
        <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground text-center mb-6">
          Perguntas frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Tire suas dúvidas sobre os moldes hospitalares e como começar agora.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que está incluído no Pacote?</AccordionTrigger>
            <AccordionContent>
              Você recebe acesso imediato a +100 moldes hospitalares profissionais, prontos para imprimir e produzir.
              Inclui peças de uso diário em clínicas, consultórios e hospitais, com tamanhos do PP ao GG.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Como recebo acesso ao material?</AccordionTrigger>
            <AccordionContent>
              Após a confirmação do pagamento, o acesso é liberado automaticamente.
              Você recebe um e‑mail com o link de download para baixar e imprimir seus moldes quando quiser.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Os moldes cobrem quais tamanhos?</AccordionTrigger>
            <AccordionContent>
              Os modelos incluem tamanhos do PP ao GG, com ajustes pensados para facilitar a produção sem perder a precisão das medidas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Posso usar comercialmente e vender as peças?</AccordionTrigger>
            <AccordionContent>
              Sim. Você pode produzir e vender as peças confeccionadas a partir dos moldes,
              inclusive para entregas rápidas em clínicas, consultórios e hospitais.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Há suporte se eu tiver dúvidas?</AccordionTrigger>
            <AccordionContent>
              Sim. Você conta com suporte prioritário via WhatsApp.
              Em caso de dúvidas sobre download, impressão ou montagem, nossa equipe ajuda você.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
