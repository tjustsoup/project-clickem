/* ---- Units ---- */

export type UnitData = {
  name: string;
  resources: UnitResources;
  attributes: UnitAttributes;
  types: UnitTypes;
  display: UnitDisplay;
}

export type UnitResources = {
  health?: number;
  mana?: number;
}

export type UnitAttributes = {
  strength?: number;
  intellect?: number;
  dexterity?: number;
}

export type UnitTypes = {
  race?: RaceName;
  class?: ClassName
}

export type UnitDisplay = {
  src: string;
  bg?: string;
  height?: number;
  width?: number;
}

export type UnitAura = {
  effect: (...args: any[]) => any;
  duration: number;
}

export type RaceName = "Human" | "Goblin" | "Undead" | "Elemental";

export type ClassName = "Warrior" | "Rogue" | "Wizard" | "Cleric";

/* ---- Items ---- */

export type ItemEffects = Record<string, Function>;

export type ItemType = "Equipment" | "Consumable" | "Reagent";

export type ItemRarity = "Common" | "Rare" | "Epic";

export type Item = {
  name: string;
  type: ItemType;
  rarity: ItemRarity;
  description?: string;
  icon?: any;
  stackCount?: number;
  effects?: ItemEffects;
}

/* ---- Equipment ---- */

export type EquipmentType = "Weapon" | "Head" | "Chest" | "Legs" | "Hands" | "Trinket"

export type ItemEquipment = Item & {
  type: "Equipment";
  slot: EquipmentType;
  passives: null | Record<string, number>; // e.g. { str: 1, agi: -1 }
  stackCount?: never; // forbid stackCount on equipment (recommended)
}

/* ---- Equipment - Weapons ---- */

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

/* ---- Player Equipment ---- */

export type EquipmentSlotId = string | null;

export type WeaponSlotValue = EquipmentSlotId | true;

export type StandardSlot = Exclude<EquipmentType, "Weapon" | "Trinket">;

export type EquipmentSlots = Record<StandardSlot, EquipmentSlotId> & {
  Weapon: { Left: WeaponSlotValue; Right: WeaponSlotValue };
  Trinket: { 1: EquipmentSlotId; 2: EquipmentSlotId };
};