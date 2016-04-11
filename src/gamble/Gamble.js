import React from 'react';
import Gambler from './Gambler';
import GamblerTypes from './GamblerTypes';

class GambleRoot extends React.Component {
  render() {
    return (
      <Gambler
        alpha={1.1}
        customerIncreaseRate={1.2}
        costToRevenue={0.8 / 3.5}
        gamblerType={GamblerTypes.moral}
      />
    );
  }
}

export default GambleRoot;
