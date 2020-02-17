"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _themes = _interopRequireDefault(require("./utils/themes"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Tag', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Tag"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, null, _react["default"].createElement("h2", {
    className: "h4 mb-2"
  }, "Default"), _react["default"].createElement(_.Tag, {
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'dark')
  }, (0, _addonKnobs.text)('Text', 'Social For Good'))), _react["default"].createElement(_.Col, null, _react["default"].createElement("h2", {
    className: "h4 mb-2"
  }, "Outline"), _react["default"].createElement(_.Tag, {
    isOutline: true,
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'dark')
  }, (0, _addonKnobs.text)('Text', 'Social For Good'))), _react["default"].createElement(_.Col, null, _react["default"].createElement("h2", {
    className: "h4 mb-2"
  }, "With Remove"), _react["default"].createElement(_.Tag, {
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'dark'),
    onRemove: (0, _addonActions.action)('Remove')
  }, (0, _addonKnobs.text)('Text', 'Social For Good')))));
});