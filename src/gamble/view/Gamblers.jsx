/* @flow */
import React from 'react';
import Gambler from './Gambler';
import GambleResultDialog from './GambleResultDialog';

const Gamblers = ({ gamblers, onGamblerClick, gambleResult, onSimulatePurchase } : {
  gamblers: Array<{
    title: string,
    description: string,
    winningProbability: number,
    winDiscount: number,
    loseDiscount: number,
    name: string,
  }>,
  onGamblerClick: (gambler: string, winDiscount: number, loseDiscount: number) => void,
  onSimulatePurchase: () => void,
  gambleResult: {
    isWin: boolean,
    savings: number,
    gambling: boolean,
  }
}) => (
  <div>
    {gamblers.map(gambler => (
      <Gambler
        {...gambler}
        onClick={() => onGamblerClick(gambler.name, gambler.winDiscount, gambler.loseDiscount)}
        key={gambler.name}
      />
    ))}
    <GambleResultDialog
      onSubmit={onSimulatePurchase}
      {...gambleResult}
      open={!gambleResult.gambling}
    />
  </div>
);

export default Gamblers;
