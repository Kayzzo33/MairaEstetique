import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Service } from '../../types';
import { X, Check, Clock, Calendar } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    // Animation in
    gsap.fromTo(
      "#modal-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );
    gsap.fromTo(
      "#modal-content",
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, delay: 0.1, ease: 'back.out(1.2)' }
    );
  }, []);

  const handleClose = () => {
    gsap.to("#modal-content", { y: 20, opacity: 0, scale: 0.95, duration: 0.3 });
    gsap.to("#modal-overlay", { 
      opacity: 0, 
      duration: 0.3, 
      delay: 0.1,
      onComplete: onClose 
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        id="modal-overlay" 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={handleClose}
      />
      
      <div 
        id="modal-content" 
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white p-2 rounded-full transition-colors interactive"
        >
          <X size={24} className="text-dark" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-none flex items-end p-6 md:hidden">
            <h2 className="text-3xl font-serif font-bold text-white">{service.title}</h2>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <h2 className="hidden md:block text-4xl font-serif font-bold text-dark mb-2">{service.title}</h2>
          <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
            {service.duration && (
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-secondary" />
                <span>{service.duration}</span>
              </div>
            )}
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="uppercase tracking-wider font-medium text-secondary">Service Premium</span>
          </div>

          <div className="prose prose-pink mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {service.fullDescription}
            </p>
          </div>

          <div className="mb-8 bg-pink-50 p-6 rounded-2xl">
            <h4 className="font-serif font-bold text-dark mb-4 text-lg">Bénéfices</h4>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-gray-700 text-sm">
                  <Check size={18} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
             <div className="text-center sm:text-left">
               <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Prendre rendez-vous</p>
               <p className="font-serif font-bold text-xl text-dark">Sur WhatsApp</p>
             </div>
             
             <a 
               href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20réserver%20${encodeURIComponent(service.title)}.`}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-secondary hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center interactive w-full sm:w-auto justify-center"
             >
               <Calendar size={18} className="mr-2" />
               Réserver
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;