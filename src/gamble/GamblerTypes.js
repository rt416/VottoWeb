import { Enum } from 'enumify';

class GamblerTypes extends Enum {}
GamblerTypes.initEnum({
  moral: {
    winningProbability: 1,
    title: 'No Gambling',
    description: 'For the truly pious',
  },
  conservative: {
    winningProbability: 0.75,
    title: 'Conservative Gambler',
    description: 'For the safer ones out there',
  },
  average: {
    winningProbability: 0.5,
    title: 'Average Gambler',
    description: 'For the average joe',
  },
  true: {
    winningProbability: 0.25,
    title: 'True Risk Taker',
    description: 'For those with balls of steel',
  },
});

export default GamblerTypes;
