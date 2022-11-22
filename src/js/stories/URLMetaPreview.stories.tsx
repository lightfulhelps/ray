import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, URLMetaPreview } from '../';

import '../../scss/ray.scss';
import translation from '../locale/i18n';

const stories = storiesOf('URLMetaPreview', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">URLMetaPreview</h1>
    <Row>
      <Col xs={4}>
        <URLMetaPreview
          title={text('Title', translation.t('urlMetaPreview:title'))}
          description={text('Description', translation.t('urlMetaPreview:description'))}
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
