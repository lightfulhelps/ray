// @flow
import * as React from 'react';
import Step from './Step';
import Row from '../Row/Row';

const Stepper = props => {
  const { steps, activeStep } = props;
  return (
    <Row>
      {steps.map((step, i) => (
        <Step
          key={i}
          label={step.label}
          value={step.value}
          isLast={i === steps.length - 1}
          activeStep={activeStep}
          thisStep={i + 1}
        />
      ))}
    </Row>
  );
};

export default Stepper;
