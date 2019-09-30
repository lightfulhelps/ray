import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../';

import Filestack from '../components/FileStack/FileStack';

const stories = storiesOf('Filestack', module);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Filestack</h1>
    <Filestack />
  </Container>
));
