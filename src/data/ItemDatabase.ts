/**
 * INCEPTUM OFFICIAL ITEM DATABASE
 * Data 100% synchronized with B:\UnityProjets\SurvivorIO\Assets\Scripts\ResourcesManager.cs
 */

export interface Item {
  name: string;
  type: 'Food' | 'Tool' | 'Resource' | 'Machine' | 'Block';
  description: string;
  image?: string;
  stats?: {
    regen?: number;
    hunger?: number;
    energy?: number;
  };
  recipe?: Record<string, number>;
}

export const ItemDatabase: Record<string, Item> = {
  // --- FOOD ---
  'Apple': {
    name: 'Maçã',
    type: 'Food',
    description: 'Uma linda maçã. Pode ser consumida ou usada para atrair animais.',
    image: '/assets/items/apple.png',
    stats: { regen: 2, hunger: 7, energy: 4 }
  },
  'Plum': {
    name: 'Ameixa',
    type: 'Food',
    description: 'Ameixa silvestre colhida de árvores frutíferas no bioma de floresta.',
    image: '/assets/items/plum.png',
    stats: { regen: 1, hunger: 5, energy: 3 }
  },
  'Grapes': {
    name: 'Cacho de Uva',
    type: 'Food',
    description: 'Uvas frescas e suculentas, perfeitas para um lanche rápido.',
    image: '/assets/items/grapes.png',
    stats: { regen: 0.7, hunger: 3, energy: 2 }
  },
  'Bread': {
    name: 'Pão Francês',
    type: 'Food',
    description: 'Assado artesanalmente em fornos de pedra.',
    image: '/assets/items/bread.png',
    stats: { regen: 5, hunger: 20, energy: 10 }
  },
  'Bacon_Raw': {
    name: 'Bacon Cru',
    type: 'Food',
    description: 'Pedaço de toucinho de porco. Recomenda-se cozinhar.',
    image: '/assets/items/raw_bacon.png',
    stats: { regen: -2, hunger: 8, energy: 12 }
  },

  // --- TOOLS ---
  'StoneAxe': {
    name: 'Machado',
    type: 'Tool',
    description: 'Ferramenta de corte essencial para extrair madeira.',
    image: '/assets/items/axe.png',
    recipe: { 'Graveto': 5, 'Pedra': 5, 'Corda': 1 }
  },
  'StonePickaxe': {
    name: 'Picareta',
    type: 'Tool',
    description: 'Essencial para minerar pedras e minérios brutos.',
    image: '/assets/items/pickaxe.png',
    recipe: { 'Graveto': 5, 'Pedra': 10, 'Corda': 1 }
  },

  // --- RESOURCES ---
  'IronOre': {
    name: 'Minério de Ferro',
    type: 'Resource',
    description: 'Minério bruto extraído de depósitos rochosos.',
    image: '/assets/items/iron_ore.png',
  },
  'IronBar': {
    name: 'Lingote de Ferro',
    type: 'Resource',
    description: 'Metal refinado para construção e ferramentas avançadas.',
    image: '/assets/items/iron_ingot.png',
  },
  'Planks': {
    name: 'Tábuas de Madeira',
    type: 'Resource',
    description: 'Madeira processada na mesa de carpinteiro.',
    image: '/assets/items/planks.png',
  },

  // --- MACHINES ---
  'CarpenterBench': {
    name: 'Mesa de Carpinteiro',
    type: 'Machine',
    description: 'Processa troncos brutos em tábuas e hastes.',
    image: '/assets/items/carpenter_bench.png',
    recipe: { 'Graveto': 17, 'Madeira': 8 }
  },
  'Grinder': {
    name: 'Moedor',
    type: 'Machine',
    description: 'Utilizado para moer grãos e minérios macios.',
    image: '/assets/items/grinder.png',
    recipe: { 'Pedra': 20, 'Lingote': 2 }
  }
};

export const EntityDatabase = {
  'Wolf': {
    name: 'Lobo',
    behavior: 'Predador Noturno',
    lifecycle: 'Caça em matilhas durante a lua cheia.'
  },
  'Cow': {
    name: 'Vaca',
    behavior: 'Passivo',
    lifecycle: 'Fornece leite e carne se bem alimentada.'
  }
};
