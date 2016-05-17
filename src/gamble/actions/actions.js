/* @flow */
import type { GambleAction, SimulatePurchaseAction, HydrateAction } from './actionTypes';
import Firebase from 'firebase';

export const GAMBLE = 'GAMBLE';
export const SIMULATE_PURCHASE = 'SIMULATE_PURCHASE';
export const HYDRATE = 'HYDRATE';

function hydrate(constants: {
  customerIncreaseRate: number,
  coffeeCost: number,
  coffeePrice: number,
  alphaMax: number,
  alphaMin: number,
  alphaRangeDenominator: number,
  incrementAdjustor: number,
}): HydrateAction {
  return { type: HYDRATE, ...constants };
}

export function gamble(
  gamblerName: string,
  winDiscount: number,
  loseDiscount: number
): GambleAction {
  return { type: GAMBLE, gamblerName, winDiscount, loseDiscount };
}

export function simulatePurchase(): SimulatePurchaseAction {
  return { type: SIMULATE_PURCHASE };
}

export function hydrateFromFirebase() {
  return (dispatch: (action: HydrateAction) => void, getState: () => any) => {
    const { gamblersApp: { hydrating } } = getState();
    if (hydrating) {
      const firebaseRef = new Firebase('https://votto.firebaseio.com/constants');
      firebaseRef.once('value', dataSnapshot => {
        dispatch(hydrate(dataSnapshot.val()));
      });
    }
  };
}
