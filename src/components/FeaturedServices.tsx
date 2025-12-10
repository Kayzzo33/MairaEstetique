import React from 'react';
import { Service } from '../../types';
import { SERVICES } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedServicesProps {
  openModal: (service: Service) => void;
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ openModal }) => {
  const featured = SERVICES.slice(0, 3); // Take first 3 for highlight

  return (
    <section id="prestations" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-2">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark">Nos Prestations Phares</h2>
          </div>
          <a href="#all-services" className="hidden md:flex items-center space-x-2 text-dark border-b border-dark pb-1 hover:text-secondary hover:border-secondary transition-colors interactive">
            <span>Voir tout</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">
            {featured.map((service, index) => (
              <div 
                key={service.id}
                onClick={() => openModal(service)}
                className="interactive group bg-[#FAFAFA] hover:bg-pink-light p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg border border-transparent hover:border-pink-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500" />
                
                <h3 className="text-2xl font-serif font-semibold text-dark mb-2 group-hover:text-secondary transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm relative z-10">{service.description}</p>
                <div className="flex items-center text-sm font-medium text-dark group-hover:text-secondary relative z-10">
                  <span>En savoir plus</span>
                  <ArrowUpRight size={16} className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Large Image */}
          <div className="lg:col-span-7 h-[500px] lg:h-auto relative rounded-3xl overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
             {/* Client Image: Procedures Collage */}
             <img 
              src="https://drive.google.com/uc?export=view&id=1qM35WBbw_PzP8ux6duzKvyzg6t1s-Ayi" 
              alt="Maira Olliver Prestations" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl max-w-xs">
               <p className="font-script text-2xl text-secondary mb-1">Résultats</p>
               <p className="text-sm text-gray-700">Découvrez l'avant/après de nos clientes satisfaites.</p>
             </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none -z-10" />
    </section>
  );
};

export default FeaturedServices;