/* @flow */
import React from 'react';
import Divider from 'material-ui/Divider';
import styles from './QuestionnaireStyles.css';

const Question = (
  { question, children, notRadio } :
  { question: string, children: React$Element<{}>, notRadio: ?boolean}
) => (
  <div>
    <div className={styles.questionGroup}>
      <div className={notRadio ? '' : styles.radioQuestion}>
        {question}
      </div>
      {children}
    </div>
    <Divider />
  </div>
);

export default Question;
