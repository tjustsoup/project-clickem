import { UnitData } from "../types";

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