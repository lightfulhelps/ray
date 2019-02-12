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

const Step = ({ activeStep, isLast, label, thisStep, value }: Props) => {
  const isTodo = thisStep > activeStep;
  const isActive = activeStep === thisStep;
  const isCompleted = thisStep < activeStep;

  const classes = classNames(
    'stepper__value border rounded-circle d-flex align-items-center justify-content-center mr-1 text-xs',
    // active
    { 'bg-primary text-white border-primary': isActive },
    // completed
    { 'bg-white border-primary': isCompleted },
    // todo
    { 'bg-gray-400 border-gray-400 text-white': isTodo }
  );

  const labelClasses = classNames(
    'mr-1',
    { 'text-gray-400 font-weight-light': isTodo },
    {
      'font-weight-bold text-primary': isActive || isCompleted,
    }
  );

  const getValue = () => {
    if (isCompleted) {
      return <Icon name="tick" theme="primary" />;
    }
    return <b>{value}</b>;
  };

  return (
    <div className={`d-flex align-items-center mb-2 mb-sm-0 ${isLast ? '' : 'flex-fill'}`}>
      <div className={classes}>{getValue()}</div>
      <div className={labelClasses}>{label}</div>
      {!isLast && <div className="d-none d-sm-block mr-1 flex-fill border-top border-gray-400" />}
    </div>
  );
};

export default Step;
