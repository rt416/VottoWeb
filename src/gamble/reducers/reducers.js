/* @flow */
/* eslint-disable no-duplicate-imports, import/no-duplicates */
import { GAMBLE, SIMULATE_PURCHASE, HYDRATE, END_DEMO } from '../actions/actionTypes';
import GamblerTypes from '../GamblerTypes';
import { calculateNextAlphaForGambler, didWin, calculateInitialAlpha } from '../Calculations';
import type { GambleAction, SimulatePurchaseAction,
  HydrateAction, EndDemoAction } from '../actions/actionTypes';

const initialState = {
  gambleState: {
    gambling: true,
    gambles: 0,
    isWin: false,
    savings: 0,
    totalSavings: 0,
    alpha: 0,
  },
  constants: {
    customerIncreaseRate: 0,
    coffeeCost: 0,
    coffeePrice: 0,
  },
  hydrating: true,
  isDemoing: true,
};

export function gamblersApp(
  state: any = initialState,
  action: SimulatePurchaseAction | GambleAction | HydrateAction | EndDemoAction
) {
  switch (action.type) {
    case GAMBLE:
      {
        const { gamblerName, winDiscount, loseDiscount } = action;
        const gamblerType = GamblerTypes.enumValueOf(gamblerName);
        const { gambleState, constants: { coffeePrice } } = state;
        const { alpha: currentAlpha, gambles, totalSavings } = gambleState;
        const nextAlpha = calculateNextAlphaForGambler(state.constants)(gamblerType, currentAlpha);
        const isWin = gamblerType === GamblerTypes.moral ? true : didWin(currentAlpha, nextAlpha);
        const savings = isWin ? (1 - winDiscount) * coffeePrice : (1 - loseDiscount) * coffeePrice;
        const newSavings = savings + totalSavings;
        return {
          ...state,
          gambleState: {
            alpha: nextAlpha,
            isWin,
            gambling: false,
            gambles: gambles + 1,
            savings,
            totalSavings: newSavings,
          },
        };
      }
    case SIMULATE_PURCHASE:
      return {
        ...state,
        gambleState: {
          ...state.gambleState,
          gambling: true,
        },
      };
    case HYDRATE:
      {
        const mutableAction = { ...action };
        delete mutableAction.type;
        const { alphaMax, alphaMin, alphaRangeDenominator } = mutableAction;
        const incrementFactor = (alphaMax - alphaMin) / alphaRangeDenominator;
        return {
          ...state,
          constants: { ...mutableAction, incrementFactor },
          gambleState: { ...state.gambleState, alpha: calculateInitialAlpha(alphaMax, alphaMin) },
          hydrating: false,
        };
      }
    case END_DEMO:
      {
        const { alphaMax, alphaMin } = state.constants;
        return {
          ...state,
          gambleState: {
            ...initialState.gambleState,
            alpha: calculateInitialAlpha(alphaMax, alphaMin),
          },
          isDemoing: false,
        };
      }
    default:
      return state;
  }
}
