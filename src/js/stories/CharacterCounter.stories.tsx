import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, CharacterCounter } from '../';

import '../../scss/ray.scss';

const meta: Meta<typeof CharacterCounter> = {
  title: 'CharacterCounter',
  component: CharacterCounter,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    text: {
      control: 'text',
    },
    max: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCounter>;

export const Default: Story = {
  args: {
    text: 'Type something here',
    max: 100,
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">CharacterCounter</h1>
      <Row>
        <Col>
          <CharacterCounter {...args} />
        </Col>
      </Row>
    </Container>
  ),
};
