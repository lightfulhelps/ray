"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _themes = _interopRequireDefault(require("./utils/themes"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Nav', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Nav"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, null, _react["default"].createElement(_.Nav, {
    isFill: (0, _addonKnobs["boolean"])('Fill', false),
    isPills: (0, _addonKnobs["boolean"])('Pills', false),
    isTabs: (0, _addonKnobs["boolean"])('Tabs', true)
  }, _react["default"].createElement(_.NavItem, null, _react["default"].createElement(_.NavLink, {
    href: "#",
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'primary'),
    isActive: (0, _addonKnobs["boolean"])('Active Link', true)
  }, "First")), _react["default"].createElement(_.NavItem, null, _react["default"].createElement(_.NavLink, {
    href: "#"
  }, "Second")), _react["default"].createElement(_.NavItem, null, _react["default"].createElement(_.NavLink, {
    href: "#",
    isDisabled: (0, _addonKnobs["boolean"])('Disabled Link', true)
  }, "Third"))))));
});