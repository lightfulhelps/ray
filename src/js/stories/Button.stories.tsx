import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { merge } from 'lodash';
import { Container, Row, Col, Button } from '..';
import allIcons, { IconNameType } from '../components/Icon/icons';
import themes from './utils/themes';
import sizes from './utils/sizes';

import '../../scss/ray.scss';

const buttonThemes = merge(themes, { alternative: 'alternative' });

const stories = storiesOf('Button', module);

const icons: { [key: string]: IconNameType } = {};

Object.keys(allIcons).forEach(key => {
  icons[key as IconNameType] = key as IconNameType;
});

const iconPositions: { [key: string]: 'left' | 'right' } = {
  left: 'left',
  right: 'right',
};

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Button</h1>
    <Row>
      <Col xs={6}>
        <h2 className="h4 mb-3">Regular.</h2>
        <Button
          theme={select('Theme', buttonThemes, 'primary')}
          forceSolidColor={boolean('Force solid color over gradient?', false)}
          isBlock={boolean('Block', false)}
          isDisabled={boolean('Disabled', false)}
          isOutline={boolean('Outline', false)}
          animateGradient={boolean('Animate Gradient', false)}
          loading={boolean('Loading', false)}
          onClick={action('clicked')}
          size={select('Size', sizes, 'md')}
          icon={boolean('Show Icon', false) ? select('Icon', icons, 'media') : undefined}
          iconPosition={
            boolean('Show Icon', false) ? select('Icon Position', iconPositions, 'left') : undefined
          }
          iconTheme={
            boolean('Show Icon', false) && boolean('Use theme?', false)
              ? select('Icon Theme', themes, 'light')
              : undefined
          }
        >
          {text('Text', 'Click Me')}
        </Button>
      </Col>
      <Col xs={6}>
        <h2 className="h4 mb-3">Icon Only.</h2>
        <Button
          theme={select('Theme', themes, 'primary')}
          forceSolidColor={boolean('Force solid color over gradient?', false)}
          isDisabled={boolean('Disabled', false)}
          isOutline={boolean('Outline', false)}
          loading={boolean('Loading', false)}
          size={select('Size', sizes, 'md')}
          icon={select('Icon', icons, 'media')}
          iconTheme={
            boolean('Show Icon', false) && boolean('Use theme?', false)
              ? select('Icon Theme', themes, 'light')
              : undefined
          }
        />
      </Col>
    </Row>
  </Container>
));
