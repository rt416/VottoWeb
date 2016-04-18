/* @flow */
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

/* eslint no-else-return: "off" */
function generateMessage(isWin : boolean, savings : number) {
  if (isWin) {
    return `Congratulations! You won your gamble! Save £${savings.toFixed(2)} on your next coffee!`;
  } else {
    return 'Condolensces, you lost your gamble. Fortunately, you can still ' +
    `save £${savings.toFixed(2)} on your next coffee!`;
  }
}

const GambleResultDialog = ({ onSubmit, isWin, savings, open } : {
  onSubmit: () => void,
  isWin: boolean,
  savings: number,
  open: boolean
}) => {
  const actions = [
    <FlatButton
      label="Simulate Purchase"
      primary={true}
      onTouchTap={onSubmit}
    />,
  ];
  return (
    <Dialog
      title="Lady luck says..."
      actions={actions}
      modal={true}
      open={open}
    >
      { generateMessage(isWin, savings) }
    </Dialog>
  );
};

GambleResultDialog.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  isWin: React.PropTypes.bool.isRequired,
  savings: React.PropTypes.number.isRequired,
  open: React.PropTypes.bool.isRequired,
};

export default GambleResultDialog;
