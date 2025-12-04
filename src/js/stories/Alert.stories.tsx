import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Container, Row, Col, Alert } from '../';
import themes from './utils/themes';

import '../../scss/ray.scss';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(themes),
    },
    hideIcon: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    theme: 'success',
    hideIcon: false,
    children: 'A simple alert—check it out!',
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">Alert</h1>
      <Row>
        <Col>
          <Alert className="mb-3" {...args}>
            A simple alert—check it out!
          </Alert>
          <Alert
            theme={args.theme}
            header="Well done!"
            hideIcon={args.hideIcon}
          >
            An alert with a heading!
          </Alert>
        </Col>
      </Row>
    </Container>
  ),
};
