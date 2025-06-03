
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
const Hero = () => {
  const isMobile = useIsMobile();
  return <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gradient-to-br from-white to-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4aa030f6-f9a2-4c21-87f7-fd067d79027c.png')] bg-cover bg-center opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-neutral-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-neutral-300/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center py-[45px]">
          <div className="mb-8 animate-fade-in">
            
          </div>
          
          <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl lg:text-5xl'} font-bold text-neutral-900 leading-tight mb-6 animate-fade-in`} style={{
          animationDelay: '0.1s'
        }}>
            Abrasivos Cerâmicos Brasil
          </h1>
          
          <h2 className="text-lg md:text-xl text-neutral-700 mb-4 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Abrasivos Cerâmicos e Porcelanas Alumina de Alta Qualidade para Vibroacabamento e Tamboreamento
          </h2>
          
          <p className="text-base md:text-lg text-neutral-600 mb-4 max-w-3xl mx-auto animate-fade-in font-semibold" style={{
          animationDelay: '0.3s'
        }}>
            Mais de 30 Anos de Experiência no Mercado. Fabricamos um dos Melhores Abrasivos do Mercado em relação a Custo Benefício e Qualidade de Acabamento.
          </p>
          
          <p className="text-base md:text-lg text-neutral-600 mb-6 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '0.35s'
        }}>
            Diretamente do Fabricante a Preços Acessíveis. Preços Especiais para Distribuidores e Revendedores.
          </p>

          <p className="text-lg md:text-xl text-neutral-800 mb-10 max-w-3xl mx-auto animate-fade-in font-bold" style={{
          animationDelay: '0.4s'
        }}>
            Diminua até 30% seus custos de Produção comprando diretamente de quem fabrica.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.45s'
        }}>
            <a href="https://wa.me/5511968209575" target="_blank" rel="noopener noreferrer" className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium" aria-label="Solicitar orçamento via WhatsApp">
              <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="https://wa.me/5511968209575" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium" aria-label="Comprar direto da fábrica via WhatsApp">
              Compre Direto da Fábrica
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#f8fafc" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>;
};
export default Hero;
