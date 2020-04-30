import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, URLMetaPreview } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('URLMetaPreview', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-4">URLMetaPreview</h1>
    <Row>
      <Col xs={4}>
        <URLMetaPreview
          title={text('Title', "National Living Wage 'fails to cover families' basic needs")}
          description={text(
            'Description',
            "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says."
          )}
          image={text(
            'Image',
            'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg'
          )}
          url={text('URL', 'https://www.bbc.co.uk/news/business-45242008')}
          isVertical={boolean('Vertical', false)}
        />
      </Col>
    </Row>
  </Container>
));
