import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container, Stepper } from '../';
import Button from '../components/Button/Button';

import '../../scss/ray.scss';

const stories = storiesOf('Stepper', module);

stories.add('Default', () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { label: 'Step one', value: 1, onClick: action('clicked 1') },
    { label: 'Step two', value: 2, onClick: action('clicked 2') },
    { label: 'Step three', value: 3 },
  ];

  return (
    <Container>
      <h1 className="my-6">Stepper</h1>
      <div className="mb-6">
        <Stepper steps={steps} activeStep={activeStep} />
      </div>
      <Button className="me-1 mt-3" onClick={() => setActiveStep(activeStep - 1)}>
        Back
      </Button>
      <Button className="mt-3" theme="dark" onClick={() => setActiveStep(activeStep + 1)}>
        Next
      </Button>
    </Container>
  );
});
