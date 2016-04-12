/* @flow */
import React from 'react';
import Gambler from './Gambler';
import GamblerTypes from './GamblerTypes';

const Gamblers = (props : {
  alpha: number,
  customerIncreaseRate: number,
  costToRevenue: number}) : any => (
    <div>
      { GamblerTypes
        .enumValues
        .map((gamblerType: GamblerTypes) => (
          <Gambler
            key={gamblerType}
            alpha={props.alpha}
            customerIncreaseRate={props.customerIncreaseRate}
            costToRevenue={props.costToRevenue}
            gamblerType={gamblerType}
          />)) }
    </div>
  );

export default Gamblers;
