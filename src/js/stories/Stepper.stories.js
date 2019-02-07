import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Stepper } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Stepper', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Stepper.</h1>
    <Stepper />
  </Container>
));
