import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Dropdown } from '../';
import { dropdownMocks } from '../mocks/dropdownMocks';

import '../../scss/ray.scss';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown 
          items={[1,2,3]}
        />
      </div>
    </Row>
  </Container>
));
