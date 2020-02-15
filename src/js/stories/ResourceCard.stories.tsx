import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Col, ResourceCard } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('ResourceCard', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">ResourceCard</h1>
    <p className="mb-4">
      The ResourceCard component is intended to behave as a link which is clickable all over. The
      default tag is an anchor and you can use props/element attributes related to anchors.
    </p>
    <Row>
      <Col sm={6} md={4} lg={2} className="mb-2 mb-lg-0">
        <ResourceCard
          title="Social media toolkit for charities Social media toolkit for charities"
          campaign="Fireside Storytelling"
          gradientStart="#27B0CC"
          gradientEnd="#4513BB"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-2 mb-lg-0">
        <ResourceCard
          title="Social media toolkit for charities"
          campaign="Fireside Storytelling"
          gradientStart="#27B0CC"
          gradientEnd="#4513BB"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-2 mb-lg-0">
        <ResourceCard
          title="Social media toolkit for charities"
          campaign="Fireside Storytelling"
          gradientStart="#27B0CC"
          gradientEnd="#4513BB"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-2 mb-lg-0">
        <ResourceCard
          title="#GivingTueday logo and asset #GivingTueday logo"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-2 mb-lg-0">
        <ResourceCard
          title="How can you give as a charity"
          campaign="Giving Tuesday"
          gradientStart="#972F53"
          gradientEnd="#10287A"
          href="https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png"
          target="_blank"
        />
      </Col>
      <Col sm={6} md={4} lg={2} className="mb-2 mb-lg-0">
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
));
