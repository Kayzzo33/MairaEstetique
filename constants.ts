import { Service } from './types';

export const WHATSAPP_NUMBER = "5573988027104";

// Using Cloudinary URLs provided by the client
export const IMAGES = {
  hero: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765382963/e22250424b07c7f2801e76add8cc233a_rfjgth.jpg",
  collage: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765382964/Maira_Style_Esth%C3%A9tique_a8qu8e.png",
  about1: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765382964/SaveClip.App_286425811_130857956280872_8206727847760558906_n_klszzw.jpg",
  about2: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765382964/SaveClip.App_286230901_1178683896254839_6905546375070342052_n_x59m9d.jpg",
  about3: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765382964/SaveClip.App_287000011_183502657359221_7151422743115768882_n_zowfrh.jpg",
  // Fallbacks for generic placeholders if needed
  salon1: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b3c?q=80&w=800&auto=format&fit=crop",
  salon2: "https://images.unsplash.com/photo-1521590832169-7dad1a9b708c?q=80&w=800&auto=format&fit=crop",
  salon3: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop",
  salon4: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
};

export const PARTNER_LOGOS = {
  cherry: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765389412/cherry-lash-160231-1024x1024_ls6u2k.webp",
  nagaraku: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765389412/nagaraku-832880-1024x1024_naozpl.webp",
  decemars: "https://res.cloudinary.com/dxhlvrach/image/upload/v1765389412/decemars-158329-1024x1024_foy9w8.webp"
};

export const VIDEOS = {
    lashProcess: "https://res.cloudinary.com/dxhlvrach/video/upload/v1765382964/PinDown.io__Perfectcilios_1765375740_ieeybv.mp4",
    lashDetail: "https://res.cloudinary.com/dxhlvrach/video/upload/v1765382964/PinDown.io__vivivikyxaaa_1765375511_swh1ae.mp4"
};

export const SERVICES: Service[] = [
  {
    id: 'volume-russe',
    title: 'Extension Volume Russe',
    description: 'Volume spectaculaire et légèreté.',
    fullDescription: "La technique la plus avancée pour un regard intense et naturel. Des extensions ultra-fines appliquées en éventail pour un volume spectaculaire sans alourdir vos cils naturels. Idéal pour celles qui cherchent un effet maquillé en permanence.",
    benefits: ['Volume sur mesure', 'Tenue longue durée', 'Légèreté absolue', 'Effet liner naturel'],
    duration: '2h - 2h30',
    image: 'https://images.unsplash.com/photo-1587570472403-6c0b31046777?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'lash-lifting',
    title: 'Lash Lifting',
    description: 'Courbure naturelle et soin profond.',
    fullDescription: "Réveillez votre regard sans extensions. Un soin qui courbe et sublime vos cils naturels pour un effet mascara permanent durant 6-8 semaines. Le traitement inclut une teinture pour intensifier la couleur.",
    benefits: ['Résultat naturel', 'Soin à la kératine', 'Aucun entretien', 'Regard ouvert'],
    duration: '1h',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'brow-lamination',
    title: 'Brow Lamination',
    description: 'Sourcils disciplinés et étoffés.',
    fullDescription: "Des sourcils parfaitement dessinés et disciplinés. Cette technique révolutionnaire fixe les poils dans la direction désirée pour un résultat naturel et impeccable. Parfait pour les sourcils indisciplinés ou qui manquent de volume.",
    benefits: ['Sourcils plus fournis', 'Structure définie', 'Effet "fluffy"', 'Tenue 4-6 semaines'],
    duration: '45min',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'microblading',
    title: 'Microblading',
    description: 'Restructuration semi-permanente.',
    fullDescription: "Le maquillage semi-permanent qui redessine vos sourcils poil à poil pour un réalisme bluffant. Nous créons une forme sur mesure adaptée à votre morphologie faciale.",
    benefits: ['Effet poil à poil réaliste', 'Symétrie parfaite', 'Gain de temps le matin', 'Résultat durable (12-18 mois)'],
    duration: '2h',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'epilation-fil',
    title: 'Épilation au Fil',
    description: 'Précision extrême pour le visage.',
    fullDescription: "Une technique ancestrale permettant d'arracher le poil à la racine sans irriter la peau. Idéale pour les peaux sensibles et pour dessiner une ligne de sourcils ultra-nette.",
    benefits: ['Précision maximale', 'Peu douloureux', 'Hygiénique', 'Repousse plus lente'],
    duration: '15-30min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'soin-regard',
    title: 'Soins du Regard',
    description: 'Hydratation et anti-âge.',
    fullDescription: "Un moment de détente absolue dédié à la zone fragile du contour des yeux. Patchs hydrogel, massage drainant et sérums spécifiques pour décongestionner et illuminer.",
    benefits: ['Réduit les cernes', 'Lisse les ridules', 'Regard reposé', 'Hydratation intense'],
    duration: '45min',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Prestations', href: '#prestations' },
  { label: 'Espaces', href: '#espaces' },
  { label: 'À Propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];