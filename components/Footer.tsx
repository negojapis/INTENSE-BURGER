import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030303] pt-20 pb-10 border-t border-white/5">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col mb-6">
              <span className="font-oswald text-4xl font-bold text-bite-white leading-none tracking-wider uppercase">
                INTENSE BURGER
              </span>
              <span className="text-bite-cheddar text-sm font-semibold tracking-widest uppercase mt-1">
                Burger House
              </span>
            </Link>
            <p className="text-bite-white/60 font-light max-w-sm">
              Elevando o padrão do fast food com ingredientes premium, muito cheddar e sabor de verdade.
            </p>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg text-bite-white uppercase tracking-wider mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-4">
              {["Home", "Menu", "Sobre"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-bite-white/60 hover:text-bite-cheddar transition-colors font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg text-bite-white uppercase tracking-wider mb-6">
              Siga-nos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-bite-white/5 flex items-center justify-center text-bite-white hover:bg-bite-cheddar hover:text-bite-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-bite-white/5 flex items-center justify-center text-bite-white hover:bg-bite-cheddar hover:text-bite-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-bite-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-bite-white/40 text-sm font-light">
              © {new Date().getFullYear()} Intense Burger House. Todos os direitos reservados.
            </p>
            <p className="text-bite-white/40 text-sm font-light">
              Design e Desenvolvimento por <a href="#" target="_blank" rel="noopener noreferrer" className="text-bite-white hover:text-bite-cheddar font-medium transition-colors">Grace Code Systems</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-bite-white/40 font-light">
            <a href="#" className="hover:text-bite-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-bite-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
