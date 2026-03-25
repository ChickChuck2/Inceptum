export interface ChainStep {
  id: string;
  labelKey: string;
  machineKey: string;
  inputs: { id: string; nameKey: string; quantity?: number }[];
  output: { id: string; nameKey: string; quantity?: number };
}

export const BREAD_CHAIN: ChainStep[] = [
  {
    id: 'agro',
    labelKey: 'landing.production.steps.agro_label',
    machineKey: 'landing.production.machines.soil',
    inputs: [{ id: 'wheat_seed', nameKey: 'landing.wiki.items.wheat_seed.name', quantity: 1 }],
    output: { id: 'wheat', nameKey: 'landing.wiki.items.wheat.name', quantity: 1 }
  },
  {
    id: 'milling',
    labelKey: 'landing.production.steps.milling_label',
    machineKey: 'landing.wiki.items.grinder.name',
    inputs: [{ id: 'wheat', nameKey: 'landing.wiki.items.wheat.name', quantity: 1 }],
    output: { id: 'wheat_flour', nameKey: 'landing.wiki.items.wheat_flour.name', quantity: 1 }
  },
  {
    id: 'evaporation',
    labelKey: 'landing.production.steps.extraction_label',
    machineKey: 'landing.production.machines.furnace',
    inputs: [{ id: 'water_bucket', nameKey: 'landing.wiki.items.water_bucket.name', quantity: 1 }],
    output: { id: 'salt', nameKey: 'landing.wiki.items.salt.name', quantity: 1 }
  },
  {
    id: 'pre_prep',
    labelKey: 'landing.production.steps.activation_label',
    machineKey: 'landing.production.machines.manual',
    inputs: [
      { id: 'wheat_flour', nameKey: 'landing.wiki.items.wheat_flour.name', quantity: 3 },
      { id: 'water_bucket', nameKey: 'landing.wiki.items.water_bucket.name', quantity: 1 }
    ],
    output: { id: 'preferment', nameKey: 'landing.wiki.items.preferment.name', quantity: 1 }
  },
  {
    id: 'fermentation',
    labelKey: 'landing.production.steps.culture_label',
    machineKey: 'landing.wiki.items.fermentation_table.name',
    inputs: [{ id: 'preferment', nameKey: 'landing.wiki.items.preferment.name', quantity: 1 }],
    output: { id: 'yeast', nameKey: 'landing.wiki.items.yeast.name', quantity: 1 }
  },
  {
    id: 'mixing',
    labelKey: 'landing.production.steps.synthesis_label',
    machineKey: 'landing.wiki.items.workbench.name',
    inputs: [
      { id: 'wheat_flour', nameKey: 'landing.wiki.items.wheat_flour.name', quantity: 3 },
      { id: 'yeast', nameKey: 'landing.wiki.items.yeast.name', quantity: 1 },
      { id: 'water_bucket', nameKey: 'landing.wiki.items.water_bucket.name', quantity: 1 },
      { id: 'salt', nameKey: 'landing.wiki.items.salt.name', quantity: 1 }
    ],
    output: { id: 'bread_dough', nameKey: 'landing.wiki.items.bread_dough.name', quantity: 1 }
  },
  {
    id: 'baking',
    labelKey: 'landing.production.steps.thermal_label',
    machineKey: 'landing.production.machines.furnace',
    inputs: [{ id: 'bread_dough', nameKey: 'landing.wiki.items.bread_dough.name', quantity: 1 }],
    output: { id: 'bread', nameKey: 'landing.wiki.items.bread.name', quantity: 1 }
  }
];

export const WOOD_CHAIN: ChainStep[] = [
  {
    id: 'forestry',
    labelKey: 'landing.production.steps.forestry_label',
    machineKey: 'landing.production.machines.manual',
    inputs: [{ id: 'axe', nameKey: 'landing.wiki.items.axe.name', quantity: 1 }],
    output: { id: 'wood', nameKey: 'landing.wiki.items.wood.name', quantity: 5 }
  },
  {
    id: 'wood_milling',
    labelKey: 'landing.production.steps.milling_label',
    machineKey: 'landing.wiki.items.carpenter_bench.name',
    inputs: [{ id: 'wood', nameKey: 'landing.wiki.items.wood.name', quantity: 1 }],
    output: { id: 'planks', nameKey: 'landing.wiki.items.planks.name', quantity: 2 }
  }
];

export const IRON_CHAIN: ChainStep[] = [
  {
    id: 'mining',
    labelKey: 'landing.production.steps.extraction_label',
    machineKey: 'landing.production.machines.manual',
    inputs: [{ id: 'pickaxe', nameKey: 'landing.wiki.items.pickaxe.name', quantity: 1 }],
    output: { id: 'iron_ore', nameKey: 'landing.wiki.items.iron_ore.name', quantity: 1 }
  },
  {
    id: 'smelting',
    labelKey: 'landing.production.steps.thermal_label',
    machineKey: 'landing.wiki.items.forge.name',
    inputs: [
      { id: 'iron_ore', nameKey: 'landing.wiki.items.iron_ore.name', quantity: 2 },
      { id: 'coal', nameKey: 'landing.wiki.items.coal.name', quantity: 1 }
    ],
    output: { id: 'iron_ingot', nameKey: 'landing.wiki.items.iron_ingot.name', quantity: 1 }
  }
];
