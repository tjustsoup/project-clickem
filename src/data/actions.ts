import { type ECS_Store } from "./store";
import { getWeapon } from "./assets";
import { getRandomInt } from "./helper-functions";

export function attack(target: string | undefined, store: ECS_Store) {
  if (!target) return 0;  // "MISS"

  const targetHealth = store.health?.[target]
  if (!targetHealth || !store.alive[target]) return 0;  // "He's dead, Jim"

  const damage = 1  // Eventually, this will be calculated based on a variety of factors

  store.updateUnitResource(target, "health", targetHealth - damage)
}

export function weaponAttack(weaponId: string, refId: string, store: ECS_Store) {
  const w = getWeapon(weaponId)

  if (!w) return undefined;

  // store.triggerCooldown(refId,)
  const damage = getRandomInt(w.damage[1], w.damage[0])
  w.speed
}

export function takeHit() {

}

export function applyDamage() {

}
