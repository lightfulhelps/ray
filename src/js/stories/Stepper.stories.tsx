import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Stepper } from '../';
import Button from '../components/Button/Button';

import '../../scss/ray.scss';

const meta: Meta<typeof Stepper> = {
  title: 'Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);
    const steps = [
      { label: 'Step one', value: 1, onClick: () => console.log('console.log', 'clicked 1') },
      { label: 'Step two', value: 2, onClick: () => console.log('console.log', 'clicked 2') },
      { label: 'Step three', value: 3 },
    ];

    return (
      <Container>
        <h1 className="my-6">Stepper</h1>
        <div className="mb-5">
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
  },
};
