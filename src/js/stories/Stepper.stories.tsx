import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import { Container, Stepper } from '../';
import Button from '../components/Button/Button';

import '../../scss/ray.scss';

const stories = storiesOf('Stepper', module);

const store = new Store({
  step: 1,
});

stories.add('Default', () => {
  const steps = [
    { label: 'Step one', value: 1, onClick: action('clicked 1') },
    { label: 'Step two', value: 2, onClick: action('clicked 2') },
    { label: 'Step three', value: 3 },
  ];

  return (
    <Container>
      <h1 className="my-4">Stepper</h1>
      <div className="mb-4">
        <State store={store}>{state => <Stepper steps={steps} activeStep={state.step} />}</State>
      </div>
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
  );
});
