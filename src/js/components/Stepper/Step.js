// @flow
import * as React from 'react';
import classNames from 'classnames';
import Col from '../Col/Col';
import Icon from '../Icon/Icon';
// import stepper from '../../../scss/custom/stepper';

const Step = props => {
  const { label, value, isLast, activeStep, thisStep } = props;

  const classes = classNames(
    'd-flex align-items-center',
    { 'step-active': activeStep === thisStep },
    { 'step-todo': thisStep > activeStep },
    { 'step-done': thisStep < activeStep }
  );

  const getValue = () => {
    if (thisStep < activeStep) {
      return <Icon name="tick" />;
    }
    return value;
  };

  return (
    <Col>
      <div className={classes}>
        <div className="step-value border rounded-circle d-flex align-items-center justify-content-center mr-1">
          {getValue()}
        </div>
        <span className="mr-1">{label}</span>
        {!isLast && <div className="line" />}
      </div>
    </Col>
  );
};

export default Step;
