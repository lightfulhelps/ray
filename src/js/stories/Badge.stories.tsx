import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, Badge } from '../';
import themes from './utils/themes';

import '../../scss/ray.scss';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(themes),
    },
    isOutline: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    theme: 'primary',
    isOutline: false,
    children: 'Hello',
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">Badge</h1>
      <Row>
        <Col>
          <Badge {...args}>
            Hello
          </Badge>
        </Col>
      </Row>
    </Container>
  ),
};
