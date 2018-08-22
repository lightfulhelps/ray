
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Dropdown } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown />
      </div>
    </Row>
  </Container>
));
