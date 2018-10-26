import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, number, boolean, select } from '@storybook/addon-knobs';
import { Container, Row, Col, Icon } from '../';
import icons from '../components/Icon/icons';

import '../../scss/ray.scss';

const themes = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
  white: 'White',
  'gray-500': 'Gray 500',
};

const stories = storiesOf('Icons', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Icons.</h1>
    <Row>
      <Col>
        <div className="bg-white py-4 shadow">
          <Row>
            {Object.keys(icons).map(icon => (
              <Col key={icon} xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
                <Icon
                  name={icon}
                  size={number('Size', 24)}
                  color={color('Color', '#adb5bd')}
                  hoverColor={color('Hover Color', '#212529')}
                  theme={boolean('Use theme?') && select('Theme', themes, 'primary')}
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
