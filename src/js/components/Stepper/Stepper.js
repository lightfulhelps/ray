// @flow
import * as React from 'react';
import classNames from 'classnames';
import Step from '../Step/Step';

type StepType = {
  label: string,
  onClick?: (SyntheticMouseEvent<>) => void,
  value: number | string,
};

type Props = {
  activeStep: number,
  className?: string,
  steps: Array<StepType>,
};

const Stepper = ({ activeStep, className, steps, ...other }: Props) => {
  const classes = classNames(
    className,
    'stepper',
    'd-flex flex-column flex-sm-row justify-content-between'
  );

  if (!Array.isArray(steps) || !activeStep) {
    return null;
  }

  return (
    <div {...other} className={classes} data-test-id="stepper">
      {steps.map((step, i) => (
        <Step
          activeStep={activeStep}
          isLast={i === steps.length - 1}
          key={i}
          onClick={step.onClick}
          label={step.label}
          thisStep={i + 1}
          value={step.value}
        />
      ))}
    </div>
  );
};

export default Stepper;
