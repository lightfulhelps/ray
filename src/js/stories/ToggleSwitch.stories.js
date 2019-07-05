import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col } from '../';
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch';
import allIcons from '../components/Icon/icons';
import themes from './utils/themes';
import sizes from './utils/sizes';

import '../../scss/ray.scss';

const stories = storiesOf('ToggleSwitch', module);

const icons = {};

Object.keys(allIcons).forEach(key => {
  icons[key] = key;
});

const iconPositions = {
  left: 'left',
  right: 'right',
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">ToggleSwitch.</h1>
    <Row>
      <Col xs={6}>
        <h2 className="h4 mb-2">Regular.</h2>
        <ToggleSwitch
          theme={select('Theme', themes, 'primary')}
          isBlock={boolean('Block', false)}
          isDisabled={boolean('Disabled', false)}
          isOutline={boolean('Outline', false)}
          onClick={action('clicked')}
          size={select('Size', sizes, 'md')}
          icon={boolean('Show Icon', false) && select('Icon', icons, 'media')}
          iconPosition={
            boolean('Show Icon', false) && select('Icon Position', iconPositions, 'left')
          }
        >
          {text('Text', 'Click Me')}
        </ToggleSwitch>
      </Col>
    </Row>
  </Container>
));
