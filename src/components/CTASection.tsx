import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-dark z-0" />
      
      {/* Animated Circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          Prête à révéler votre <br/>
          <span className="text-secondary italic">beauté naturelle?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Réservez votre moment de détente et laissez-nous sublimer votre regard avec expertise et douceur.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20réserver%20un%20rendez-vous.`}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive bg-secondary hover:bg-pink-600 text-white px-10 py-5 rounded-full font-medium text-lg shadow-[0_0_20px_rgba(255,105,180,0.5)] hover:shadow-[0_0_40px_rgba(255,105,180,0.7)] transition-all duration-300 hover:-translate-y-1 flex items-center"
          >
            <MessageCircle className="mr-3" />
            Réserver sur WhatsApp
          </a>
          
          <a
            href="https://www.instagram.com/maira_olliver_esthetique/"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive border border-white/30 hover:border-white hover:bg-white hover:text-dark text-white px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 flex items-center"
          >
            <Instagram className="mr-3" />
            Suivre sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;