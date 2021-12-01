import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Col, CampaignCard } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('CampaignCard', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">CampaignCard</h1>
    <Row>
      <Col sm={6} md={4} lg={3} className="mb-2 mb-lg-0">
        <CampaignCard
          title="Social media toolkit for charities"
          state="Live"
          cover="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          tag="a"
          href="http://foo.com"
        />
      </Col>
      <Col sm={6} md={4} lg={3} className="mb-2 mb-lg-0">
        <CampaignCard
          title="Social media toolkit for charities"
          state="Live"
          cover="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          tag="a"
          href="http://foo.com"
        />
      </Col>
      <Col sm={6} md={4} lg={3} className="mb-2 mb-lg-0">
        <CampaignCard
          title="Social media toolkit for charities"
          state="Draft"
          cover="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          tag="a"
          href="http://foo.com"
        />
      </Col>
      <Col sm={6} md={4} lg={3} className="mb-2 mb-lg-0">
        <CampaignCard
          title="#GivingTueday logo and asset"
          state="Draft"
          cover="https://images.unsplash.com/photo-1509460691319-135d8cfa14f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          tag="a"
          href="http://foo.com"
        />
      </Col>
    </Row>
  </Container>
));
