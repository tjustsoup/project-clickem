import { ItemEquipmentWeapon, ItemRarity } from "../types";

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

export const weapons: Record<string, ItemEquipmentWeapon> = {
  "W0001": weapon({
    name: "Rusty Sword",
    rarity: "Common",
    damage: [1, 3],
    speed: 2000,
    handed: 2,
    passives: { str: 1 },
  }),
  "W0002": weapon({
    name: "Oak Staff",
    rarity: "Rare",
    damage: [2, 5],
    speed: 2500,
    handed: 2,
  }),
  "W0003": weapon({
    name: "Bronze Dagger",
    rarity: "Common",
    damage: [0, 1],
    speed: 1000,
    handed: 1,
  }),
}

export function getWeapon(id: string): ItemEquipmentWeapon | null {
  return (id in weapons)
    ? weapons[id]
    : null
}