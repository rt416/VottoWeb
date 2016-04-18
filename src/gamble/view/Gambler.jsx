/* @flow */
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';

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
      <Card onClick={ onClick } >
        <CardTitle title={title} subtitle={description} />
        <CardText>
          Your winning probability is {(winningProbability * 100).toFixed()}%.
          You get {((1 - winDiscount) * 100).toFixed(2)}% off if you win.
          You get {((1 - loseDiscount) * 100).toFixed(2)}% off if you lose.
        </CardText>
      </Card>
    </div>
  );

Gambler.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  winningProbability: React.PropTypes.number.isRequired,
  winDiscount: React.PropTypes.number.isRequired,
  loseDiscount: React.PropTypes.number.isRequired,
};

export default Gambler;
