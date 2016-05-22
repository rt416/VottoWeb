/* @flow */
/* eslint-disable no-duplicate-imports, import/no-duplicates */
import type { GambleAction, SimulatePurchaseAction,
  HydrateAction, EndDemoAction } from './actionTypes';
import { GAMBLE, SIMULATE_PURCHASE, HYDRATE, END_DEMO } from './actionTypes';
import { constantsRef } from '../../firebase/configureFirebase';

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
      constantsRef.once('value', dataSnapshot => {
        dispatch(hydrate(dataSnapshot.val()));
      });
    }
  };
}

export function endDemo(): EndDemoAction {
  return { type: END_DEMO };
}
