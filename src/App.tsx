import React from 'react';
import { 
  MessageSquare, 
  Check, 
  Award, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Search, 
  Compass, 
  Layers,
  Heart
} from 'lucide-react';

export default function App() {
  const whatsappUrl = "https://wa.me/5549999619123";

  return (
    <div className="min-h-screen bg-brand-dark-black text-brand-nude-ivory font-sans selection:bg-brand-gold selection:text-brand-dark-black relative">
      
      {/* Decorative luxury mesh glow backing */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_-10%,rgba(197,160,89,0.08),transparent)] pointer-events-none"></div>
      
      {/* Fine golden top rule */}
      <div className="h-[3px] bg-gradient-to-r from-brand-gold-dark via-brand-gold-light to-brand-gold-dark sticky top-0 z-50"></div>

      {/* Header */}
      <header className="border-b border-brand-nude-dark/40 backdrop-blur-md bg-brand-dark-black/70 sticky top-[3px] z-40">
        <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Elegant visual brand signifier */}
            <div className="w-9 h-9 rounded bg-gradient-to-tr from-brand-gold-dark via-brand-gold to-brand-gold-light flex items-center justify-center font-serif text-brand-dark-black font-extrabold text-lg shadow-[0_0_15px_rgba(197,160,89,0.15)]">
               M
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-elegant-serif text-white">MLee <span className="text-brand-gold">Digital</span></span>
              <p className="text-[8px] text-brand-nude-taupe uppercase tracking-widest font-mono select-none">Vitrine Digital de Alto Padrão</p>
            </div>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brand-gold/40 hover:border-brand-gold bg-brand-dark-charcoal hover:bg-brand-gold/10 text-brand-gold px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-300 shadow-md group"
            id="header-whatsapp-btn"
          >
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Pitch Container */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">
        
        {/* Title area */}
        <section className="text-center space-y-6" id="vitrine-hero-section">
          {/* Subtle elegant tag */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/5 border border-brand-gold/20 px-4 py-1.5 rounded-full text-brand-gold text-[10px] uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3 text-brand-gold" />
            Tradição e Exclusividade Online
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight text-elegant-serif px-2">
            Vitrine Premium — Condição Especial Esta Semana
          </h1>

          <p className="text-brand-nude-taupe text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-elegant-serif italic pt-2">
            "Sua presença digital de alto padrão, com a estrutura que sua marca merece — agora com condição exclusiva por tempo limitado."
          </p>
        </section>

        {/* Centralized Premium Offer Block */}
        <section className="relative px-2" id="offer-highlight-block">
          {/* Backdrop gold shadow */}
          <div className="absolute inset-x-4 inset-y-0 bg-brand-gold/5 rounded-3xl blur-2xl -z-10"></div>
          
          <div className="bg-brand-dark-charcoal border border-brand-gold/30 rounded-3xl p-8 md:p-12 text-center space-y-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
            
            <div className="space-y-2">
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold font-mono">Oferta Imperdível</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white text-elegant-serif">
                Vitrine Premium — Condição Válida até 30/06
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center py-6 border-y border-brand-gold/10 max-w-md mx-auto space-y-1">
              <span className="text-brand-nude-taupe/60 text-sm line-through tracking-wider font-mono">
                De R$ 897,00
              </span>
              <div className="flex items-baseline gap-1 bg-gradient-to-b from-white to-brand-nude-beige bg-clip-text text-transparent">
                <span className="text-lg font-bold text-brand-gold mr-1">por</span>
                <span className="text-5xl sm:text-6xl font-black tracking-tighter text-white font-serif">
                  R$ 697
                </span>
                <span className="text-base text-brand-nude-taupe font-sans ml-1">à vista</span>
              </div>
              <p className="text-xs text-brand-nude-taupe mt-3 px-4 py-1 bg-brand-nude-dark/40 text-brand-nude-beige border border-brand-gold/10 rounded-full font-mono">
                A partir de julho, retorna ao valor normal.
              </p>
            </div>

            <div className="pt-2 max-w-md mx-auto">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light hover:from-brand-gold hover:to-brand-gold-light text-brand-dark-black font-semibold uppercase tracking-widest text-xs py-4.5 px-8 rounded-xl shadow-[0_4px_25px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_30px_rgba(197,160,89,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
                id="cta-main-btn"
              >
                <span>Quero Garantir Minha Vitrine</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </section>

        {/* What is Included (Exactly listed) */}
        <section className="space-y-8" id="features-list-section">
          <div className="flex items-center gap-4">
            <div className="h-[1px] bg-brand-gold/20 flex-1"></div>
            <h3 className="text-lg md:text-xl uppercase tracking-wider text-brand-gold text-elegant-serif px-2 font-medium">
              O Que Está Incluso
            </h3>
            <div className="h-[1px] bg-brand-gold/20 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
            
            {/* Feature 1 */}
            <div className="bg-brand-dark-charcoal/50 border border-brand-nude-dark/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-gold/20 transition-all duration-300">
              <div className="p-3 bg-brand-gold/5 border border-brand-gold/20 rounded-xl text-brand-gold">
                <Check className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-white tracking-wide text-sm sm:text-base">Tudo do Plano Essencial</h4>
                <p className="text-xs text-brand-nude-taupe leading-relaxed">
                  Infraestrutura base robusta, rapidez extrema de carregamento e hospedagem segura focada em resultados.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-brand-dark-charcoal/50 border border-brand-nude-dark/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-gold/20 transition-all duration-300">
              <div className="p-3 bg-brand-gold/5 border border-brand-gold/20 rounded-xl text-brand-gold">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-white tracking-wide text-sm sm:text-base">Copywriting Persuasivo com Storytelling</h4>
                <p className="text-xs text-brand-nude-taupe leading-relaxed">
                  Seus serviços e valores explicados com narrativas hipnóticas que constroem conexões emocionais profundas.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-brand-dark-charcoal/50 border border-brand-nude-dark/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-gold/20 transition-all duration-300">
              <div className="p-3 bg-brand-gold/5 border border-brand-gold/20 rounded-xl text-brand-gold">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-white tracking-wide text-sm sm:text-base">Estratégia de Posicionamento Premium</h4>
                <p className="text-xs text-brand-nude-taupe leading-relaxed">
                  Design e discurso desenhados cirurgicamente para atrair clientes de alto tíquete que pagam pelo seu valor.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-brand-dark-charcoal/50 border border-brand-nude-dark/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-gold/20 transition-all duration-300">
              <div className="p-3 bg-brand-gold/5 border border-brand-gold/20 rounded-xl text-brand-gold">
                <Search className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-white tracking-wide text-sm sm:text-base">Otimização Google Meu Negócio e SEO</h4>
                <p className="text-xs text-brand-nude-taupe leading-relaxed">
                  Apareça organicamente na sua região geográfica exata, no topo das buscas quando novos pacientes buscarem estética.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-brand-dark-charcoal/50 border border-brand-nude-dark/50 p-6 rounded-2xl flex items-start gap-4 hover:border-brand-gold/20 transition-all duration-300 md:col-span-2 max-w-lg mx-auto w-full">
              <div className="p-3 bg-brand-gold/5 border border-brand-gold/20 rounded-xl text-brand-gold">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-white tracking-wide text-sm sm:text-base">Design 100% Exclusivo e Magnético</h4>
                <p className="text-xs text-brand-nude-taupe leading-relaxed">
                  Layout desenhado do absoluto zero, recusando temas prontos genéricos, para capturar a percepção de alta-estética.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Social Proof Section (Exact details only) */}
        <section className="bg-brand-dark-charcoal border border-brand-gold/20 rounded-3xl p-8 md:p-10 space-y-6" id="social-proof-case">
          <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider font-mono">
            <Award className="w-4.5 h-4.5" />
            <span>Caso Real</span>
          </div>

          <div className="space-y-4">
            <h4 className="text-2xl font-normal text-white text-elegant-serif">
              Dra. Soray Abbud — Estética Avançada
            </h4>
            <p className="text-brand-nude-taupe text-sm md:text-base font-light leading-relaxed">
              "Vitrine digital ativa, com manutenção contratada e contínua."
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 items-center justify-between border-t border-brand-gold/10 pt-6">
            <span className="text-xs text-brand-nude-taupe italic">Consulte o portfólio oficial implementado:</span>
            <a 
              href="https://www.drasorayabbud.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light text-xs font-bold tracking-wide transition-all border-b border-brand-gold/30 hover:border-brand-gold-light pb-0.5"
            >
              <span>Ver Site Oficial da Dra. Soray Abbud</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Secondary Bottom CTA */}
        <section className="text-center space-y-6 pt-4" id="bottom-cta-section">
          <h4 className="text-2xl font-normal text-white text-elegant-serif">
            Dê o Próximo Passo Hoje
          </h4>
          <p className="text-xs text-brand-nude-taupe max-w-md mx-auto leading-relaxed font-light">
            Não perca a oportunidade de possuir uma vitrine sofisticada que converte visitantes frios em clientes particulares recorrentes com a nossa condição promocional especial.
          </p>
          <div className="pt-2 max-w-xs mx-auto">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light hover:from-brand-gold hover:to-brand-gold-light text-brand-dark-black font-semibold uppercase tracking-widest text-xs py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              id="cta-bottom-btn"
            >
              <span>Quero Garantir Minha Vitrine</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-brand-nude-dark/40 bg-brand-dark-black/90 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs text-brand-nude-taupe/90 font-medium">
            MLee Digital — Vitrines digitais para profissionais de saúde e estética.
          </p>
          <div className="h-[1px] bg-brand-gold/10 w-16 mx-auto"></div>
          <p className="text-[10px] text-brand-nude-taupe/50 uppercase tracking-widest font-mono">
            © {new Date().getFullYear()} MLee Digital • Design e Branding Exclusivo
          </p>
        </div>
      </footer>

    </div>
  );
}
