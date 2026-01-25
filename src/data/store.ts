import { create } from "zustand";
import { UnitResources, units } from "./units";
import { v7 as uuidv7 } from "uuid";
import { ObjectEntriesTyped } from "./helper-functions";

type ResourceMap<T extends object> = {
  [K in keyof T]: Record<string, T[K]>
}

export type ResourceComponents = ResourceMap<UnitResources>

export type ECS_Store = {
  units: Record<string, string>; // key = refId, value = unitId
  alive: Record<string, boolean>;
  spawnUnit: (unitId: string) => void;
  updateUnitResource: (refId: string, resource: keyof ResourceComponents, value: any) => void;
}
  & ResourceComponents;

export const useECS = create<ECS_Store>((set, get) => ({
  units: {},
  alive: {},
  spawnUnit(unitId) {
    // Get the unit data from "units" given a unitId
    const u = units[unitId]
    if (!u) throw Error(`Unit with id "${unitId}" could not be found`);

    const id = `unit_${uuidv7()}`

    set(s => {
      // Add new unit to "units" (entities)
      const res = {
        ...s,
        units: { ...s.units, [id]: unitId },
        alive: { ...s.alive, [id]: true }
      }

      // Instantiate the "resources" (components)
      ObjectEntriesTyped(u.resources).forEach(([k, v]) => {
        if (!(k in res)) {
          res[k] = { [id]: v }
        } else {
          res[k] = { ...res[k], [id]: v }
        }
      })

      return res
    })
  },

  updateUnitResource(refId, resource, value) {
    // Ensure all values passed into the function are valid and active in the current state
    const state = get()
    if (!(refId in state.units)) throw Error(`Unit with refId "${refId}" could not be found in the current state`);
    if (!(resource in state) || state[resource] === undefined) throw Error(`Resource with name "${resource}" could not be found in the current state`);
    if (!(refId in state[resource])) throw Error(`Unit with refId "${refId}" could not be found on the resource "${resource}"`);

    if (resource === "health" && value <= 0) {
      // Handle "death" event
      set(s => {
        let res = { ...s }
        delete res?.[resource]?.[refId]
        return { ...res, alive: { ...res.alive, [refId]: false } }
      })
    } else {
      // Update resource
      set(s => ({
        [resource]: {
          ...s[resource],
          [refId]: value > 0 ? value : 0
        }
      }))
    }
  }
}))