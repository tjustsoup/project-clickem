import { create } from "zustand"
import { EquipmentSlots, UnitAttributes, UnitResources } from "./types";

export type Player_Store = {
  name: string | null;
  attributes: UnitAttributes;
  resources: UnitResources;
  equipment: EquipmentSlots;
  auras: Array<(...args: any[]) => any>;
  startCharacter: (template: Partial<Player_Store>) => void;
}

export const usePlayer = create<Player_Store>((set, get) => ({
  name: null,
  attributes: {
    strength: 0,
    intellect: 0,
    dexterity: 0
  },
  resources: {
    health: 0
  },
  equipment: {
    "Head": null,
    "Chest": null,
    "Hands": null,
    "Legs": null,
    "Weapon": {
      "Left": null,
      "Right": null,
    },
    "Trinket": {
      "1": null,
      "2": null,
    }
  },
  auras: [],
  startCharacter: (template) => set(template)
}))