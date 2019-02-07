import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { Container, Stepper } from '../';

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
    <State store={store}>
      <Stepper steps={steps} activeStep={store.get('step')} />
    </State>
    {/* <button onClick={() => changeStep('back')}>back</button> */}
    <button onClick={() => store.set({ step: store.get("step") + 1 })}>next</button>
  </Container>
));

// activeStep={store.get("step")}
