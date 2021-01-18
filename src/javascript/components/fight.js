import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  console.log(firstFighter, secondFighter);
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    resolve (firstFighter);
  });
}

export function getDamage(attacker, defender) {
  const damage = getHitPower(attacker) - getBlockPower(defender);
  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
  // return hit power
  return fighter.attack * (Math.random() + 1);
}

export function getBlockPower(fighter) {
  // return block power
  return fighter.defense * (Math.random() + 1);
}
