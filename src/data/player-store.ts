import { create } from "zustand"
import { EquipmentSlotRef, EquipmentSlots, UnitAttributes, UnitAura, UnitResources } from "./types";
import { getWeapon } from "./assets";

export type PlayerTemplate = {
  name: string | null;
  className: string | null;
  attributes: UnitAttributes;
  resources: UnitResources;
  equipment: EquipmentSlots;
}

export type ActionNames = "mousedown.left" | "mouseup.left" | "mousedown.right" | "mouseup.right";

export type Player_Store = PlayerTemplate & {
  auras: Array<UnitAura>;
  startCharacter: (template: Partial<Player_Store>) => void;
  equip: (item: string, slot: EquipmentSlotRef) => void;
}

export const usePlayer = create<Player_Store>((set, get) => ({
  name: null,
  className: null,
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
  startCharacter: (template) => set(template),
  equip(item: any, slot: any) {

  }
}))