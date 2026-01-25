import { type ECS_Store } from "./store";

export function attack(target: string | undefined, store: ECS_Store) {
  if (!target) return 0;  // "MISS"

  const targetHealth = store.health?.[target]
  if (!targetHealth || !store.alive[target]) return 0;  // "He's dead, Jim"

  const damage = 1  // Eventually, this will be calculated based on a variety of factors

  store.updateUnitResource(target, "health", targetHealth - damage)
}
