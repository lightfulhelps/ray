import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { Container } from '../';
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch';

import '../../scss/ray.scss';

const stories = storiesOf('ToggleSwitch', module);

const store = new Store({
  checked: true,
});

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">ToggleSwitch</h1>
    <State store={store}>
      {state => (
        <ToggleSwitch
          isDisabled={boolean('Disabled', false)}
          onClick={() => store.set({ checked: !store.get('checked') })}
          label={text('Label', 'Noice!')}
          checked={state.checked}
          labelAlign={select('Align Label', { left: 'Left', right: 'Right' }, 'right')}
        />
      )}
    </State>
  </Container>
));
