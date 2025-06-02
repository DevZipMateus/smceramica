
import React from 'react';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-neutral-200 text-neutral-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-neutral-600 text-lg">
            Fale diretamente com nossa equipe e solicite seu orçamento personalizado para abrasivos cerâmicos.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {/* WhatsApp Card */}
          <div className="bg-neutral-50 rounded-xl shadow-sm overflow-hidden animate-fade-in border border-neutral-200">
            <div className="bg-emerald-500 p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 mb-4 text-sm">Atendimento rápido</p>
              <a 
                href="https://wa.me/5511968209575" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm"
                aria-label="Enviar mensagem via WhatsApp"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Rogério Card */}
          <div className="bg-neutral-50 rounded-xl shadow-sm overflow-hidden animate-fade-in border border-neutral-200" style={{ animationDelay: '0.1s' }}>
            <div className="bg-neutral-800 p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Rogério Catelan</h3>
              <p className="text-neutral-600 mb-4 text-sm">Responsável</p>
              <a 
                href="tel:+5511968209575"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm"
                aria-label="Ligar para Rogério Catelan"
              >
                <span>(11) 96820-9575</span>
              </a>
            </div>
          </div>
          
          {/* Phone Vendas Card */}
          <div className="bg-neutral-50 rounded-xl shadow-sm overflow-hidden animate-fade-in border border-neutral-200" style={{ animationDelay: '0.2s' }}>
            <div className="bg-neutral-700 p-6 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Elaine - Vendas</h3>
              <p className="text-neutral-600 mb-4 text-sm">Atendimento comercial</p>
              <a 
                href="tel:+551140431840"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm"
                aria-label="Ligar para vendas"
              >
                <span>(11) 4043-1840</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-neutral-50 rounded-xl shadow-sm overflow-hidden animate-fade-in border border-neutral-200" style={{ animationDelay: '0.3s' }}>
            <div className="bg-neutral-600 p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">E-mail</h3>
              <p className="text-neutral-600 mb-4 text-sm">Envie sua mensagem</p>
              <div className="space-y-2">
                <a 
                  href="mailto:rogerio.catelan@hotmail.com"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-3 py-1.5 rounded-md inline-flex items-center justify-center transition-all font-medium text-xs"
                  aria-label="Enviar e-mail para Rogério"
                >
                  <span>rogerio.catelan@hotmail.com</span>
                </a>
                <a 
                  href="mailto:cerstamaria@gmail.com"
                  className="bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-1.5 rounded-md inline-flex items-center justify-center transition-all font-medium text-xs"
                  aria-label="Enviar e-mail para vendas"
                >
                  <span>cerstamaria@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Address Card */}
        <div className="bg-neutral-50 rounded-xl shadow-sm p-8 max-w-4xl mx-auto border border-neutral-200">
          <div className="flex items-start justify-center">
            <div className="bg-white p-3 rounded-full mr-4 flex-shrink-0 shadow-sm">
              <MapPin className="text-neutral-700" size={24} />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">Endereço da Fábrica</h4>
              <p className="text-neutral-600">
                Rua Moema, 54, Vila Conceição<br />
                Diadema - SP
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                Visite nossa fábrica e conheça nossos processos de produção
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
