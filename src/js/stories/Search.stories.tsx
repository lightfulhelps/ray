import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { Container, Row, Col, SearchInput, SearchSuggest } from '../';

import '../../scss/ray.scss';

const stories = storiesOf('Search', module);

stories.addDecorator(withKnobs);

const breeds = [
  'Abyssinian',
  'Aegean',
  'American Curl',
  'American Bobtail',
  'American Shorthair',
  'American Wirehair',
  'Arabian Mau',
  'Australian Mist',
  'Asian',
  'Asian Semi-longhair',
  'Balinese',
  'Bambino',
  'Bengal',
  'Birman',
  'Bombay',
  'Brazilian Shorthair',
  'British Semi-longhair',
  'British Shorthair',
  'British Longhair',
  'Burmese',
  'Burmilla',
  'California Spangled',
  'Chantilly-Tiffany',
  'Chartreux',
  'Chausie',
  'Cheetoh',
  'Colorpoint Shorthair',
  'Cornish Rex',
  'Cymric',
  'Cyprus',
  'Devon Rex',
  'Donskoy',
  'Dragon Li',
  'Dwarf cat',
  'Egyptian Mau',
  'European Shorthair',
  'Exotic Shorthair',
  'Foldex',
  'German Rex',
  'Havana Brown',
  'Highlander',
  'Himalayan',
  'Japanese Bobtail',
  'Javanese',
  'Karelian Bobtail',
  'Khao Manee',
  'Korat',
  'Korean Bobtail',
  'Korn Ja',
  'Kurilian Bobtail',
  'LaPerm',
  'Lykoi',
  'Maine Coon',
  'Manx',
  'Mekong Bobtail',
  'Minskin',
  'Munchkin',
  'Nebelung',
  'Napoleon',
  'Norwegian Forest cat',
  'Ocicat',
  'Ojos Azules',
  'Oregon Rex',
  'Oriental Bicolor',
  'Oriental Shorthair',
  'Oriental Longhair',
  'PerFold',
  'Persian (Modern Persian Cat)',
  'Persian (Traditional Persian Cat)',
  'Peterbald',
  'Pixie-bob',
  'Raas',
  'Ragamuffin',
  'Ragdoll',
  'Russian Blue',
  'Russian White, Black and Tabby',
  'Sam Sawet',
  'Savannah',
  'Scottish Fold',
  'Selkirk Rex',
  'Serengeti',
  'Serrade petit',
  'Siamese',
  'Siberian',
  'Singapura',
  'Snowshoe',
  'Sokoke',
  'Somali',
  'Sphynx',
  'Suphalak',
  'Thai',
  'Thai Lilac',
  'Tonkinese',
  'Toyger',
  'Turkish Angora',
  'Turkish Van',
  'Ukrainian Levkoy',
];

stories.add('Input', () => (
  <Container>
    <h1 className="my-6">Search Input</h1>
    <Row>
      <Col className="mb-3">
        <SearchInput
          value={text('Search', '')}
          onChange={action('Change')}
          onSearch={action('Search')}
          placeholder={text('Placeholder', 'Search...')}
        />
      </Col>
    </Row>
  </Container>
));

stories.add('Suggest', () => (
  <Container>
    <h1 className="my-6">Search Suggest</h1>
    <Row>
      <Col className="mb-3">
        <SearchSuggest
          className="w-100"
          isLoading={boolean('Loading', false)}
          isOpen
          limit={number('Limit', 5)}
          onClear={action('Clear')}
          onRemove={action('Remove')}
          onSelect={action('Select')}
          options={boolean('Has options?', true) ? breeds : []}
          search={text('Search', '')}
          title={text('Title', 'Recent Searches')}
        />
      </Col>
    </Row>
  </Container>
));
