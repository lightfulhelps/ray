// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

type Props = {
  activeStep: number,
  isLast: boolean,
  label: string,
  onClick?: (SyntheticMouseEvent<>) => void,
  thisStep: number,
  value: number | string,
};

const Step = ({ activeStep, isLast, label, onClick, thisStep, value }: Props) => {
  const isTodo = thisStep > activeStep;
  const isActive = activeStep === thisStep;
  const isCompleted = thisStep < activeStep;

  const stepClasses = classNames('d-flex align-items-center', {
    'mb-1 mb-sm-0 flex-fill': !isLast,
  });

  const valueClasses = classNames(
    'stepper__value border rounded-circle d-flex align-items-center justify-content-center mr-1 text-xs font-weight-bold',
    { 'bg-gray-400 border-gray-400 text-white': isTodo },
    { 'bg-primary text-white border-primary': isActive },
    { 'bg-white border-primary': isCompleted }
  );

  const labelClasses = classNames(
    'mr-1',
    { 'text-gray-400 font-weight-light': isTodo },
    { 'font-weight-bold text-primary': isActive || isCompleted }
  );

  return (
    <div className={stepClasses}>
      <div
        className={`d-flex align-items-center ${onClick ? 'cursor-pointer' : ''}`}
        data-test-id="stepper-step"
        onClick={onClick}
      >
        <div className={valueClasses}>
          {isCompleted ? <Icon name="tick" theme="primary" /> : value}
        </div>
        <div className={labelClasses}>{label}</div>
      </div>
      {!isLast && <div className="d-none d-sm-block mr-1 flex-fill border-top border-gray-400" />}
    </div>
  );
};

export default Step;
