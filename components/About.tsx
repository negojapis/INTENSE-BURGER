"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  RotateCcw,
  Star,
  Truck,
  Leaf,
  Flame,
  Award,
} from "lucide-react";

interface PerspectiveFlipCardProps {
  className?: string;
  front: (flip: () => void) => React.ReactNode;
  back: (flip: () => void) => React.ReactNode;
  h?: string;
  w?: string;
}

export function PerspectiveFlipCard({
  className,
  front,
  back,
  h = "h-[520px] sm:h-[550px] lg:h-[560px]",
  w = "w-full",
}: PerspectiveFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div
      onClick={toggleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFlip();
        }
      }}
      className={cn(
        "group/p-card [perspective:2000px] cursor-pointer select-none focus:outline-none",
        h,
        w,
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] rounded-2xl sm:rounded-3xl",
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 size-full rounded-2xl sm:rounded-3xl border border-white/10 group-hover/p-card:border-bite-red/70 bg-gradient-to-b from-[#121212] to-[#080808] text-bite-white shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-colors duration-300 [transform-style:preserve-3d] [backface-visibility:hidden]">
          <div className="size-full [transform-style:preserve-3d] p-4 sm:p-5">
            {front(toggleFlip)}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 size-full rounded-2xl sm:rounded-3xl border border-bite-red/60 bg-gradient-to-b from-[#140707] via-[#0c0c0c] to-[#070707] text-bite-white shadow-[0_20px_60px_rgba(179,18,18,0.25)] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="size-full [transform-style:preserve-3d] p-5 sm:p-8 flex flex-col justify-between">
            {back(toggleFlip)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   CARD 1: NOSSA HISTÓRIA (Frente & Verso)
   ========================================================================== */
const HistoryFront = () => (
  <div className="size-full flex flex-col [transform-style:preserve-3d]">
    {/* Image Section (Z: 50px) */}
    <div className="relative aspect-[16/9] w-full shrink-0 [transform-style:preserve-3d] [transform:translateZ(50px)]">
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-black overflow-hidden border border-white/10">
        <Image
          src="/images/nossa-historia.png"
          alt="Hambúrguer artesanal na chapa - Nossa História"
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition duration-700 group-hover/p-card:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
      </div>

      {/* Floating Badge (Z: 80px) */}
      <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-medium tracking-tight text-bite-white shadow-lg [transform:translateZ(80px)]">
        <Star className="size-3.5 fill-bite-cheddar text-bite-cheddar shrink-0" />
        <span>100% Artesanal • Brasa Viva</span>
      </div>
    </div>

    {/* Content Section (Z: 60px) */}
    <div className="flex flex-col justify-between flex-grow px-2 sm:px-4 pt-6 pb-2 [transform-style:preserve-3d]">
      <div className="space-y-3 [transform-style:preserve-3d] [transform:translateZ(60px)]">
        <h3 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-wider text-bite-white transition duration-300 group-hover/p-card:text-bite-cheddar leading-tight">
          Nossa <span className="text-bite-red">História</span>
        </h3>
        <p className="text-sm sm:text-base font-light text-bite-white/75 leading-relaxed">
          Conheça a origem da Intense Burger e como transformamos ingredientes nobres em uma experiência marcante.
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-bite-cheddar [transform:translateZ(40px)]">
        <span className="group-hover/p-card:translate-x-1 transition-transform">
          Clique para virar o card
        </span>
      </div>
    </div>
  </div>
);

const HistoryBack = () => (
  <div className="size-full flex flex-col justify-between [transform-style:preserve-3d]">
    {/* Top Feature Icons / Stats (Z: 100px) */}
    <div className="w-full [transform-style:preserve-3d] grid grid-cols-2 gap-3 sm:gap-4">
      <div className="flex flex-col items-center justify-center gap-1 p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 [transform:translateZ(80px)] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-bite-red/20 border border-bite-red/40 text-bite-cheddar [transform:translateZ(15px)]">
          <Flame className="size-4 sm:size-5" />
        </div>
        <span className="font-oswald text-2xl sm:text-3xl font-bold text-bite-cheddar [transform:translateZ(10px)]">
          100%
        </span>
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-bite-white/60 [transform:translateZ(10px)]">
          Carne Fresca
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 [transform:translateZ(95px)] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-bite-red/20 border border-bite-red/40 text-bite-cheddar [transform:translateZ(15px)]">
          <Award className="size-4 sm:size-5" />
        </div>
        <span className="font-oswald text-2xl sm:text-3xl font-bold text-bite-cheddar [transform:translateZ(10px)]">
          Art.
        </span>
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-bite-white/60 [transform:translateZ(10px)]">
          Preparo Artesanal
        </p>
      </div>
    </div>

    {/* Story Text (Z: 60px) */}
    <div className="my-auto py-3 space-y-2.5 sm:space-y-3 text-left [transform-style:preserve-3d]">
      <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wider text-bite-white [transform:translateZ(65px)]">
        Nossa <span className="text-bite-red">História</span>
      </h3>
      <div className="space-y-2.5 text-xs sm:text-sm text-bite-white/80 font-light leading-relaxed [transform:translateZ(40px)]">
        <p>
          Na Intense Burger, cada hambúrguer é preparado para entregar intensidade, textura e sabor em cada mordida.
        </p>
        <p>
          Do pão selado na chapa com manteiga até o cheddar derretido no ponto perfeito, tudo é pensado milimetricamente para uma experiência marcante que vai além de um simples lanche.
        </p>
        <p>
          Acreditamos que fast food pode ser sinônimo de qualidade premium, ingredientes selecionados e um sabor que te faz querer voltar no dia seguinte.
        </p>
      </div>
    </div>

    {/* Action Button (Z: 80px) */}
    <div className="w-full [transform-style:preserve-3d]">
      <div className="h-11 w-full rounded-xl bg-white/[0.07] hover:bg-bite-red border border-white/15 hover:border-bite-red text-bite-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all [transform:translateZ(80px)]">
        <RotateCcw className="size-3.5" />
        <span>Clique para voltar</span>
      </div>
    </div>
  </div>
);

/* ==========================================================================
   CARD 2: NOSSO DIFERENCIAL (Frente & Verso)
   ========================================================================== */
const DifferentialFront = () => (
  <div className="size-full flex flex-col [transform-style:preserve-3d]">
    {/* Image Section (Z: 50px) */}
    <div className="relative aspect-[16/9] w-full shrink-0 [transform-style:preserve-3d] [transform:translateZ(50px)]">
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-black overflow-hidden border border-white/10">
        <Image
          src="/images/ingredientes-frescos.png"
          alt="Ingredientes Frescos - Nosso Diferencial"
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition duration-700 group-hover/p-card:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
      </div>

      {/* Floating Badge (Z: 80px) */}
      <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-medium tracking-tight text-bite-white shadow-lg [transform:translateZ(80px)]">
        <Star className="size-3.5 fill-bite-cheddar text-bite-cheddar shrink-0" />
        <span>Qualidade & Sabor Intenso</span>
      </div>
    </div>

    {/* Content Section (Z: 60px) */}
    <div className="flex flex-col justify-between flex-grow px-2 sm:px-4 pt-6 pb-2 [transform-style:preserve-3d]">
      <div className="space-y-3 [transform-style:preserve-3d] [transform:translateZ(60px)]">
        <h3 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-wider text-bite-white transition duration-300 group-hover/p-card:text-bite-cheddar leading-tight">
          Nosso <span className="text-bite-red">Diferencial</span>
        </h3>
        <p className="text-sm sm:text-base font-light text-bite-white/75 leading-relaxed">
          Descubra os 3 pilares que fazem de cada pedido na Intense Burger uma experiência única do início ao fim.
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-bite-cheddar [transform:translateZ(40px)]">
        <span className="group-hover/p-card:translate-x-1 transition-transform">
          Clique para virar o card
        </span>
      </div>
    </div>
  </div>
);

const DifferentialBack = () => (
  <div className="size-full flex flex-col justify-between [transform-style:preserve-3d]">
    {/* Top Feature Icons (Z: 90px) */}
    <div className="w-full [transform-style:preserve-3d] grid grid-cols-3 gap-2.5 sm:gap-3">
      <div className="flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 [transform:translateZ(80px)] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-bite-red/20 border border-bite-red/40 text-bite-cheddar [transform:translateZ(15px)]">
          <Truck className="size-4 sm:size-5" />
        </div>
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-bite-white [transform:translateZ(10px)]">
          Entrega
        </p>
      </div>

      <div className="flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 [transform:translateZ(100px)] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-bite-red/20 border border-bite-red/40 text-bite-cheddar [transform:translateZ(15px)]">
          <Leaf className="size-4 sm:size-5" />
        </div>
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-bite-white [transform:translateZ(10px)]">
          Frescor
        </p>
      </div>

      <div className="flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 [transform:translateZ(80px)] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-bite-red/20 border border-bite-red/40 text-bite-cheddar [transform:translateZ(15px)]">
          <Star className="size-4 sm:size-5" />
        </div>
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-bite-white [transform:translateZ(10px)]">
          Cheddar
        </p>
      </div>
    </div>

    {/* 3 Differentials List (Z: 55px) */}
    <div className="my-auto py-2.5 space-y-2.5 text-left [transform-style:preserve-3d]">
      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 [transform:translateZ(55px)]">
        <h4 className="font-oswald text-base sm:text-lg font-bold uppercase tracking-wide text-bite-cheddar">
          Entrega rápida
        </h4>
        <p className="text-xs text-bite-white/75 font-light leading-relaxed mt-0.5">
          Seu hambúrguer chega quente e perfeito para a primeira mordida.
        </p>
      </div>

      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 [transform:translateZ(65px)]">
        <h4 className="font-oswald text-base sm:text-lg font-bold uppercase tracking-wide text-bite-cheddar">
          Ingredientes frescos
        </h4>
        <p className="text-xs text-bite-white/75 font-light leading-relaxed mt-0.5">
          Selecionamos os melhores insumos diariamente para garantir qualidade premium.
        </p>
      </div>

      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 [transform:translateZ(55px)]">
        <h4 className="font-oswald text-base sm:text-lg font-bold uppercase tracking-wide text-bite-cheddar">
          Cheddar premium
        </h4>
        <p className="text-xs text-bite-white/75 font-light leading-relaxed mt-0.5">
          Muito queijo derretido, cremoso e com sabor intenso em todas as opções.
        </p>
      </div>
    </div>

    {/* Action Button (Z: 80px) */}
    <div className="w-full [transform-style:preserve-3d]">
      <div className="h-11 w-full rounded-xl bg-white/[0.07] hover:bg-bite-red border border-white/15 hover:border-bite-red text-bite-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all [transform:translateZ(80px)]">
        <RotateCcw className="size-3.5" />
        <span>Clique para voltar</span>
      </div>
    </div>
  </div>
);

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-bite-black border-t border-bite-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-bite-white uppercase tracking-wider"
          >
            Sobre a <span className="text-bite-red">Intense Burger</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 sm:mt-4 text-bite-white/70 font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Clique nos cards abaixo para virar e conhecer nossa história e nossos diferenciais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PerspectiveFlipCard
              front={() => <HistoryFront />}
              back={() => <HistoryBack />}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <PerspectiveFlipCard
              front={() => <DifferentialFront />}
              back={() => <DifferentialBack />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
