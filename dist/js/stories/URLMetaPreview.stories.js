"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('URLMetaPreview', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "URLMetaPreview"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    xs: 4
  }, _react["default"].createElement(_.URLMetaPreview, {
    title: (0, _addonKnobs.text)('Title', "National Living Wage 'fails to cover families' basic needs"),
    description: (0, _addonKnobs.text)('Description', "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says."),
    image: (0, _addonKnobs.text)('Image', 'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg'),
    url: (0, _addonKnobs.text)('URL', 'https://www.bbc.co.uk/news/business-45242008'),
    isVertical: (0, _addonKnobs["boolean"])('Vertical', false)
  }))));
});