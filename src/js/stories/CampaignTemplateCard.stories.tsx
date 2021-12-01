import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container, Row, Col, CampaignTemplateCard } from '..';

import '../../scss/ray.scss';

const stories = storiesOf('CampaignTemplateCard', module);

stories.addDecorator(withKnobs);

const props = {
  image:
    'https://images.unsplash.com/photo-1564046438318-e700bf2c9344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  title: 'End of Year Fundrasing Appeal',
  description:
    'This 20-post template is big...but dedicate your time and creativity to it and you will create a great digital fundraising appeal!',
};

const props2 = {
  image:
    'https://images.unsplash.com/photo-1566410864800-87d35084f611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  title: 'Create your own',
  ctaText: 'Create your template',
  description: "Don't use a template, do your own thing.",
};

const props3 = {
  image:
    'https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80',
  title: 'Short story template',
  description:
    'A quick, easy to fill out guide to help you decide what you want to say before, during and after your event/appeal/campaign.',
};

stories.add('CampaignTemplateCard', () => (
  <Container>
    <h1 className="mb-5">CampaignTemplateCard</h1>
    <Row>
      <Col lg={4} md={6} sm={8} className="mb-5">
        <CampaignTemplateCard {...props} />
      </Col>
      <Col lg={4} md={6} sm={8} className="mb-5">
        <CampaignTemplateCard {...props3} isSelected />
      </Col>
      <Col lg={4} md={6} sm={8} className="mb-5">
        <CampaignTemplateCard {...props2} />
      </Col>
      <Col lg={4} md={6} sm={8} className="mb-5">
        <CampaignTemplateCard {...props} />
      </Col>
      <Col lg={4} md={6} sm={8} className="mb-5">
        <CampaignTemplateCard {...props3} />
      </Col>
    </Row>
  </Container>
));
