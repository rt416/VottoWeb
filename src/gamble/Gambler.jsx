/* @flow */
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import GamblerTypes from './GamblerTypes';
import calculateDiscount from './CalculateDiscount';
import CardText from 'material-ui/lib/card/card-text';

const Gambler = (props : { gamblerType: GamblerTypes, alpha: number,
  customerIncreaseRate: number, costToRevenue: number}) => {
  const [winDiscount, loseDiscount] = calculateDiscount(
    props.alpha,
    props.customerIncreaseRate,
    props.gamblerType,
    props.costToRevenue
  );
  return (
    <Card>
      <CardTitle title={props.gamblerType.title} subtitle={props.gamblerType.description} />
      <CardText>
        Your winning probability is {props.gamblerType.winningProbability}.
        Your losing prabability is {1 - props.gamblerType.winningProbability}.
        Your winning discount rate is {winDiscount}.
        Your losing discount rate is {loseDiscount}.
      </CardText>
    </Card>
  );
};

Gambler.propTypes = {
  gamblerType: (props, propName, componentName) => {
    const toTest = props[propName];
    return toTest instanceof GamblerTypes ? null :
      new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed`);
  },

  alpha: React.PropTypes.number.isRequired,
  customerIncreaseRate: React.PropTypes.number.isRequired,
  costToRevenue: React.PropTypes.number.isRequired,
};

export default Gambler;
