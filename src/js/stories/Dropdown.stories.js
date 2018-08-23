import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Dropdown } from '../';
import { dropdownMockActions } from '../mocks/dropdownMocks';

import '../../scss/ray.scss';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    {console.log("dropdownMockActions", dropdownMockActions)}
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown
          actions={['edit', 'delete']}
        />
      </div>
    </Row>
  </Container>
));
