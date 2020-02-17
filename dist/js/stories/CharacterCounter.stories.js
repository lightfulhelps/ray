"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('CharacterCounter', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "CharacterCounter"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, null, _react["default"].createElement(_.CharacterCounter, {
    text: (0, _addonKnobs.text)('Text', 'Type something here'),
    max: (0, _addonKnobs.number)('Max', 100)
  }))));
});