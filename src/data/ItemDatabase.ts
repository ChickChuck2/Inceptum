/**
 * INCEPTUM OFFICIAL ITEM DATABASE
 * Data 100% synchronized with B:\UnityProjets\SurvivorIO\Assets\Scripts\ResourcesManager.cs
 */

export interface Item {
  id: string;
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
    id: 'apple',
    name: 'Maçã',
    type: 'Food',
    description: 'Uma linda maçã. Pode ser consumida ou usada para atrair animais.',
    image: 'assets/items/apple.png',
    stats: { regen: 2, hunger: 7, energy: 4 }
  },
  'Plum': {
    id: 'plum',
    name: 'Ameixa',
    type: 'Food',
    description: 'Ameixa silvestre colhida de árvores frutíferas no bioma de floresta.',
    image: 'assets/items/plum.png',
    stats: { regen: 1, hunger: 5, energy: 3 }
  },
  'Grapes': {
    id: 'grapes',
    name: 'Cacho de Uva',
    type: 'Food',
    description: 'Uvas frescas e suculentas, perfeitas para um lanche rápido.',
    image: 'assets/items/grapes.png',
    stats: { regen: 0.7, hunger: 3, energy: 2 }
  },
  'Orange': {
    id: 'orange',
    name: 'Laranja',
    type: 'Food',
    description: 'Isso daria um suco de laranja bem relaxante...',
    image: 'assets/items/orange.png',
    stats: { regen: 3, hunger: 7, energy: 6 }
  },
  'Bread': {
    id: 'bread',
    name: 'Pão Francês',
    type: 'Food',
    description: 'Assado artesanalmente em fornos de pedra.',
    image: 'assets/items/bread.png',
    stats: { regen: 5, hunger: 20, energy: 10 }
  },
  'Bacon_Raw': {
    id: 'raw_bacon',
    name: 'Bacon Cru',
    type: 'Food',
    description: 'Pedaço de toucinho de porco. Recomenda-se cozinhar.',
    image: 'assets/items/raw_bacon.png',
    stats: { regen: -2, hunger: 8, energy: 12 }
  },
  'Coconut_Dry': {
    id: 'coconut_dry',
    name: 'Coco Seco',
    type: 'Food',
    description: 'Uma casca dura que guarda um sabor rico e versátil.',
    image: 'assets/items/coconut_dry.png',
    stats: { regen: 1, hunger: 5, energy: 3 }
  },
  'Coconut_Green': {
    id: 'coconut_green',
    name: 'Coco Verde',
    type: 'Food',
    description: 'Uma cápsula natural de refrescância.',
    image: 'assets/items/coconut_green.png',
    stats: { regen: 3, hunger: 10, energy: 5 }
  },
  'Coconut_Pulp': {
    id: 'coconut_pulp',
    name: 'Polpa de Coco',
    type: 'Food',
    description: 'A parte mais doce e cremosa do coco.',
    image: 'assets/items/coconut_pulp.png',
    stats: { regen: 7, hunger: 22, energy: 6 }
  },
  'Minced_Meat': {
    id: 'minced_meat',
    name: 'Carne Moída',
    type: 'Food',
    description: 'Carne fresca moída.',
    image: 'assets/items/minced_meat.png',
    stats: { regen: -7, hunger: 0, energy: 1 }
  },

  // --- TOOLS ---
  'StoneAxe': {
    id: 'axe',
    name: 'Machado',
    type: 'Tool',
    description: 'Ferramenta de corte essencial para extrair madeira.',
    image: 'assets/items/axe.png',
    recipe: { 'Stick': 5, 'Stone': 5, 'Rope': 1 }
  },
  'StonePickaxe': {
    id: 'pickaxe',
    name: 'Picareta',
    type: 'Tool',
    description: 'Essencial para minerar pedras e minérios brutos.',
    image: 'assets/items/pickaxe.png',
    recipe: { 'Stick': 5, 'Stone': 10, 'Rope': 1 }
  },
  'StoneSword': {
    id: 'stone_sword',
    name: 'Espada de Pedra',
    type: 'Tool',
    description: 'Uma espada básica primitiva.',
    image: 'assets/items/stone_sword.png',
    recipe: { 'Stick': 2, 'Stone': 15 }
  },
  'FishingRod': {
    id: 'fishing_rod',
    name: 'Vara de Pesca',
    type: 'Tool',
    description: 'Uma vara de pesca básica primitiva.',
    image: 'assets/items/fishing_rod.png',
    recipe: { 'Stick': 3, 'Vine': 2 }
  },

  // --- RESOURCES ---
  'IronOre': {
    id: 'iron_ore',
    name: 'Minério de Ferro',
    type: 'Resource',
    description: 'Minério bruto extraído de depósitos rochosos.',
    image: 'assets/items/iron_ore.png',
  },
  'IronBar': {
    id: 'iron_ingot',
    name: 'Lingote de Ferro',
    type: 'Resource',
    description: 'Metal refinado para construção e ferramentas avançadas.',
    image: 'assets/items/iron_ingot.png',
  },
  'Planks': {
    id: 'planks',
    name: 'Tábuas de Madeira',
    type: 'Resource',
    description: 'Madeira processada na mesa de carpinteiro.',
    image: 'assets/items/planks.png',
  },
  'Wooden_Rod': {
    id: 'wooden_rod',
    name: 'Haste de Madeira',
    type: 'Resource',
    description: 'Um haste de madeira para criação de Ferramentas avançadas.',
    image: 'assets/items/wooden_rod.png',
  },
  'Wheat_Flour': {
    id: 'wheat_flour',
    name: 'Farinha de Trigo',
    type: 'Resource',
    description: 'Farinha de trigo.',
    image: 'assets/items/wheat_flour.png',
  },
  'Yeast': {
    id: 'yeast',
    name: 'Fermento',
    type: 'Resource',
    description: 'Fermento.',
    image: 'assets/items/yeast.png',
  },

  // --- MACHINES ---
  'CarpenterBench': {
    id: 'carpenter_bench',
    name: 'Mesa de Carpinteiro',
    type: 'Machine',
    description: 'Processa troncos brutos em tábuas e hastes.',
    image: 'assets/items/carpenter_bench.png',
    recipe: { 'Stick': 17, 'Wood': 8 }
  },
  'Grinder': {
    id: 'grinder',
    name: 'Moedor',
    type: 'Machine',
    description: 'Utilizado para moer grãos e minérios macios.',
    image: 'assets/items/grinder.png',
    recipe: { 'Stone': 20, 'IronBar': 2 }
  },
  'Forge': {
    id: 'forge',
    name: 'Forja',
    type: 'Machine',
    description: 'Forja para fundição de metais e criação de itens avançados',
    image: 'assets/items/forge.png',
    recipe: { 'Stone': 30, 'IronBar': 5, 'Coal': 10 }
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
