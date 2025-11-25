import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col, SearchInput, SearchSuggest } from '../';

import '../../scss/ray.scss';

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

const meta: Meta<typeof SearchInput> = {
  title: 'Search',
  component: SearchInput,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: () => (
    <Container>
      <h1 className="my-6">Search Input</h1>
      <Row>
        <Col className="mb-3">
          <SearchInput
            placeholder="Search"
            value=""
            onSearch={() => console.log('console.log', 'onSearch')}
            onChange={() => console.log('console.log', 'onChange')}
            onClear={() => console.log('console.log', 'onClear')}
          />
        </Col>
      </Row>
    </Container>
  ),
};

export const SearchSuggestStory: Story = {
  render: () => (
    <Container>
      <h1 className="my-6">Search Suggest</h1>
      <Row>
        <Col className="mb-3">
          <SearchSuggest
            className="w-100"
            isLoading={false}
            isOpen
            limit={5}
            onClear={() => console.log('console.log', 'Clear')}
            onRemove={() => console.log('console.log', 'Remove')}
            onSelect={() => console.log('console.log', 'Select')}
            options={breeds}
            search=""
            title="Recent Searches"
          />
        </Col>
      </Row>
    </Container>
  ),
};
