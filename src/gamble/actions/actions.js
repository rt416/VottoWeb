/* @flow */
export const GAMBLE = 'GAMBLE';
export const SIMULATE_PURCHASE = 'SIMULATE_PURCHASE';

export function gamble(gamblerName: string, winDiscount: number, loseDiscount: number) {
  return { type: GAMBLE, gamblerName, winDiscount, loseDiscount };
}

export function simulatePurchase() {
  return { type: SIMULATE_PURCHASE };
}
