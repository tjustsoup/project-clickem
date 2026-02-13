import { PlayerTemplate } from "../player-store";
import { applyDeepPatch, DeepPartial } from "../../utils";

type ClassTemplate = Omit<PlayerTemplate, "name">

const defaultClass: ClassTemplate = {
  className: "",
  attributes: {
    strength: 2,
    dexterity: 2,
    intellect: 2
  },
  resources: {
    health: 20
  },
  equipment: {
    "Head": null,
    "Chest": null,
    "Hands": null,
    "Legs": null,
    "Weapon": { "Left": null, "Right": null },
    "Trinket": { 1: null, 2: null },
  }
}

function makeClass(props: DeepPartial<ClassTemplate>): ClassTemplate {
  return applyDeepPatch<ClassTemplate>(defaultClass, props)
}

export const classes: Record<string, ClassTemplate> = {
  "CL001": makeClass({
    className: "Warrior",
    attributes: {
      strength: 6,
      dexterity: 4
    },
    equipment: {
      "Weapon": {
        "Left": "W0001",
        "Right": null,
      }
    }
  }),

  "CL002": makeClass({
    className: "Mage",
    attributes: {
      intellect: 6,
      dexterity: 4
    },
    resources: {
      mana: 20,
    },
    equipment: {
      "Weapon": {
        "Left": "W0002",
        "Right": true,
      }
    }
  }),

  "CL003": makeClass({
    className: "Rogue",
    attributes: {
      dexterity: 6,
      strength: 4
    },
    equipment: {
      "Weapon": {
        "Left": "W0003",
        "Right": null,
      }
    }
  }),
}

export function getClass(id: string): ClassTemplate | null {
  return (id in classes)
    ? classes[id]
    : null
}