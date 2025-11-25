import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, URLMetaPreview } from '../';

import '../../scss/ray.scss';

const meta: Meta<typeof URLMetaPreview> = {
  title: 'URLMetaPreview',
  component: URLMetaPreview,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    image: {
      control: 'text',
    },
    url: {
      control: 'text',
    },
    isVertical: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof URLMetaPreview>;

export const Default: Story = {
  args: {
    title: "National Living Wage 'fails to cover families' basic needs",
    description: "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says.",
    image: 'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg',
    url: 'https://www.bbc.co.uk/news/business-45242008',
    isVertical: false,
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">URLMetaPreview</h1>
      <Row>
        <Col xs={4}>
          <URLMetaPreview {...args} />
        </Col>
      </Row>
    </Container>
  ),
};
