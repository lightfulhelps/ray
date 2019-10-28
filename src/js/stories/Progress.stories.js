import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Progress } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Progress', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Progress</h1>
    <div className="mb-2">
      <h2 className="h6">Default</h2>
      <Progress value={25} />
    </div>
    <div className="mb-2">
      <h2 className="h6">With Label</h2>
      <Progress value={33}>33%</Progress>
    </div>
    <div className="mb-2">
      <h2 className="h6">Themed and striped</h2>
      <Progress value={50} theme="warning" isStriped />
    </div>
    <div className="mb-2">
      <h2 className="h6">Themed, striped and animated</h2>
      <Progress value={75} theme="success" isStriped isAnimated />
    </div>
  </Container>
));
