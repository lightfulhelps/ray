"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Search', module);
stories.addDecorator(_addonKnobs.withKnobs);
var breeds = ['Abyssinian', 'Aegean', 'American Curl', 'American Bobtail', 'American Shorthair', 'American Wirehair', 'Arabian Mau', 'Australian Mist', 'Asian', 'Asian Semi-longhair', 'Balinese', 'Bambino', 'Bengal', 'Birman', 'Bombay', 'Brazilian Shorthair', 'British Semi-longhair', 'British Shorthair', 'British Longhair', 'Burmese', 'Burmilla', 'California Spangled', 'Chantilly-Tiffany', 'Chartreux', 'Chausie', 'Cheetoh', 'Colorpoint Shorthair', 'Cornish Rex', 'Cymric', 'Cyprus', 'Devon Rex', 'Donskoy', 'Dragon Li', 'Dwarf cat', 'Egyptian Mau', 'European Shorthair', 'Exotic Shorthair', 'Foldex', 'German Rex', 'Havana Brown', 'Highlander', 'Himalayan', 'Japanese Bobtail', 'Javanese', 'Karelian Bobtail', 'Khao Manee', 'Korat', 'Korean Bobtail', 'Korn Ja', 'Kurilian Bobtail', 'LaPerm', 'Lykoi', 'Maine Coon', 'Manx', 'Mekong Bobtail', 'Minskin', 'Munchkin', 'Nebelung', 'Napoleon', 'Norwegian Forest cat', 'Ocicat', 'Ojos Azules', 'Oregon Rex', 'Oriental Bicolor', 'Oriental Shorthair', 'Oriental Longhair', 'PerFold', 'Persian (Modern Persian Cat)', 'Persian (Traditional Persian Cat)', 'Peterbald', 'Pixie-bob', 'Raas', 'Ragamuffin', 'Ragdoll', 'Russian Blue', 'Russian White, Black and Tabby', 'Sam Sawet', 'Savannah', 'Scottish Fold', 'Selkirk Rex', 'Serengeti', 'Serrade petit', 'Siamese', 'Siberian', 'Singapura', 'Snowshoe', 'Sokoke', 'Somali', 'Sphynx', 'Suphalak', 'Thai', 'Thai Lilac', 'Tonkinese', 'Toyger', 'Turkish Angora', 'Turkish Van', 'Ukrainian Levkoy'];
stories.add('Input', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Search Input"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    className: "mb-2"
  }, _react["default"].createElement(_.SearchInput, {
    value: (0, _addonKnobs.text)('Search', ''),
    onChange: (0, _addonActions.action)('Change'),
    onSearch: (0, _addonActions.action)('Search'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Search...')
  }))));
});
stories.add('Suggest', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Search Suggest"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    className: "mb-2"
  }, _react["default"].createElement(_.SearchSuggest, {
    className: "w-100",
    isLoading: (0, _addonKnobs["boolean"])('Loading', false),
    isOpen: true,
    limit: (0, _addonKnobs.number)('Limit', 5),
    onClear: (0, _addonActions.action)('Clear'),
    onRemove: (0, _addonActions.action)('Remove'),
    onSelect: (0, _addonActions.action)('Select'),
    options: (0, _addonKnobs["boolean"])('Has options?', true) ? breeds : [],
    search: (0, _addonKnobs.text)('Search', ''),
    title: (0, _addonKnobs.text)('Title', 'Recent Searches')
  }))));
});