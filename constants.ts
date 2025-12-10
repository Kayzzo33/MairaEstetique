import { Service } from './types';

export const WHATSAPP_NUMBER = "5573988027104";

export const SERVICES: Service[] = [
  {
    id: 'volume-russe',
    title: 'Extension Volume Russe',
    description: 'Volume spectaculaire et légèreté.',
    fullDescription: "La technique la plus avancée pour un regard intense et naturel. Des extensions ultra-fines appliquées en éventail pour un volume spectaculaire sans alourdir vos cils naturels. Idéal pour celles qui cherchent un effet maquillé en permanence.",
    benefits: ['Volume sur mesure', 'Tenue longue durée', 'Légèreté absolue', 'Effet liner naturel'],
    duration: '2h - 2h30',
    image: 'https://images.unsplash.com/photo-1587570472403-6c0b31046777?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'lash-lifting',
    title: 'Lash Lifting',
    description: 'Courbure naturelle et soin profond.',
    fullDescription: "Réveillez votre regard sans extensions. Un soin qui courbe et sublime vos cils naturels pour un effet mascara permanent durant 6-8 semaines. Le traitement inclut une teinture pour intensifier la couleur.",
    benefits: ['Résultat naturel', 'Soin à la kératine', 'Aucun entretien', 'Regard ouvert'],
    duration: '1h',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'brow-lamination',
    title: 'Brow Lamination',
    description: 'Sourcils disciplinés et étoffés.',
    fullDescription: "Des sourcils parfaitement dessinés et disciplinés. Cette technique révolutionnaire fixe les poils dans la direction désirée pour un résultat naturel et impeccable. Parfait pour les sourcils indisciplinés ou qui manquent de volume.",
    benefits: ['Sourcils plus fournis', 'Structure définie', 'Effet "fluffy"', 'Tenue 4-6 semaines'],
    duration: '45min',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'microblading',
    title: 'Microblading',
    description: 'Restructuration semi-permanente.',
    fullDescription: "Le maquillage semi-permanent qui redessine vos sourcils poil à poil pour un réalisme bluffant. Nous créons une forme sur mesure adaptée à votre morphologie faciale.",
    benefits: ['Effet poil à poil réaliste', 'Symétrie parfaite', 'Gain de temps le matin', 'Résultat durable (12-18 mois)'],
    duration: '2h',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'epilation-fil',
    title: 'Épilation au Fil',
    description: 'Précision extrême pour le visage.',
    fullDescription: "Une technique ancestrale permettant d'arracher le poil à la racine sans irriter la peau. Idéale pour les peaux sensibles et pour dessiner une ligne de sourcils ultra-nette.",
    benefits: ['Précision maximale', 'Peu douloureux', 'Hygiénique', 'Repousse plus lente'],
    duration: '15-30min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'soin-regard',
    title: 'Soins du Regard',
    description: 'Hydratation et anti-âge.',
    fullDescription: "Un moment de détente absolue dédié à la zone fragile du contour des yeux. Patchs hydrogel, massage drainant et sérums spécifiques pour décongestionner et illuminer.",
    benefits: ['Réduit les cernes', 'Lisse les ridules', 'Regard reposé', 'Hydratation intense'],
    duration: '45min',
    image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1000&auto=format&fit=crop',
  }
];

export const PARTNERS = [
  'Cherry Lash', 'DeceMars', 'Nagaraku', 'Dolly\'s Lash', 
  'BL Lashes', 'Lash Affair', 'Neicha', 'Glad Lash', 'Elleebana'
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Prestations', href: '#prestations' },
  { label: 'Espaces', href: '#espaces' },
  { label: 'À Propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];