"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

const burgers: MenuItem[] = [
  {
    id: "signature",
    name: "Signature Burger",
    price: "R$ 42,90",
    description:
      "Blend Angus 180g grelhado no fogo, bacon crocante, cebola caramelizada artesanal e queijo cheddar cremoso derretido.",
    image: "/images/burger-signature.png",
  },
  {
    id: "double-cheddar",
    name: "Double Cheddar",
    price: "R$ 48,90",
    description:
      "Pão australiano macio, duplo blend 160g, cascata de cheddar cremoso exagerado e farofa crocante de bacon artesanal.",
    image: "/images/burger-double-cheddar.png",
  },
  {
    id: "onion-crispy",
    name: "Onion Crispy",
    price: "R$ 39,90",
    description:
      "Blend bovino 180g suculento, anéis de cebola empanados ultra crocantes, molho barbecue rústico e queijo prato derretido.",
    image: "/images/burger-onion-crispy.png",
  },
  {
    id: "spicy-bacon",
    name: "Spicy Bacon",
    price: "R$ 44,90",
    description:
      "Blend 180g na brasa viva, tiras fartas de bacon caramelizado com toque picante exclusivo e queijo suíço derretido.",
    image: "/images/burger-spicy-bacon.png",
  },
  {
    id: "classic-smash",
    name: "Classic Smash",
    price: "R$ 34,90",
    description:
      "Duplo smash burger ultra prensado com crostinha dourada, cheddar americano duplo, picles agridoce da casa e molho especial.",
    image: "/images/burger-classic-smash.png",
  },
  {
    id: "supreme-bite",
    name: "Supreme Bite",
    price: "R$ 54,90",
    description:
      "Blend Angus nobre 200g, bloco de queijo gouda empanado crocante, tiras de bacon, alface americana, tomate e maionese trufada.",
    image: "/images/burger-supreme-bite.png",
  },
];

const sauces: MenuItem[] = [
  {
    id: "maionese-da-casa",
    name: "Maionese da Casa",
    price: "R$ 6,90",
    description:
      "Nossa clássica maionese artesanal ultra cremosa, temperada com especiarias selecionadas e toque especial do chef.",
    image: "/images/maionese-casa.png",
  },
  {
    id: "maionese-mr-jack",
    name: "Maionese Mr Jack",
    price: "R$ 7,90",
    description:
      "Maionese artesanal com notas intensas defumadas, toque levemente adocicado e tempero marcante estilo barbecue.",
    image: "/images/maionese-mr-jack.png",
  },
  {
    id: "maionese-de-ervas",
    name: "Maionese de Ervas",
    price: "R$ 6,90",
    description:
      "Combinação equilibrada de ervas finas frescas, alho suave e base cremosa artesanal para acompanhar qualquer burger.",
    image: "/images/maionese-ervas.png",
  },
  {
    id: "maionese-ultra",
    name: "Maionese Ultra",
    price: "R$ 7,90",
    description:
      "Textura aveludada e sabor intenso amanteigado, pensada para quem busca o máximo de cremosidade em cada mordida.",
    image: "/images/maionese-ultra.png",
  },
];

const starters: MenuItem[] = [
  {
    id: "batata-frita-tradicional",
    name: "Batata Frita Tradicional",
    price: "R$ 22,90",
    description:
      "Porção generosa de batatas palito selecionadas, fritas na hora até ficarem douradas e ultra crocantes por fora e macias por dentro.",
    image: "/images/batata-tradicional.png",
  },
  {
    id: "batata-ondulada-curly",
    name: "Batata Curly Temperada",
    price: "R$ 26,90",
    description:
      "Batatas em espiral super crocantes envolvidas no nosso mix exclusivo de especiarias levemente picantes e páprica defumada.",
    image: "/images/batata-curly.png",
  },
  {
    id: "batata-rustica-sal",
    name: "Batata Corte Especial",
    price: "R$ 24,90",
    description:
      "Batatas de corte grosso douradas com perfeição e finalizadas com flor de sal para destacar o sabor autêntico da batata.",
    image: "/images/batata-rustica.png",
  },
];

function MenuCard({
  item,
  index,
  imageAspect = "aspect-[16/10]",
}: {
  item: MenuItem;
  index: number;
  imageAspect?: string;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(
    `Olá! Gostaria de pedir o *${item.name}* (${item.price}).`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
      onMouseMove={handleMouseMove}
      className="relative group h-full"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col justify-between w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-bite-red/90 hover:shadow-[0_14px_40px_-10px_rgba(179,18,18,0.45)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
      >
        {/* Spotlight interativo seguindo o mouse */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 196, 0, 0.08), transparent 70%)`,
          }}
        />

        {/* Imagem nítida na proporção natural sem faixas pretas e sem cortar o lanche */}
        <div className={`relative w-full ${imageAspect} overflow-hidden bg-black`}>
          <Image
            src={item.image}
            alt={item.name}
            fill
            quality={95}
            priority={index < 3}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          />

          {/* Transição suave da base da foto para o corpo do card */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>

        {/* Corpo do Card: Nome, Preço, Ingredientes e Botão alinhados */}
        <div className="relative z-20 p-5 sm:p-6 pt-3 flex flex-col flex-1 justify-between bg-[#0a0a0a]">
          <div>
            <div className="flex items-baseline justify-between gap-3 mb-2.5">
              <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-wide text-bite-white group-hover:text-bite-cheddar transition-colors duration-200 leading-snug">
                {item.name}
              </h3>
              <span className="font-oswald text-xl sm:text-2xl font-bold text-bite-cheddar tracking-wider whitespace-nowrap shrink-0">
                {item.price}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-bite-white/70 font-light leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          <div className="w-full py-3.5 px-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 bg-white/[0.06] border border-white/10 text-bite-white group-hover:bg-bite-red group-hover:border-bite-red group-hover:shadow-[0_0_25px_rgba(179,18,18,0.4)] transition-all duration-300">
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Pedir pelo WhatsApp</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#070707] relative overflow-hidden">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-bite-red-dark/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* 1. Seção Hambúrgueres */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-bite-white uppercase tracking-wider"
          >
            Nosso <span className="text-bite-red">Cardápio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 sm:mt-4 text-bite-white/70 max-w-2xl mx-auto font-light text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Escolha seu lanche favorito e faça seu pedido diretamente pelo WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {burgers.map((burger, index) => (
            <div key={burger.id} className="h-full">
              <MenuCard item={burger} index={index} imageAspect="aspect-[16/9]" />
            </div>
          ))}
        </div>

        {/* 2. Seção Maioneses & Molhos */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-bite-white uppercase tracking-wider"
            >
              Maioneses & <span className="text-bite-red">Molhos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 sm:mt-4 text-bite-white/70 max-w-2xl mx-auto font-light text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Feitas diariamente na casa para elevar ainda mais o sabor do seu hambúrguer.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sauces.map((sauce, index) => (
              <div key={sauce.id} className="h-full">
                <MenuCard item={sauce} index={index} imageAspect="aspect-square" />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Seção Entradas */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-bite-white uppercase tracking-wider"
            >
              Nossas <span className="text-bite-red">Entradas</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 sm:mt-4 text-bite-white/70 max-w-2xl mx-auto font-light text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Porções crocantes e douradas na medida certa para acompanhar seu burger.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {starters.map((starter, index) => (
              <div key={starter.id} className="h-full">
                <MenuCard item={starter} index={index} imageAspect="aspect-[3/2]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
