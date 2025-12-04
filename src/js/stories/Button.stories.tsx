import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { merge } from 'lodash';
import { Container, Row, Col, Button } from '..';
import allIcons, { IconNameType } from '../components/Icon/icons';
import themes from './utils/themes';
import sizes from './utils/sizes';

import '../../scss/ray.scss';

const buttonThemes = merge(themes, { alternative: 'alternative' });

const icons: { [key: string]: IconNameType } = {};

Object.keys(allIcons).forEach(key => {
  icons[key as IconNameType] = key as IconNameType;
});

const iconPositions: { [key: string]: 'left' | 'right' } = {
  left: 'left',
  right: 'right',
};

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(buttonThemes),
    },
    size: {
      control: 'select',
      options: Object.values(sizes),
    },
    icon: {
      control: 'select',
      options: Object.keys(icons),
    },
    iconPosition: {
      control: 'select',
      options: Object.values(iconPositions),
    },
    iconTheme: {
      control: 'select',
      options: Object.values(themes),
    },
    forceSolidColor: {
      control: 'boolean',
    },
    isBlock: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isOutline: {
      control: 'boolean',
    },
    animateGradient: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    theme: 'primary',
    size: 'md',
    forceSolidColor: false,
    isBlock: false,
    isDisabled: false,
    isOutline: false,
    animateGradient: false,
    loading: false,
    children: 'Click Me',
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">Button</h1>
      <Row>
        <Col xs={6}>
          <h2 className="h4 mb-3">Regular.</h2>
          <Button {...args}>
            {args.children}
          </Button>
        </Col>
        <Col xs={6}>
          <h2 className="h4 mb-3">Icon Only.</h2>
          <Button
            theme={args.theme}
            forceSolidColor={args.forceSolidColor}
            isDisabled={args.isDisabled}
            isOutline={args.isOutline}
            loading={args.loading}
            size={args.size}
            icon={args.icon || 'media'}
            iconTheme={args.iconTheme}
          />
        </Col>
      </Row>
    </Container>
  ),
};
