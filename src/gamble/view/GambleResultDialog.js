/* @flow */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/* eslint no-else-return: "off" */
function generateMessage(isWin : boolean, savings : number) {
  if (isWin) {
    return `Congratulations! You won your gamble! Save £${savings.toFixed(2)} on your next coffee!`;
  } else {
    return 'Condolensces, you lost your gamble. Fortunately, you can still ' +
    `save £${savings.toFixed(2)} on your next coffee!`;
  }
}

const GambleResultDialog = ({ onSubmit, isWin, savings, open, isDemoing, endDemo } : {
  onSubmit: () => void,
  isWin: boolean,
  savings: number,
  open: boolean,
  isDemoing: boolean,
  endDemo: () => void
}) => {
  const actions = [
    <FlatButton
      label="Simulate Purchase"
      secondary={true}
      onTouchTap={onSubmit}
    />,
  ];
  if (isDemoing) {
    actions.push(
      <FlatButton
        label="End Demo"
        primary={true}
        onTouchTap={endDemo}
      />
    );
  }
  return (
    <Dialog
      title="Lady luck says..."
      actions={actions}
      modal={true}
      open={open}
    >
      {generateMessage(isWin, savings)}
    </Dialog>
  );
};

export default GambleResultDialog;
