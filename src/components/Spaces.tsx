import React from 'react';
import { MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Spaces: React.FC = () => {
  return (
    <section id="espaces" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Le Salon</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2">Nos Espaces de Beauté</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Un espace chaleureux et raffiné, conçu pour votre confort et votre bien-être absolu.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1521590832169-7dad1a9b708c?q=80&w=800&auto=format&fit=crop" 
                alt="Salon detail 1" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b3c?q=80&w=800&auto=format&fit=crop" 
                alt="Salon detail 2" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop" 
                alt="Salon detail 3" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=800&auto=format&fit=crop" 
                alt="Salon detail 4" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Info Content */}
          <div className="lg:pl-12 space-y-8">
             <div className="bg-pink-50/50 p-8 rounded-3xl border border-pink-100">
               <h3 className="text-2xl font-serif font-bold text-dark mb-4">Maira Olliver Esthétique</h3>
               <div className="flex items-start space-x-4 mb-6">
                 <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-gray-800 font-medium">95320 Saint-Leu-la-Forêt</p>
                   <p className="text-gray-500 text-sm">Île-de-France, France</p>
                 </div>
               </div>
               
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Venez découvrir un lieu dédié à la beauté de votre regard. 
                 Nous utilisons des équipements de pointe dans une atmosphère relaxante 
                 pour garantir les meilleurs résultats.
               </p>

               <a 
                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20prendre%20rendez-vous.`}
                 className="inline-block bg-dark text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors duration-300 shadow-lg interactive"
               >
                 Prendre Rendez-vous
               </a>
             </div>
          </div>

        </div>
      </div>
      
      {/* Background Shape */}
      <svg className="absolute bottom-0 left-0 w-full h-auto text-pink-50 fill-current -z-10" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default Spaces;