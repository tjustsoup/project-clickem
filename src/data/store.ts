import { create } from "zustand";
import { units } from "./units";
import { v7 as uuidv7 } from "uuid";

type ECS_Store = {
  units: Record<string, string>; // key = refId, value = unitId
  health: Record<string, number>;
  spawnUnit: (unitId: string) => void;
}

export const useECS = create<ECS_Store>((set, get) => ({
  units: {},
  team: {},
  health: {},
  spawnUnit(unitId) {
    const u = units[unitId]
    if (!u) throw Error(`Unit with id ${unitId} could not be found`);

    const id = uuidv7()

    set(s => {
      const res = {
        ...s,
        units: { ...s.units, [id]: unitId }
      }

      Object.entries(u.resources).forEach(([k, v]) => {
        // dawg what am I doing
      })

      return res
    })
  },
}))