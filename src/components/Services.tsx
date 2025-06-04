
import React from 'react';
import { Package, Settings, Wrench, ArrowRight, CheckCircle, TrendingDown, Clock, Award, Scissors, DollarSign, Zap, Target } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Fabricação de Abrasivos Cerâmicos',
    description: 'Produzimos abrasivos cerâmicos de alta qualidade, chips abrasivos e mídia abrasiva para processos de vibroacabamento e tamboreamento.',
    icon: Package,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Porcelanas Alumina para Tamboreamento',
    description: 'Especialistas em porcelanas alumina específicas para tamboreamento, proporcionando polimento eficiente e durabilidade excepcional.',
    icon: Settings,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Consultoria Técnica',
    description: 'Oferecemos consultoria técnica especializada sobre aplicação dos abrasivos cerâmicos para otimizar seus processos de rebarbação e polimento.',
    icon: Wrench,
    delay: '0.2s'
  }
];

const benefits = [
  {
    title: 'Redução de até 80% no custo de acabamento',
    description: 'Economia significativa nos custos de produção',
    icon: TrendingDown
  },
  {
    title: 'Duração de 5 a 10 vezes mais que convencionais',
    description: 'Longa vida útil dos abrasivos cerâmicos',
    icon: Clock
  },
  {
    title: 'Alta capacidade de corte e desgaste',
    description: 'Performance superior nos processos',
    icon: Scissors
  },
  {
    title: 'Redução de 30 a 50% no tempo de trabalho',
    description: 'Muito mais eficiente que abrasivos plásticos',
    icon: Zap
  },
  {
    title: 'Preços especiais para revendedores',
    description: 'Condições diferenciadas para distribuidores',
    icon: DollarSign
  },
  {
    title: 'Ideal para rebarbação e polimento',
    description: 'Perfeito para peças metálicas e plásticas',
    icon: Award
  }
];

const applications = [
  {
    title: 'Para Quê Servem?',
    description: 'Utilizados para o Vibroacabamento ou Tamboreamento de peças metálicas ou plásticas, em máquinas vibratórias ou sistemas de tamboreamento em geral, também conhecidos como Rebarbação e Polimento.',
    result: 'Resultando em melhor Qualidade e Aparência Final nas peças enviadas aos clientes. Gerando maior Lucratividade e reduzindo em até 80% o custo em acabamento final das peças.'
  },
  {
    title: 'Características',
    description: 'Possuem uma alta capacidade de corte e de desgaste das peças, possibilitando uma Rebarbação ou Polimento eficientes com tempo de trabalho reduzido.',
    result: 'Porém com longa vida útil dos abrasivos. Excelente relação Custo x Benefício.'
  },
  {
    title: 'Custos x Lucratividade',
    description: 'Os Abrasivos Cerâmicos podem reduzir o tempo de trabalho nos sistemas de Vibroacabamento ou Tamboreamento em 30 a 50%, ou mais, se comparados aos Abrasivos Plásticos ou Chips Plásticos convencionais.',
    result: 'Chegando a durar de 5 a 10 vezes mais. Podendo também ser utilizados em Máquinas Turbo, reduzindo os tempos de trabalho em Incríveis 80%!'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-neutral-200 text-neutral-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Produtos e Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Abrasivos Cerâmicos de Qualidade Superior
          </h2>
          <p className="text-neutral-600 text-lg">
            Há mais de 30 anos fabricando abrasivos cerâmicos, porcelanas alumina e chips abrasivos para tamboreamento e vibroacabamento, 
            oferecendo produtos de alta qualidade direto da fábrica.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        {/* Applications Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Aplicações e Características dos Abrasivos Cerâmicos
            </h3>
            <p className="text-neutral-600">Entenda como nossos produtos podem revolucionar seus processos</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="p-6 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <h4 className="font-bold text-neutral-900 mb-4 text-lg">{app.title}</h4>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{app.description}</p>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-neutral-700 text-sm font-medium">{app.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section - Redesigned */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 px-8 py-6 border-b border-neutral-200">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">
                Benefícios dos Nossos Abrasivos Cerâmicos
              </h3>
              <p className="text-neutral-600">Vantagens comprovadas que fazem a diferença na sua produção</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-6 rounded-lg border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-200">
                  <div className="bg-neutral-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <benefit.icon size={20} className="text-neutral-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-2 text-base leading-tight">{benefit.title}</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Por que escolher a Santa Maria?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neutral-800">30+</span>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Anos de Experiência</h4>
              <p className="text-neutral-600 text-sm">Mais de três décadas fabricando produtos de qualidade</p>
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/5511968209575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
              aria-label="Falar agora pelo WhatsApp"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Fale Agora pelo WhatsApp</span>
            </a>
            <a 
              href="tel:+5511968209575" 
              className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
              aria-label="Solicitar orçamento por telefone"
            >
              <span>Solicite um Orçamento</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
