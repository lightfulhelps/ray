import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { Container, Stepper } from '../';
import Button from '../components/Button/Button';

import '../../scss/ray.scss';

const stories = storiesOf('Stepper', module);

stories.addDecorator(withKnobs);

const store = new Store({
  step: 1,
});

const steps = [
  { label: 'step one', value: 1 },
  { label: 'step two', value: 2 },
  { label: 'step three', value: 3 },
];

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Stepper.</h1>

    <State store={store}>{state => <Stepper steps={steps} activeStep={state.step} />}</State>

    <Button className="mr-1 mt-2" onClick={() => store.set({ step: store.get('step') - 1 })}>
      Back
    </Button>
    <Button
      className="mt-2"
      theme="dark"
      onClick={() => store.set({ step: store.get('step') + 1 })}
    >
      Next
    </Button>
  </Container>
));
