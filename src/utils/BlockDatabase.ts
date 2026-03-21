export interface BlockTier {
  level: number;
  name: string;
  hp: number;
  durability: number;
  material: string;
}

export const BlockDatabase: BlockTier[] = [
  { level: 1, name: "Primitivo", hp: 100, durability: 50, material: "Palha/Terra" },
  { level: 2, name: "Madeira", hp: 250, durability: 120, material: "Tábuas" },
  { level: 3, name: "Pedra", hp: 600, durability: 300, material: "Pedra/Barro" },
  { level: 4, name: "Tijolo", hp: 1200, durability: 600, material: "Argila Cozida" },
  { level: 5, name: "Ferro", hp: 2500, durability: 1500, material: "Placas de Ferro" },
  { level: 6, name: "Aço", hp: 5000, durability: 3000, material: "Aço Refinado" },
  { level: 7, name: "Fortificado", hp: 10000, durability: 8000, material: "Liga de Carbono" },
];
