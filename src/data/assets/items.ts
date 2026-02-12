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
