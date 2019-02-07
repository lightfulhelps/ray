// @flow
import * as React from 'react';
import Col from '../Col/Col';
// import stepper from '../../../scss/custom/stepper';

const Step = props => {
  const { label, value, isLast } = props;
  console.log('props', props)
  return (
    <Col>
      <div className="d-flex align-items-center">
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
