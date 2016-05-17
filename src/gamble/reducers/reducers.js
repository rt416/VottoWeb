/* @flow */
import { GAMBLE, SIMULATE_PURCHASE, HYDRATE } from '../actions/actions';
import GamblerTypes from '../GamblerTypes';
import { calculateNextAlphaForGambler, didWin } from '../Calculations';
import type { GambleAction, SimulatePurchaseAction, HydrateAction } from '../actions/actionTypes';

export function buildInitialState() {
  const alphaMax = 1.2;
  const alphaMin = 1.0;
  const alphaRangeDenominator = 4;
  const initialState = {
    constants: {
      customerIncreaseRate: 1.2,
      coffeeCost: 0.8,
      coffeePrice: 3.5,
      alphaMax,
      alphaMin,
      incrementFactor: (alphaMax - alphaMin) / alphaRangeDenominator,
      incrementAdjustor: 1.25,
    },
    gambleState: {
      gambling: true,
      gambles: 0,
      isWin: false,
      savings: 0,
      alpha: 1.1,
      totalSavings: 0,
    },
    hydrating: true,
  };
  return initialState;
}

/* eslint no-param-reassign: ["error", { "props": false }]*/
export function gamblersApp(
  state: any = buildInitialState(),
  action: SimulatePurchaseAction | GambleAction | HydrateAction
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
        delete action.type;
        const { alphaMax, alphaMin, alphaRangeDenominator } = action;
        const incrementFactor = (alphaMax - alphaMin) / alphaRangeDenominator;
        return {
          ...state,
          constants: { ...action, incrementFactor },
          gambleState: { ...state.gambleState, alpha: (alphaMax + alphaMin) / 2 },
          hydrating: false,
        };
      }
    default:
      return state;
  }
}
