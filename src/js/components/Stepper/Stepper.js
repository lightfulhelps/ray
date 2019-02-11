// @flow
import * as React from 'react';
import Step from '../Step/Step';
import Row from '../Row/Row';

type StepType = {
  label: string,
  value: number | string,
};

type Props = {
  activeStep: number,
  className?: string,
  steps: Array<StepType>,
};

const Stepper = ({ steps, activeStep, className }: Props) => {
  if (!Array.isArray(steps) || !activeStep) {
    return null;
  }
  return (
    <div className={className}>
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
    </div>
  );
};

export default Stepper;
