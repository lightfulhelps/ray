// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

type Props = {
  activeStep: number,
  isLast: boolean,
  label: string,
  thisStep: number,
  value: number | string,
};

const Step = ({ label, value, isLast, activeStep, thisStep }: Props) => {
  const classes = classNames(
    'stepper__step__value border rounded-circle d-flex align-items-center justify-content-center mr-1',
    // active
    { 'bg-primary text-white border-primary': activeStep === thisStep },
    // completed
    { 'bg-white border-primary': thisStep < activeStep },
    // todo
    { 'bg-gray-400 text-white': thisStep > activeStep }
  );

  const getValue = () => {
    if (thisStep < activeStep) {
      return <Icon name="tick" color="#27b0cc" />;
    }
    return <b>{value}</b>;
  };

  return (
    <div>
      <div className="d-flex align-items-center stepper__step mb-1">
        <div className={classes}>{getValue()}</div>
        <span className="mr-1 text-gray-500">
          <b>{label}</b>
        </span>
        {!isLast && <div className="line d-none d-sm-block mr-1" />}
      </div>
    </div>
  );
};

export default Step;
