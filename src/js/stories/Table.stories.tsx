import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, Table } from '../';

import '../../scss/ray.scss';

const sizes = {
  Small: 'sm',
  Large: 'lg',
} as const;

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    isBordered: {
      control: 'boolean',
    },
    isBorderless: {
      control: 'boolean',
    },
    isStriped: {
      control: 'boolean',
    },
    isHoverable: {
      control: 'boolean',
    },
    isResponsive: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: [...Object.values(sizes), undefined],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    isBordered: false,
    isBorderless: false,
    isStriped: false,
    isHoverable: false,
    isResponsive: false,
    size: undefined,
  },
  render: (args) => (
  <Container>
    <h1 className="my-6">Table</h1>
    <Row>
      <Col>
        <Table {...args}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
  ),
};
