import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { Container, Progress, ProgressAlt } from '../';
import sizes from './utils/sizes';

import '../../scss/ray.scss';

const stories = storiesOf('Progress', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Progress</h1>
    <div className="mb-3">
      <h2 className="h6">Default</h2>
      <Progress value={number('Value 1', 25)} size={select('Size', sizes, 'md')} />
    </div>
    <div className="mb-3">
      <h2 className="h6">With Label</h2>
      <Progress value={33} size={select('Size', sizes, 'md')}>
        33%
      </Progress>
    </div>
    <div className="mb-3">
      <h2 className="h6">Themed and striped</h2>
      <Progress
        value={number('Value 2', 50)}
        size={select('Size', sizes, 'md')}
        theme="warning"
        isStriped
      />
    </div>
    <div className="mb-3">
      <h2 className="h6">Themed, striped and animated</h2>
      <Progress
        value={75}
        size={select('Size', sizes, 'md')}
        theme="success"
        isStriped
        isAnimated
      />
    </div>
    <div className="mb-3">
      <h2 className="h6">Alternative (ProgressAlt)</h2>
      <ProgressAlt value={0} size={select('Size', sizes, 'md')} theme="secondary" />
    </div>
  </Container>
));
