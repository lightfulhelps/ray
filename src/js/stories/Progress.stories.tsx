import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { Container, Progress } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Progress', module);

stories.addDecorator(withKnobs);

const options = { Small: 'sm', Medium: 'md', Large: 'lg' };

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">Progress</h1>
    <div className="mb-2">
      <h2 className="h6">Default</h2>
      <Progress value={number('Value 1', 25)} size={select('Size', options, 'md')} />
    </div>
    <div className="mb-2">
      <h2 className="h6">With Label</h2>
      <Progress value={33} size={select('Size', options, 'md')}>
        33%
      </Progress>
    </div>
    <div className="mb-2">
      <h2 className="h6">Themed and striped</h2>
      <Progress
        value={number('Value 2', 50)}
        size={select('Size', options, 'md')}
        theme="warning"
        isStriped
      />
    </div>
    <div className="mb-2">
      <h2 className="h6">Themed, striped and animated</h2>
      <Progress
        value={75}
        size={select('Size', options, 'md')}
        theme="success"
        isStriped
        isAnimated
      />
    </div>
  </Container>
));
