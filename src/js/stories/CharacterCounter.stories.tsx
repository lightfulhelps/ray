import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Container, Row, Col, CharacterCounter } from '../';

import '../../scss/ray.scss';
import translation from '../locale/i18n';

const stories = storiesOf('CharacterCounter', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">CharacterCounter</h1>
    <Row>
      <Col>
        <CharacterCounter
          text={text('Text', translation.t('characterCounter:text'))}
          max={number('Max', 100)}
        />
      </Col>
    </Row>
  </Container>
));
