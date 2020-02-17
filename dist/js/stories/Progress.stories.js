"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Progress', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Progress"), _react["default"].createElement("div", {
    className: "mb-2"
  }, _react["default"].createElement("h2", {
    className: "h6"
  }, "Default"), _react["default"].createElement(_.Progress, {
    value: (0, _addonKnobs.number)('Value 1', 25)
  })), _react["default"].createElement("div", {
    className: "mb-2"
  }, _react["default"].createElement("h2", {
    className: "h6"
  }, "With Label"), _react["default"].createElement(_.Progress, {
    value: 33
  }, "33%")), _react["default"].createElement("div", {
    className: "mb-2"
  }, _react["default"].createElement("h2", {
    className: "h6"
  }, "Themed and striped"), _react["default"].createElement(_.Progress, {
    value: (0, _addonKnobs.number)('Value 2', 50),
    theme: "warning",
    isStriped: true
  })), _react["default"].createElement("div", {
    className: "mb-2"
  }, _react["default"].createElement("h2", {
    className: "h6"
  }, "Themed, striped and animated"), _react["default"].createElement(_.Progress, {
    value: 75,
    theme: "success",
    isStriped: true,
    isAnimated: true
  })));
});