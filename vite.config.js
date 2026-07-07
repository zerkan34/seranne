import banner from './assets/pieces/banner.jpg';
import bureau from './assets/pieces/bureau.jpg';
import clavier from './assets/pieces/clavier.jpg';
import souris from './assets/pieces/souris.jpg';
import ecritoire from './assets/pieces/ecritoire.jpg';
import ecrin from './assets/pieces/ecrin.jpg';
import gravure from './assets/pieces/gravure.jpg';

export const images = { banner, bureau, clavier, souris, ecritoire, ecrin, gravure };

export const pieces = [
  {
    id: 'bureau',
    num: '002',
    label: 'Pièce unique',
    name: 'Bureau',
    article: 'Le',
    img: bureau,
    desc: "Plateau monolithe sur piètement de laiton brossé. Clavier, souris et signature intégrés dans la masse. La tagline gravée à l'or sur la tranche, comme un colophon de livre.",
    specs: [
      ['Matière', 'Carrare statuaire'],
      ['Édition', 'Pièce unique'],
      ['Dimensions', '1600 × 700 × 740 mm'],
      ['Délai', '10–14 semaines'],
      ['Piètement', 'Laiton brossé'],
      ['Prix', 'Sur demande'],
    ],
    bleed: true,
  },
  {
    id: 'clavier',
    num: '003',
    label: 'Instrument · /50',
    name: 'Clavier',
    article: 'Le',
    img: clavier,
    desc: "Chaque touche est révélée au ciseau dans un seul bloc. Les légendes sont incrustées à la feuille d'or. Encastré au plateau du Bureau ou présenté seul dans son écrin.",
    specs: [
      ['Matière', 'Marbre statuaire'],
      ['Édition', 'Numérotée /50'],
      ['Légendes', "Feuille d'or 24 ct"],
      ['Délai', '8–10 semaines'],
      ['Touches', 'Taillées une à une'],
      ['Prix', 'À partir de 4 200 €'],
    ],
  },
  {
    id: 'souris',
    num: '004',
    label: 'Instrument · /80',
    name: 'Souris',
    article: 'La',
    img: souris,
    desc: "Coque de marbre poli miroir, cerclée d'un liseré de laiton, molette dorée. Lestée, silencieuse, façonnée comme un galet précieux.",
    specs: [
      ['Matière', 'Carrare'],
      ['Édition', 'Numérotée /80'],
      ['Liseré', 'Laiton doré'],
      ['Délai', '6 semaines'],
      ['Finition', 'Poli miroir'],
      ['Prix', 'À partir de 1 600 €'],
    ],
  },
  {
    id: 'ecritoire',
    num: '005',
    label: 'Porte-plume · /120',
    name: 'Écritoire',
    article: "L'",
    img: ecritoire,
    desc: "Godet de marbre taillé d'un seul bloc, arête vive, et son stylo plaqué or. Poids, fraîcheur, silence — l'essentiel du bureau réduit à une stèle.",
    specs: [
      ['Matière', 'Carrare'],
      ['Édition', 'Numérotée /120'],
      ['Stylo', 'Laiton plaqué or'],
      ['Délai', '6 semaines'],
      ['Dimensions', '80 × 80 × 110 mm'],
      ['Prix', 'À partir de 890 €'],
    ],
  },
  {
    id: 'ecrin',
    num: '006',
    label: 'Inclus',
    name: 'Écrin',
    article: "L'",
    img: ecrin,
    desc: "Coffret de présentation en marbre véritable, gravure dorée « Séranne · Paris » et référence d'édition. Scellé du monogramme de la maison.",
    specs: [
      ['Matière', 'Marbre véritable'],
      ['Référence', '43.17.218 · E2,5 · E'],
      ['Gravure', 'Or 24 ct'],
      ['Délai', 'Inclus'],
    ],
  },
];
