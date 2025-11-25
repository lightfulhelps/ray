import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, ResourceCard } from '../';

import '../../scss/ray.scss';

const meta: Meta<typeof ResourceCard> = {
  title: 'ResourceCard',
  component: ResourceCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ResourceCard>;

export const Default: Story = {
  render: () => (
  <Container>
    <h1 className="my-6">ResourceCard</h1>
    <p className="mb-5">
      The ResourceCard component is intended to behave as a link which is clickable all over. The
      default tag is an anchor and you can use props/element attributes related to anchors.
    </p>
    <Row>
      <Col sm={6} md={4} lg={2} className="mb-3 mb-lg-0">
        <ResourceCard
          title="Social media toolkit for charities Social media toolkit for charities"
          campaign="Fireside Storytelling"
          gradientStart="#27B0CC"
          gradientEnd="#4513BB"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
          imageForBackground="https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-3 mb-lg-0">
        <ResourceCard
          title="Social media toolkit for charities"
          campaign="Fireside Storytelling"
          gradientStart="#27B0CC"
          gradientEnd="#4513BB"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-3 mb-lg-0">
        <ResourceCard
          title="Social media toolkit for charities"
          campaign="Fireside Storytelling"
          gradientStart="#27B0CC"
          gradientEnd="#4513BB"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-3 mb-lg-0">
        <ResourceCard
          title="#GivingTueday logo and asset #GivingTueday logo"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-3 mb-lg-0">
        <ResourceCard
          title="How can you give as a charity"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-3 mb-lg-0">
        <ResourceCard
          title="How can you give as a charity"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
    </Row>
  </Container>
  ),
};
