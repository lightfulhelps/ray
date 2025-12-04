import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Progress, ProgressAlt } from '../';
import sizes from './utils/sizes';

import '../../scss/ray.scss';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: 'number',
    },
    size: {
      control: 'select',
      options: Object.values(sizes),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 25,
    size: 'md',
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">Progress</h1>
      <div className="mb-3">
        <h2 className="h6">Default</h2>
        <Progress value={args.value} size={args.size} />
      </div>
      <div className="mb-3">
        <h2 className="h6">With Label</h2>
        <Progress value={33} size={args.size}>
          33%
        </Progress>
      </div>
      <div className="mb-3">
        <h2 className="h6">Themed and striped</h2>
        <Progress
          value={50}
          size={args.size}
          theme="warning"
          isStriped
        />
      </div>
      <div className="mb-3">
        <h2 className="h6">Themed, striped and animated</h2>
        <Progress
          value={75}
          size={args.size}
          theme="success"
          isStriped
          isAnimated
        />
      </div>
      <div className="mb-3">
        <h2 className="h6">Alternative (ProgressAlt)</h2>
        <ProgressAlt value={100} size={args.size} theme="secondary" />
      </div>
    </Container>
  ),
};
