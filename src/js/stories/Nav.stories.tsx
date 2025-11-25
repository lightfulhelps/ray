import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, Nav, NavItem, NavLink } from '../';

import '../../scss/ray.scss';

const meta: Meta<typeof Nav> = {
  title: 'Nav',
  component: Nav,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    isFill: {
      control: 'boolean',
    },
    isPills: {
      control: 'boolean',
    },
    isTabs: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
    isFill: false,
    isPills: false,
    isTabs: true,
  },
  render: (args) => (
  <Container>
    <h1 className="my-6">Nav</h1>
    <Row>
      <Col>
        <Nav
          withoutWrapper
          isFill={args.isFill}
          isPills={args.isPills}
          isTabs={args.isTabs}
        >
          <NavItem>
            <NavLink
              href="#"
              type="button"
              theme="primary"
              isActive
            >
              First
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Second</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Third</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" isDisabled>
              Fourth
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  </Container>
  ),
};
