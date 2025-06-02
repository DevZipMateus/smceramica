
import React from 'react';
import { Package, Settings, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Abrasivos Cerâmicos',
    description: 'Produzimos abrasivos cerâmicos de alta qualidade para processos de vibroacabamento, garantindo acabamento superior em suas peças.',
    icon: Package,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Porcelanas para Tamboreamento',
    description: 'Especialistas em porcelanas específicas para tamboreamento, proporcionando polimento eficiente e durabilidade excepcional.',
    icon: Settings,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Vibroacabamento Industrial',
    description: 'Soluções completas para vibroacabamento industrial, atendendo diferentes tipos de materiais e necessidades específicas.',
    icon: Wrench,
    delay: '0.2s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-neutral-200 text-neutral-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Abrasivos Cerâmicos de Qualidade Superior
          </h2>
          <p className="text-neutral-600 text-lg">
            Há mais de 20 anos fabricando abrasivos cerâmicos e porcelanas para tamboreamento e vibroacabamento, 
            oferecendo produtos de alta qualidade direto da fábrica.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-neutral-100 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-neutral-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Por que escolher a Santa Maria?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neutral-800">20+</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Anos de Experiência</h4>
              <p className="text-neutral-600 text-sm">Mais de duas décadas fabricando produtos de qualidade</p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neutral-800">💰</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Direto da Fábrica</h4>
              <p className="text-neutral-600 text-sm">Preços competitivos sem intermediários</p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neutral-800">⚡</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Qualidade Garantida</h4>
              <p className="text-neutral-600 text-sm">Produtos testados e aprovados pela indústria</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
