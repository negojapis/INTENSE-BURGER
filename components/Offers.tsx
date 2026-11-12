"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Offers() {
  // Cronômetro regressivo de impacto (ex: 04h 38m 45s)
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 38,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        // Reinicia ciclo quando zera
        return { hours: 4, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => String(num).padStart(2, "0");

  const whatsappComboUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(
    "Olá! Quero garantir a *Oferta Especial da Semana* (Combo Cheeseburger + Batata + 2 Molhos + Bebida)!"
  )}`;

  return (
    <section id="ofertas" className="py-24 bg-bite-red-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bite-red rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bite-black rounded-full blur-[130px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-white/10 bg-gradient-to-br from-[#140404]/95 via-[#0b0202]/95 to-black/95 backdrop-blur-md rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-[0_20px_70px_rgba(0,0,0,0.75)] overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Coluna Esquerda: Conteúdo + Cronômetro + CTA */}
            <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="font-oswald text-4xl sm:text-5xl xl:text-6xl font-bold text-bite-white uppercase tracking-wide leading-[1.08] mb-5">
                Oferta Especial <br className="hidden sm:block" />
                <span className="text-bite-cheddar">da Semana</span>
              </h2>

              <p className="text-base sm:text-lg text-bite-white/80 max-w-lg font-light leading-relaxed mb-8">
                Cheeseburger artesanal com duplo cheddar e bacon crocante, acompanhado de batata curly dourada, 2 maioneses da casa e bebida gelada.
              </p>

              {/* Cronômetro Regressivo de Impacto (Números soltos) */}
              <div className="mb-9">
                <span className="text-xs uppercase tracking-[0.22em] text-bite-white/50 font-semibold block mb-4">
                  A promoção encerra em:
                </span>
                <div className="flex items-start justify-center lg:justify-start gap-5 sm:gap-7">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-oswald text-5xl sm:text-6xl font-bold text-bite-cheddar tracking-wider tabular-nums leading-none">
                      {pad(timeLeft.hours)}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-bite-white/50 mt-2 font-medium">
                      Horas
                    </span>
                  </div>

                  <span className="font-oswald text-4xl sm:text-5xl font-bold text-bite-white/25 leading-none mt-0.5">
                    :
                  </span>

                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-oswald text-5xl sm:text-6xl font-bold text-bite-cheddar tracking-wider tabular-nums leading-none">
                      {pad(timeLeft.minutes)}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-bite-white/50 mt-2 font-medium">
                      Minutos
                    </span>
                  </div>

                  <span className="font-oswald text-4xl sm:text-5xl font-bold text-bite-white/25 leading-none mt-0.5">
                    :
                  </span>

                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-oswald text-5xl sm:text-6xl font-bold text-bite-white tracking-wider tabular-nums leading-none">
                      {pad(timeLeft.seconds)}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-bite-cheddar mt-2 font-semibold">
                      Segundos
                    </span>
                  </div>
                </div>
              </div>

              {/* Preço Promocional + Botão bem alinhados e sem quebras */}
              <div className="pt-7 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <span className="text-xs sm:text-sm text-bite-white/50 line-through whitespace-nowrap mb-1">
                    De R$ 74,90 por apenas
                  </span>
                  <span className="font-oswald text-4xl sm:text-5xl font-bold text-bite-cheddar tracking-wide whitespace-nowrap leading-none">
                    R$ 54,90
                  </span>
                </div>

                <a
                  href={whatsappComboUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-bite-cheddar hover:bg-yellow-400 text-bite-black font-black text-base sm:text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,196,0,0.45)] uppercase tracking-wider whitespace-nowrap cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Garantir Oferta</span>
                </a>
              </div>
            </div>

            {/* Coluna Direita: Foto do Combo Completa e Sem Cortes */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-black shadow-[0_15px_50px_rgba(0,0,0,0.85)] group">
                <Image
                  src="/images/super-combo.png"
                  alt="Super Combo Hambúrguer Gigante com Fritas e Molhos"
                  width={1672}
                  height={941}
                  priority
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Selo flutuante de economia */}
                <div className="absolute top-4 right-4 bg-bite-red text-bite-white font-oswald font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg border border-white/20 text-xs sm:text-sm">
                  Economize R$ 20
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
