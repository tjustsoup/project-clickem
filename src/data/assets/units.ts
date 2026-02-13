import { UnitData } from "../types";

export const units: Record<string, UnitData> = {
  "U0001": {
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
  "U0002": {
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
  "U0003": {
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
  "U0004": {
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

export function getUnit(id: string): UnitData | null {
  return (id in units)
    ? units[id]
    : null
}