/* @flow */
import { GAMBLE, SIMULATE_PURCHASE } from '../actions/actions';
import GamblerTypes from '../GamblerTypes';
import { calculateNextAlphaForGambler, didWin } from '../Calculations';

function buildInitialState() {
  const alphaMax = 1.2;
  const alphaMin = 1.0;
  const alphaRangeDenominator = 4;
  const initialState = {
    customerIncreaseRate: 1.2,
    coffeeCost: 0.8,
    coffeePrice: 3.5,
    gambleState: {
      gambling: true,
      gambles: 0,
      isWin: false,
      savings: 0,
      alpha: 1.1,
    },
    alphaMax,
    alphaMin,
    incrementFactor: (alphaMax - alphaMin) / alphaRangeDenominator,
    incrementAdjustor: 1.25,
  };
  return initialState;
}

function gamblersApp(state: any = buildInitialState(), action: {
  type: string,
  winDiscount: number,
  loseDiscount: number,
  gamblerName: string,
}) {
  switch (action.type) {
    case GAMBLE:
      {
        const { gamblerName, winDiscount, loseDiscount } = action;
        const gamblerType = GamblerTypes.enumValueOf(gamblerName);
        const { gambleState, coffeePrice } = state;
        const { alpha: currentAlpha, gambles } = gambleState;
        const nextAlpha = calculateNextAlphaForGambler(state)(gamblerType, currentAlpha);
        const isWin = gamblerType === GamblerTypes.moral ? true : didWin(currentAlpha, nextAlpha);
        return Object.assign({}, state, {
          gambleState: {
            alpha: nextAlpha,
            isWin,
            gambling: false,
            gambles: gambles + 1,
            savings: isWin ? (1 - winDiscount) * coffeePrice : (1 - loseDiscount) * coffeePrice,
          },
        });
      }
    case SIMULATE_PURCHASE:
      return Object.assign({}, state, {
        gambleState: Object.assign({}, state.gambleState, {
          gambling: true,
        }),
      });
    default:
      return state;
  }
}

export default gamblersApp;
