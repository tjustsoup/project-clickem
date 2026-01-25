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

export type RaceName = "Human" | "Goblin" | "Undead" | "Elemental";

export type ClassName = "Warrior" | "Rogue" | "Wizard" | "Cleric";

export const units: Record<string, UnitData> = {
  "0001": {
    name: "Skeleton Soldier",
    resources: {
      health: 20,
    },
    attributes: {},
    types: {
      race: "Undead",
      class: "Warrior"
    },
    display: {
      src: "Skeleton.png"
    },
  },
  "0002": {
    name: "Skeleton Magus",
    resources: {
      health: 20,
    },
    attributes: {},
    types: {
      race: "Undead",
      class: "Wizard"
    },
    display: {
      src: "SkeletonWizard.png"
    },
  },
  "0003": {
    name: "Goblin Thief",
    resources: {
      health: 30
    },
    attributes: {},
    types: {
      race: "Goblin",
      class: "Rogue"
    },
    display: {
      src: "GoblinThief.png"
    },
  },
  "0004": {
    name: "Goblin Berserker",
    resources: {
      health: 30
    },
    attributes: {},
    types: {
      race: "Goblin",
      class: "Warrior"
    },
    display: {
      src: "Goblin.png"
    },
  },
}