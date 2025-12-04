import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, Chevron } from '../';

import '../../scss/ray.scss';

const directions = {
  Left: 'left',
  Right: 'right',
  Up: 'up',
  Down: 'down',
} as const;

const meta: Meta<typeof Chevron> = {
  title: 'Chevron',
  component: Chevron,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: Object.values(directions),
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Chevron>;

export const Default: Story = {
  args: {
    direction: 'left',
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">Chevron</h1>
      <Row>
        <Col>
          <Chevron {...args} />
        </Col>
      </Row>
    </Container>
  ),
};
