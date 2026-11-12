"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#0a0a0a] to-bite-black border-t border-white/5 relative overflow-hidden">
      <div className="site-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-oswald text-4xl sm:text-6xl md:text-7xl font-bold text-bite-white uppercase tracking-wider mb-6 sm:mb-8 leading-[1.05]">
            Pronto para sentir <br className="hidden sm:block" />
            <span className="text-bite-red">esse sabor?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-bite-white/70 mb-10 sm:mb-12 font-light max-w-xl mx-auto leading-relaxed">
            Faça seu pedido agora e receba o melhor hambúrguer da cidade na sua casa.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-4 sm:py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-base sm:text-xl rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)] uppercase tracking-wider"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span>Pedir pelo WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
