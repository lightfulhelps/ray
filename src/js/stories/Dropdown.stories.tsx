import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Container,
  Row,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Icon,
} from '../';

import '../../scss/ray.scss';

const menuThemes = {
  Light: 'light',
  Dark: 'dark',
} as const;

const menuPositions = {
  Left: 'left',
  Right: 'right',
} as const;

const sizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
} as const;

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    isBlock: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    isBlock: false,
  },
  render: (args) => (
    <Container>
      <h1 className="my-6">Dropdown</h1>
      <Row>
        <div className="col-6">
          <Dropdown
            isBlock={args.isBlock}
            render={(isOpen, onToggle) => (
              <>
                <DropdownToggle
                  isBlock={args.isBlock}
                  isOpen={isOpen}
                  onClick={onToggle}
                  size="md"
                >
                  Dropdown
                </DropdownToggle>
                <DropdownMenu
                  isOpen={isOpen}
                  onClick={onToggle}
                  position="left"
                  theme="light"
                >
                  <DropdownItem onClick={() => console.log('console.log', 'Edit')}>
                    <Icon className="me-1" name="edit" />
                    Edit
                  </DropdownItem>
                  <DropdownItem onClick={() => console.log('console.log', 'Comment')}>
                    <Icon className="me-1" name="comment" />
                    Comment
                  </DropdownItem>
                  <DropdownItem isDisabled onClick={() => console.log('console.log', 'Delete')}>
                    <Icon className="me-1" name="delete" />
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </>
            )}
          />
        </div>
        <div className="col-6">
          <Dropdown
            render={(isOpen, onToggle) => (
              <>
                <Button
                  icon="menu"
                  theme="primary"
                  isOutline
                  onClick={onToggle}
                  size="md"
                />
                <DropdownMenu
                  isOpen={isOpen}
                  onClick={onToggle}
                  position="left"
                  theme="light"
                  footer="Created by: Bruno"
                >
                  <DropdownItem isHeader>Header</DropdownItem>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem isHeader>Header</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                  <DropdownItem>Option 4</DropdownItem>
                </DropdownMenu>
              </>
            )}
          />
        </div>
      </Row>
    </Container>
  ),
};
