// @flow
import React from 'react';
import Paper from 'material-ui/Paper';
import Formsy from 'formsy-react';
import { FormsyText, FormsyRadio, FormsyRadioGroup } from 'formsy-material-ui/lib';

import styles from './QuestionnaireStyles.css';
import Question from './Question';

const Questionnaire = () => (
  <div>
    <Paper zDepth={2} classNamee={styles.questionnaire} >
      <Formsy.Form>
        <Question
          question="Enter your email if you want to be notified when we launch:"
          notRadio={true}
        >
          <FormsyText
            name="email"
            validations="isEmail"
            validationError="Please enter a valid email"
            floatingLabelText="Email"
          />
          <br />
          <FormsyText
            name="firstName"
            validations="isWords"
            floatingLabelText="First Name (optional)"
          />
          &nbsp;&nbsp;&nbsp;
          <FormsyText
            name="lastName"
            validations="isWords"
            floatingLabelText="Last Name (optional)"
          />
        </Question>
        <Question question="1. What kind of phone do you own?">
          <FormsyRadioGroup name="phoneType" required>
            <FormsyRadio
              value="iPhone"
              label="iPhone"
            />
            <FormsyRadio
              value="Android"
              label="Android"
            />
            <FormsyRadio
              value="Other"
              label="Other"
            />
          </FormsyRadioGroup>
        </Question>
        <Question question="2. How often will you visit a café per week?" >
          <FormsyRadioGroup
            name="cafeFrequency"
            required
          >
            <FormsyRadio value="7" label="Everyday" />
            <FormsyRadio value="4 - 6" label="4 - 6 times" />
            <FormsyRadio value="1 - 3" label="1 - 3 times" />
            <FormsyRadio value="less" label="Less than once" />
          </FormsyRadioGroup>
        </Question>
        <Question question="3. How loyal would you say you were, to this café?" >
          <FormsyRadioGroup name="percievedLoyalty">
            <FormsyRadio
              value="5"
              label="Very Loyal"
            />
            <FormsyRadio
              value="4"
              label="Somewhat Loyal"
            />
            <FormsyRadio
              value="3"
              label="Neutral"
            />
            <FormsyRadio
              value="2"
              label="Not particularly loyal"
            />
            <FormsyRadio
              value="1"
              label="Not loyal whasoever"
            />
          </FormsyRadioGroup>
        </Question>
        <Question
          question="4. How likely is the price of a coffee or tea (or equivalent beverage)
          going to stop you from buying it?"
        >
          <FormsyRadioGroup name="priceElasticityOfCoffee">
            <FormsyRadio value="5" label="Highly Likely" />
            <FormsyRadio value="4" label="Quite Likely" />
            <FormsyRadio value="3" label="Somewhat Likely" />
            <FormsyRadio value="2" label="Unlikely" />
            <FormsyRadio value="1" label="Highly unlikely" />
          </FormsyRadioGroup>
        </Question>
        <Question question="5. Have you ever used a voucher for a café">
          <FormsyRadioGroup name="priceElasticityOfCoffee">
            <FormsyRadio value="Yes" label="Yes" />
            <FormsyRadio value="No" label="No" />
          </FormsyRadioGroup>
          <div style={{ marginTop: '20px' }}>
            "If 'Yes', please specify how you obtained the voucher"
          </div>
          <FormsyText
            name="otherVouchers"
          />
        </Question>
        <Question question="6. How likely will you use our app when it gets launched?" >
          <FormsyRadioGroup name="appUsageLikelihood">
            <FormsyRadio value="5" label="Highly Likely" />
            <FormsyRadio value="4" label="Quite Likely" />
            <FormsyRadio value="3" label="Somewhat Likely" />
            <FormsyRadio value="2" label="Unlikely" />
            <FormsyRadio value="1" label="Highly unlikely" />
          </FormsyRadioGroup>
        </Question>
        <Question question="7. Do you have any general comments for our app?" >
          <FormsyText multiLine={true} name="generalFeedback" />
        </Question>
      </Formsy.Form>
    </Paper>
  </div>
);

export default Questionnaire;
