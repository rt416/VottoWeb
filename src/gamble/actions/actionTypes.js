
export type GambleAction = {
  type: string,
  gamblerName: string,
  winDiscount: number,
  loseDiscount: number
}

export type SimulatePurchaseAction = {
  type: string,
}

export type HydrateAction = {
  type: string,
  customerIncreaseRate: number,
  coffeeCost: number,
  coffeePrice: number,
  alphaMax: number,
  alphaMin: number,
  incrementAdjustor: number,
  alphaRangeDenominator: number
}
