
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-neutral-200/30 w-full h-full absolute -left-4 -top-4 rounded-lg"></div>
              <img 
                src="/lovable-uploads/925166a4-871d-418f-b99b-cd253b927df7.png" 
                alt="Abrasivos cerâmicos e porcelanas alumina para tamboreamento e vibroacabamento - diferentes formatos e tamanhos" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float max-w-[200px]">
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-neutral-800 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-neutral-600">Desde 1990</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-neutral-600 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-neutral-600">+1000 clientes</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-neutral-900">30+</div>
                <div className="text-xs text-neutral-600">Anos fabricando abrasivos cerâmicos</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-neutral-200 text-neutral-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Mais de 30 Anos Fabricando Abrasivos Cerâmicos de Qualidade
            </h2>
            <p className="text-neutral-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A Santa Maria Indústria de Abrasivos Cerâmicos é especialista na fabricação de abrasivos cerâmicos e porcelanas alumina 
              para vibroacabamento e tamboreamento, atendendo as maiores indústrias e distribuidores do Brasil há mais de três décadas.
            </p>
            <p className="text-neutral-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Nossos produtos são desenvolvidos com alta tecnologia para proporcionar máxima eficiência nos processos de rebarbação 
              e polimento, garantindo excelente relação custo-benefício e qualidade superior de acabamento.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-neutral-200 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-neutral-800" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-1">Fabricação Própria</h4>
                  <p className="text-neutral-600">Produção 100% nacional com controle de qualidade rigoroso</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-neutral-200 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-neutral-800" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-1">Preços Direto da Fábrica</h4>
                  <p className="text-neutral-600">Eliminamos intermediários para oferecer os melhores preços</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-neutral-200 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-neutral-800" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-1">Consultoria Técnica</h4>
                  <p className="text-neutral-600">Suporte especializado para otimizar seus processos</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5511968209575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Conheça Nossos Produtos</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
