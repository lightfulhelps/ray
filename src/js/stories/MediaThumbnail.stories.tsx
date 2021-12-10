import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container, Row, Col, MediaThumbnail } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('MediaThumbnail', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">MediaThumbnail</h1>
    <Row>
      <Col xs={6} md={3} lg={2} className="mb-4 mb-md-0">
        <h5 className="mb-3">Default</h5>
        <MediaThumbnail
          src="https://images.unsplash.com/photo-1624613949648-ea13ecd7165f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          checkbox
          onClick={action('Click')}
        />
      </Col>
      <Col xs={6} md={3} lg={2} className="mb-4 mb-md-0">
        <h5 className="mb-3">Selected</h5>
        <MediaThumbnail
          isSelected={boolean('Selected', true)}
          src="https://images.unsplash.com/photo-1488406752364-7f29679f30f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          checkbox
          onClick={action('Click')}
        />
      </Col>
      <Col xs={6} md={3} lg={2} className="mb-4 mb-md-0">
        <h5 className="mb-3">Disabled</h5>
        <MediaThumbnail
          isDisabled={boolean('Disabled', true)}
          src="https://images.unsplash.com/photo-1624530249604-78f5fb90cdd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          checkbox
          onClick={action('Click')}
        />
      </Col>
      <Col xs={6} md={3} lg={2} className="mb-4 mb-md-0">
        <h5 className="mb-3">No checkbox</h5>
        <MediaThumbnail
          src="https://images.unsplash.com/photo-1624493176575-7a5a3b74460a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          onClick={action('Click')}
          checkbox={boolean('Checkbox', false)}
        />
      </Col>
    </Row>
  </Container>
));
