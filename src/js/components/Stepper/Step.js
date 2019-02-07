// @flow
import * as React from 'react';
import classNames from 'classnames';
import Col from '../Col/Col';
// import stepper from '../../../scss/custom/stepper';

const Step = props => {
  const { label, value, isLast, activeStep, thisStep } = props;

  const classes = classNames(
    'd-flex align-items-center',
    { active: activeStep === thisStep },
    { todo: thisStep > activeStep },
    { done: thisStep < activeStep }
  );

  return (
    <Col>
      <div className={classes}>
        <div className="step-value border border-black rounded-circle d-flex align-items-center justify-content-center mr-1">
          {' '}
          {value}{' '}
        </div>
        <span className="mr-1">{label}</span>
        {!isLast && <div className="line" />}
      </div>
    </Col>
  );
};

export default Step;
