import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs/dist/vue';
import { Container, Row, Dropdown } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

const themes = {
  primary: 'Primary',
  dark: 'Dark',
};
const buttonThemes = {
  light: 'Light',
  dark: 'Dark',
};

const onClickHandler = () => {
  // eslint-disable-next-line
  alert(`this is the onClick handler`);
};

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Dropdown.</h1>
    <Row>
      <div className="col-6">
        <Dropdown
          items={[
            {
              label: 'edit',
              icon: 'edit',
            },
            {
              label: 'delete',
              icon: 'delete',
            },
          ]}
          onClick={onClickHandler}
          theme={select('Theme', themes)}
          buttonTheme={select('Button Theme', buttonThemes)}
          footer={text('Footer Text', 'Some footer text')}
        />
      </div>
    </Row>
  </Container>
));
