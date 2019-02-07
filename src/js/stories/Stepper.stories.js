import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Stepper } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Stepper', module);

stories.addDecorator(withKnobs);

const steps = [
  { label: 'step one', value: 1 },
  { label: 'step two', value: 2 },
  { label: 'step three', value: 3 },
];

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Stepper.</h1>
    <Stepper steps={steps} />
  </Container>
));
