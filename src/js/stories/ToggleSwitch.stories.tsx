import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Container } from '../';
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch';

import '../../scss/ray.scss';

const stories = storiesOf('ToggleSwitch', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const [checked, setChecked] = useState(true);

  return (
    <Container>
      <h1 className="my-4">ToggleSwitch</h1>
      <ToggleSwitch
        isDisabled={boolean('Disabled', false)}
        onClick={() => setChecked(!checked)}
        label={text('Label', 'Noice!')}
        checked={checked}
        labelAlign={select(
          'Align Label',
          { left: 'Left', right: 'Right', bottom: 'Bottom', top: 'Top' },
          'right'
        )}
      />
    </Container>
  );
});
