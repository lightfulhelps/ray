// @flow
import * as React from 'react';
import classNames from 'classnames';
import Step from '../Step/Step';

type StepType = {
  label: string,
  value: number | string,
};

type Props = {
  activeStep: number,
  className?: string,
  steps: Array<StepType>,
};

const Stepper = ({ className, steps, activeStep, ...other }: Props) => {
  const classes = classNames(className, 'stepper');

  if (!Array.isArray(steps) || !activeStep) {
    return null;
  }

  return (
    <div {...other} className={classes}>
      <div className="d-flex flex-column flex-sm-row">
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
      </div>
    </div>
  );
};

export default Stepper;
