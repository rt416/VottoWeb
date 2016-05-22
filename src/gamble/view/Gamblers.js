/* @flow */
import React from 'react';
import Gambler from './Gambler';
import GambleResultDialog from './GambleResultDialog';
import CircularProgress from 'material-ui/CircularProgress';

const Gamblers = ({
  gamblers,
  gambleResult,
  hydrating,
  isDemoing,
  onGamblerClick,
  onSimulatePurchase,
  onEndDemo,
} : {
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
  onEndDemo: () => void,
  gambleResult: {
    isWin: boolean,
    savings: number,
    gambling: boolean,
  },
  hydrating: boolean,
  isDemoing: boolean,
}) => {
  if (hydrating) {
    return (
      <CircularProgress
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
  }
  return (
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
        endDemo={onEndDemo}
        isDemoing={isDemoing}
        open={!gambleResult.gambling}
      />
    </div>
  );
};

export default Gamblers;
