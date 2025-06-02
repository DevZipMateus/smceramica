
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/03b6ed5b-4d32-4382-b318-479213e8a8c4.png" 
                alt="Santa Maria Indústria de Abrasivos Cerâmicos" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <h3 className="text-xl font-semibold mb-2">Santa Maria Indústria de Abrasivos Cerâmicos</h3>
              <p className="text-neutral-300 text-sm">
                Fabricação de Abrasivos Cerâmicos e Porcelanas para Tamboreamento e Vibroacabamento há mais de 30 anos.
              </p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p>Rogério Catelan: (11) 96820-9575</p>
                  <p>Vendas - Elaine: (11) 4043-1840</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p>rogerio.catelan@hotmail.com</p>
                  <p>cerstamaria@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Rua Moema, 54, Vila Conceição<br />Diadema - SP</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-neutral-300 transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-neutral-300 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-300 transition-colors duration-300 inline-block">Produtos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-300 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-neutral-400 mb-2">Palavras-chave:</p>
              <p className="text-xs text-neutral-400">
                Abrasivos cerâmicos, tamboreamento, vibroacabamento, porcelana alumina, 
                fabricante abrasivos, mídia abrasiva, rebarbação e polimento, chips abrasivos
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-neutral-700 mt-10 pt-6 text-center text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Todos os direitos reservados - Santa Maria Indústria de Abrasivos Cerâmicos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
