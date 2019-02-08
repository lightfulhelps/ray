// @flow
import * as React from 'react';
import classNames from 'classnames';
import Col from '../Col/Col';
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
    'd-flex align-items-center stepper__step mb-1',
    { 'stepper__step--active': activeStep === thisStep },
    { 'stepper__step--todo': thisStep > activeStep }
  );

  const getValue = () => {
    if (thisStep < activeStep) {
      return <Icon name="tick" />;
    }
    return value;
  };

  return (
    <Col xs={12} sm={4} md={4}>
      <div className={classes}>
        <div className="stepper__step__value border rounded-circle d-flex align-items-center justify-content-center mr-1">
          {getValue()}
        </div>
        <span className="mr-1">{label}</span>
        {!isLast && <div className="line d-none d-sm-block" />}
      </div>
    </Col>
  );
};

export default Step;
