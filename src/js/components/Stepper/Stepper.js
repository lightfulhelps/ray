// @flow
import * as React from 'react';
import Step from './Step';
import Row from '../Row/Row';
/*
- number of steps
- which step we're on
- what the steps are called
- icons done, active and to do
- hide or show component
- horizontal mode (desktop)
- vertical mode (mobile)
*/

class Stepper extends React.Component {
  state = {
    progress: 'todo',
  };

  render() {
    const { steps, activeStep } = this.props;
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
  }
}

export default Stepper;
