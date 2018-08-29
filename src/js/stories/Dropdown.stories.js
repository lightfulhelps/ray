import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Container, Row, Dropdown } from '../';
import { dropdownMockActions } from '../mocks/dropdownMocks';

import '../../scss/ray.scss';
import { select } from '@storybook/addon-knobs/dist/vue';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

const themes = {
  primary: 'Primary',
  dark: 'Dark',
};

stories.add('Default', () => (
  <Container>
    {console.log('dropdownMockActions', dropdownMockActions)}
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown
          dropdownItems={[
            {
              label: 'edit',
              icon: 'edit'
            },
            {
              label: 'delete',
              icon: 'delete',
            },
            {
              label: text('Footer', 'Some footer text'),
              isFooter: true,
            }
          ]}
          theme={select('Theme', themes)}
        />
      </div>
    </Row>
  </Container>
));
