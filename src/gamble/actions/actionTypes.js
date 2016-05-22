/* @flow */
export const GAMBLE: 'GAMBLE' = 'GAMBLE';
export const SIMULATE_PURCHASE: 'SIMULATE_PURCHASE' = 'SIMULATE_PURCHASE';
export const HYDRATE: 'HYDRATE' = 'HYDRATE';
export const END_DEMO: 'END_DEMO' = 'END_DEMO';

export type GambleAction = {
  type: typeof GAMBLE,
  gamblerName: string,
  winDiscount: number,
  loseDiscount: number
}

export type SimulatePurchaseAction = {
  type: typeof SIMULATE_PURCHASE,
}

export type HydrateAction = {
  type: typeof HYDRATE,
  customerIncreaseRate: number,
  coffeeCost: number,
  coffeePrice: number,
  alphaMax: number,
  alphaMin: number,
  incrementAdjustor: number,
  alphaRangeDenominator: number
}

export type EndDemoAction = {
  type: typeof END_DEMO
}
