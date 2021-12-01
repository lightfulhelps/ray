import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, number, boolean, select } from '@storybook/addon-knobs';
import { Container, Row, Col, Icon } from '../';
import icons, { IconNameType } from '../components/Icon/icons';
import themes from './utils/themes';

import '../../scss/ray.scss';

const stories = storiesOf('Icons', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Icons</h1>
    <Row>
      <Col>
        <div className="bg-white py-4 shadow">
          <Row>
            {Object.keys(icons).map(icon => (
              <Col key={icon} xs={6} sm={4} md={3} lg={2} className="text-center mb-6">
                <Icon
                  name={icon as IconNameType}
                  size={number('Size', 24)}
                  color={color('Color', '#adb5bd')}
                  hoverColor={color('Hover Color', '#212529')}
                  theme={boolean('Use theme?', false) && select('Theme', themes, 'primary')}
                  isGradient={boolean('Use theme?', false) && boolean('Use gradient?', false)}
                  withHover={boolean('Use theme?', false) && boolean('With hover state?', false)}
                />
                <div>{icon}</div>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
));
