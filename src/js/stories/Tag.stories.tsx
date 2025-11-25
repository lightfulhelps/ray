import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, Tag } from '../';
import themes from './utils/themes';
import allIcons, { IconNameType } from '../components/Icon/icons';

import '../../scss/ray.scss';

const icons: { [key: string]: IconNameType } = {};

Object.keys(allIcons).forEach(key => {
  icons[key as IconNameType] = key as IconNameType;
});

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(themes),
    },
    icon: {
      control: 'select',
      options: Object.keys(icons),
    },
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    theme: 'dark',
    children: 'Social For Good',
  },
  render: (args) => (
  <Container>
    <h1 className="my-6">Tag</h1>
    <Row>
      <Col>
        <h2 className="h4 mb-3">Default</h2>
        <Tag theme={args.theme} icon={args.icon}>
          {args.children}
        </Tag>
      </Col>
      <Col>
        <h2 className="h4 mb-3">Outline</h2>
        <Tag theme={args.theme} icon={args.icon} isOutline>
          {args.children}
        </Tag>
      </Col>
      <Col>
        <h2 className="h4 mb-3">With Remove</h2>
        <Tag theme={args.theme} icon={args.icon} onRemove={args.onRemove}>
          {args.children}
        </Tag>
      </Col>
    </Row>
  </Container>
  ),
};
