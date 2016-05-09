/* @flow */
import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

function generateInner(winningProbability: number, winDiscount: number, loseDiscount: number) {
  if (winningProbability === 1) {
    return `You are guaranteed to win ${((1 - winDiscount) * 100).toFixed(2)}% off.`;
  }
  return `Your winning probability is ${(winningProbability * 100).toFixed()}%.` +
  `You get ${((1 - winDiscount) * 100).toFixed(2)}% off if you win.` +
  `You get ${((1 - loseDiscount) * 100).toFixed(2)}% off if you lose.`;
}

const Gambler = ({
  title,
  description,
  winningProbability,
  winDiscount,
  loseDiscount,
  onClick,
}: {
  title: string,
  description: string,
  winningProbability: number,
  winDiscount: number,
  loseDiscount: number,
  onClick: () => void
}) => (
  <div>
    <Card onClick={onClick} >
      <CardTitle title={title} subtitle={description} />
      <CardText>
        {generateInner(winningProbability, winDiscount, loseDiscount)}
      </CardText>
    </Card>
  </div>
);


export default Gambler;
