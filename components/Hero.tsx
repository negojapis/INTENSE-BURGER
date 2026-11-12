"use client";

import { motion } from "framer-motion";
import HeroImageSequence from "./HeroImageSequence";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-black pt-24 pb-16 lg:py-0"
    >
      {/* Sequência de Vídeo em Alta Definição e 24 FPS */}
      <HeroImageSequence />

      {/* Gradientes responsivos para leitura perfeita em mobile e desktop sem esconder o hambúrguer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 lg:via-black/55 to-black/30 lg:to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/25 to-black/60 pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Conteúdo à Esquerda */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center sm:text-left items-center sm:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-oswald text-5xl sm:text-6xl md:text-7xl xl:text-[5.25rem] font-bold text-bite-white leading-[1.02] uppercase tracking-wide drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          >
            Sabor Intenso.
            <br />
            <span className="text-bite-red">Mordida Perfeita.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-bite-white/85 max-w-xl leading-relaxed font-light drop-shadow-md"
          >
            Hambúrguer artesanal, cheddar exagerado e uma experiência feita para quem busca sabor de verdade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 bg-bite-cheddar hover:bg-yellow-400 text-bite-black font-bold text-base sm:text-lg rounded-full text-center transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,196,0,0.35)] uppercase tracking-wider"
            >
              Fazer pedido
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-9 py-4 bg-black/50 backdrop-blur-md border border-bite-white/25 hover:border-bite-white hover:bg-black/75 text-bite-white font-bold text-base sm:text-lg rounded-full text-center transition-all uppercase tracking-wider"
            >
              Ver cardápio
            </a>
          </motion.div>
        </div>

        {/* Coluna Direita livre no desktop para exibir o hambúrguer em movimento */}
        <div className="hidden lg:block lg:col-span-5" />
      </div>
    </section>
  );
}
