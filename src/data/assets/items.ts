/* Items */
export type ItemEffects = Record<string, Function>;

export type ItemType = "Equipment" | "Consumable" | "Reagent";

export type ItemRarity = "Common" | "Rare" | "Epic";

export type Item = {
  id: string;
  name: string;
  type: ItemType;
  rarity: ItemRarity;
  description?: string;
  icon?: any;
  stackCount?: number;
  effects?: ItemEffects;
}

/* Equipment */
export type EquipmentType = "Weapon" | "Head" | "Chest" | "Legs" | "Hands" | "Trinket"

export type ItemEquipment = Item & {
  type: "Equipment";
  slot: EquipmentType;
  passives: null | Record<string, number>; // e.g. { str: 1, agi: -1 }
  stackCount?: never; // forbid stackCount on equipment (recommended)
}

/* Equipment - Weapons */
/**
 * @property *damage* - A range between minimum and maximum
 * @property *speed* - The time in ms allowed between attacks (lower === faster)
 * @property *handed* - How many weapon slots this takes up (1-handed vs 2-handed)
 */
export type ItemEquipmentWeapon = ItemEquipment & {
  slot: "Weapon";
  damage: [number, number];
  speed: number;
  handed: 1 | 2;
}

function weapon(input:
  Omit<ItemEquipmentWeapon, "type" | "slot" | "stackCount" | "passives"> & {
    passives?: null | Record<string, number>;
  }
): ItemEquipmentWeapon {
  return {
    type: "Equipment",
    slot: "Weapon",
    ...input,            // allow caller to override passives/rarity/etc
    passives: input.passives ?? null,      // default you can override
  };
}

/* Data */
export const ItemRarityColors: Record<ItemRarity, string> = {
  "Common": "#f2f2f2",
  "Rare": "#32a852",
  "Epic": "#146acc",
}

export const weapons: ItemEquipmentWeapon[] = [
  weapon({
    id: "W-0001",
    name: "Rusty Sword",
    rarity: "Common",
    damage: [1, 3],
    speed: 2000,
    handed: 2,
    passives: { str: 1 },
  }),

  weapon({
    id: "W-0002",
    name: "Oak Staff",
    rarity: "Rare",
    damage: [2, 5],
    speed: 2500,
    handed: 2,
  }),

  weapon({
    id: "W-0003",
    name: "Bronze Dagger",
    rarity: "Common",
    damage: [0, 1],
    speed: 1000,
    handed: 1,
  }),
]
