/* @flow */
import type GamblerTypes from './GamblerTypes';

function calculateDiscount(alpha : number, customerIncreaseRate : number,
  gamblerType : GamblerTypes, costToRevenue : number) : [number, number] {
  const gradient = -(1 - gamblerType.winningProbability) / gamblerType.winningProbability;
  const intercept = (alpha / customerIncreaseRate + (costToRevenue *
    (1 - alpha / customerIncreaseRate))) / gamblerType.winningProbability;
  const start = Math.max(costToRevenue, gamblerType.winningProbability * intercept);
  const end = gradient !== 0 ? Math.min(1, (costToRevenue - intercept) / gradient) : 0;
  const loseDiscount = (1 - gamblerType.winningProbability) * (end - start) + start;
  const winDiscount = gradient * loseDiscount + intercept;
  return [loseDiscount, winDiscount];
}

export default calculateDiscount;
