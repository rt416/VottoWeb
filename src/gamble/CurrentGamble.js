/* @flow */
import { connect } from 'react-redux';
import Gamblers from './view/Gamblers';
import GamblerTypes from './GamblerTypes';
import { calculateDiscount } from './Calculations';
import * as Actions from './actions/actions';

function getGamblersAndDiscounts(
  alpha: number,
  customerIncreaseRate: number,
  coffeeCost: number,
  coffeePrice: number
) {
  return GamblerTypes
    .enumValues
    .map(gambler => {
      const { loseDiscount, winDiscount } = calculateDiscount(
        alpha,
        customerIncreaseRate,
        gambler,
        coffeeCost / coffeePrice
      );
      return { ...gambler, winDiscount, loseDiscount };
    });
}

const mapStateToProps = (state) => {
  const {
    gambleState,
    constants: { customerIncreaseRate, coffeeCost, coffeePrice },
    hydrating,
  } = state.gamblersApp;
  const { alpha, isWin, savings, gambling } = gambleState;
  return {
    gamblers: getGamblersAndDiscounts(alpha, customerIncreaseRate, coffeeCost, coffeePrice),
    gambleResult: { isWin, savings, gambling },
    hydrating,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGamblerClick: (gamblerName, winDiscount, loseDiscount) => {
      dispatch(Actions.gamble(gamblerName, winDiscount, loseDiscount));
    },
    onSimulatePurchase: () => {
      dispatch(Actions.simulatePurchase());
    },
  };
};

const CurrentGamble = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gamblers);

export default CurrentGamble;
