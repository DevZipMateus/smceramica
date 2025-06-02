
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="animate-fade-in col-span-1 lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/03b6ed5b-4d32-4382-b318-479213e8a8c4.png" 
                alt="Santa Maria Indústria de Abrasivos Cerâmicos" 
                className="h-12 md:h-16 w-auto mb-4 brightness-0 invert"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-3">Santa Maria Indústria de Abrasivos Cerâmicos</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Fabricação de Abrasivos Cerâmicos e Porcelanas para Tamboreamento e Vibroacabamento há mais de 30 anos.
              </p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in col-span-1" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Contato</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={16} />
                <div className="text-sm">
                  <p className="mb-1">Rogério Catelan: <a href="tel:+5511968209575" className="hover:text-neutral-300 transition-colors">(11) 96820-9575</a></p>
                  <p>Vendas - Elaine: <a href="tel:+551140431840" className="hover:text-neutral-300 transition-colors">(11) 4043-1840</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={16} />
                <div className="text-sm">
                  <p className="mb-1"><a href="mailto:rogerio.catelan@hotmail.com" className="hover:text-neutral-300 transition-colors break-all">rogerio.catelan@hotmail.com</a></p>
                  <p><a href="mailto:cerstamaria@gmail.com" className="hover:text-neutral-300 transition-colors">cerstamaria@gmail.com</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-sm">Rua Moema, 54, Vila Conceição<br />Diadema - SP</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in col-span-1 md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Links Rápidos</h3>
            <ul className="space-y-2 md:space-y-3 mb-6">
              <li>
                <a href="#" className="hover:text-neutral-300 transition-colors duration-300 inline-block text-sm">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-neutral-300 transition-colors duration-300 inline-block text-sm">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-300 transition-colors duration-300 inline-block text-sm">Produtos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-300 transition-colors duration-300 inline-block text-sm">Contato</a>
              </li>
            </ul>
            <div>
              <p className="text-xs text-neutral-400 mb-2">Palavras-chave:</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Abrasivos cerâmicos, tamboreamento, vibroacabamento, porcelana alumina, 
                fabricante abrasivos, mídia abrasiva, rebarbação e polimento, chips abrasivos
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-neutral-700 mt-8 md:mt-10 pt-4 md:pt-6 text-center">
          <p className="text-xs md:text-sm text-neutral-400">
            © {new Date().getFullYear()} Todos os direitos reservados - Santa Maria Indústria de Abrasivos Cerâmicos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
