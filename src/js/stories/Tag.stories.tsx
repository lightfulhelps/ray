import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, Tag } from '../';
import themes from './utils/themes';
import allIcons, { IconNameType } from '../components/Icon/icons';

import '../../scss/ray.scss';
import translation from '../locale/i18n';

const stories = storiesOf('Tag', module);

const icons: { [key: string]: IconNameType } = {};

Object.keys(allIcons).forEach(key => {
  icons[key as IconNameType] = key as IconNameType;
});

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Container>
    <h1 className="my-6">Tag</h1>
    <Row>
      <Col>
        <h2 className="h4 mb-3">Default</h2>
        <Tag
          icon={boolean('Show Icon', false) ? select('Icon', icons, 'media') : undefined}
          theme={select('Theme', themes, 'dark')}
        >
          {text('Text', translation.t('tag:text'))}
        </Tag>
      </Col>
      <Col>
        <h2 className="h4 mb-3">Outline</h2>
        <Tag
          icon={boolean('Show Icon', false) ? select('Icon', icons, 'media') : undefined}
          isOutline
          theme={select('Theme', themes, 'dark')}
        >
          {text('Text', translation.t('tag:text'))}
        </Tag>
      </Col>
      <Col>
        <h2 className="h4 mb-3">With Remove</h2>
        <Tag
          icon={boolean('Show Icon', false) ? select('Icon', icons, 'media') : undefined}
          theme={select('Theme', themes, 'dark')}
          onRemove={action('Remove')}
        >
          {text('Text', translation.t('tag:text'))}
        </Tag>
      </Col>
    </Row>
  </Container>
));
