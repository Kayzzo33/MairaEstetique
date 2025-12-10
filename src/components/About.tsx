import React from 'react';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-pink-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">À Propos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2">La Passion du Naturel</h2>
        </div>

        <div className="space-y-24">
          
          {/* Block 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-secondary/30 rounded-2xl group-hover:top-2 group-hover:-left-2 transition-all duration-300" />
              <img 
                src="https://images.unsplash.com/photo-1519699047748-40baea614fda?q=80&w=800&auto=format&fit=crop" 
                alt="Professional Portrait" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="text-3xl font-serif font-bold text-dark mb-4">L'Expertise au Service du Regard</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Spécialiste en extensions de cils et soins du regard, j'ai consacré ma carrière à perfectionner 
                des techniques qui respectent l'intégrité de vos cils naturels tout en les magnifiant.
              </p>
              <div className="flex items-center space-x-2 text-secondary font-medium">
                <Star className="fill-current" size={20} />
                <span>Certifiée Expert Lash Artist</span>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-2xl -z-10 group-hover:bg-secondary/20 transition-colors" />
              <img 
                src="https://images.unsplash.com/photo-1487412947132-23223f7d5727?q=80&w=800&auto=format&fit=crop" 
                alt="Working" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-8 text-right md:text-left">
              <h3 className="text-3xl font-serif font-bold text-dark mb-4">Ma Philosophie</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                "Je crois fermement que la beauté réside dans les détails. Mon objectif n'est pas de vous transformer, 
                mais de révéler la lumière qui est déjà en vous, sans artifice excessif."
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chaque pose est unique, étudiée selon la morphologie de votre visage et la santé de vos cils.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;