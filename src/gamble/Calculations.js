/* @flow */
import GamblerTypes from './GamblerTypes';

export function calculateDiscount(alpha: number, customerIncreaseRate: number,
  gamblerType: GamblerTypes, costToRevenue: number) {
  const gradient = -(1 - gamblerType.winningProbability) / gamblerType.winningProbability;
  const intercept = (alpha / customerIncreaseRate + (costToRevenue *
    (1 - alpha / customerIncreaseRate))) / gamblerType.winningProbability;
  const start = Math.max(costToRevenue, gamblerType.winningProbability * intercept);
  const end = gradient !== 0 ? Math.min(1, (costToRevenue - intercept) / gradient) : 0;
  const loseDiscount = (1 - gamblerType.winningProbability) * (end - start) + start;
  const winDiscount = gradient * loseDiscount + intercept;
  return { loseDiscount, winDiscount };
}

function calculateNextAlpha(gamblerType: GamblerTypes, currentAlpha: number,
  alphaMax: number, alphaMin: number, incrementFactor: number,
  incrementAdjustor: number) : number {
  const alphaMidPoint = (alphaMax + alphaMin) / 2;
  const alphaAdjustor = incrementFactor * (incrementAdjustor - gamblerType.winningProbability);
  switch (gamblerType.name) {
    case GamblerTypes.moral.name:
      if (currentAlpha < alphaMidPoint) {
        return currentAlpha + alphaAdjustor;
      } else if (currentAlpha > alphaMidPoint) {
        return currentAlpha - alphaAdjustor;
      }
      return currentAlpha;
    default:
      {
        const random = Math.random();
        let proposedNextAlpha;
        let nextAlpha;
        if (gamblerType.winningProbability < random) {
          // Lost on the gamble, increment alpha
          proposedNextAlpha = currentAlpha + alphaAdjustor;
          nextAlpha = proposedNextAlpha > alphaMax ? alphaMax : proposedNextAlpha;
        } else {
          // Won on the gamble, decrease alpha
          proposedNextAlpha = currentAlpha - alphaAdjustor;
          nextAlpha = proposedNextAlpha < alphaMin ? alphaMin : proposedNextAlpha;
        }
        return nextAlpha;
      }
  }
}

/* eslint arrow-body-style: "off" */
export function calculateNextAlphaForGambler({
  alphaMax,
  alphaMin,
  incrementFactor,
  incrementAdjustor,
}: {
  alphaMax: number,
  alphaMin: number,
  incrementFactor: number,
  incrementAdjustor: number,
}) : (gamblerType: GamblerTypes, currentAlpha: number) => number {
  return (gamblerType, currentAlpha) => {
    return calculateNextAlpha(
      gamblerType,
      currentAlpha,
      alphaMax,
      alphaMin,
      incrementFactor,
      incrementAdjustor);
  };
}

export function didWin(currentAlpha: number, nextAlpha: number) : boolean {
  // If the nextAlpha value is higher than the current alpha value => shop is making more money =>
  // customer is getting less discount, => losing.
  return !(currentAlpha < nextAlpha);
}
