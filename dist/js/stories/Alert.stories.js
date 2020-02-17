"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _themes = _interopRequireDefault(require("./utils/themes"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Alert', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Alert"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, null, _react["default"].createElement(_.Alert, {
    className: "mb-2",
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'primary')
  }, "A simple alert\u2014check it out!"), _react["default"].createElement(_.Alert, {
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'primary')
  }, _react["default"].createElement("h4", {
    className: "alert-heading"
  }, "Well done!"), "An alert with a heading!"))));
});