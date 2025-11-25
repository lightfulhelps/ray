import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, Icon } from '../';
import icons, { IconNameType } from '../components/Icon/icons';

import '../../scss/ray.scss';

const meta: Meta<typeof Icon> = {
  title: 'Icons',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: () => (
  <Container>
    <h1 className="my-6">Icons</h1>
    <Row>
      <Col>
        <div className="bg-white py-4 shadow">
          <Row>
            {Object.keys(icons).map(icon => (
              <Col key={icon} xs={6} sm={4} md={3} lg={2} className="text-center mb-5">
                <Icon
                  name={icon as IconNameType}
                  size={24}
                  color="#adb5bd"
                  hoverColor="#212529"
                />
                <div>{icon}</div>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
  ),
};
