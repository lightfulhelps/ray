"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("..");

var _icons = _interopRequireDefault(require("../components/Icon/icons"));

var _themes = _interopRequireDefault(require("./utils/themes"));

var _sizes = _interopRequireDefault(require("./utils/sizes"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Button', module);
var icons = {};
Object.keys(_icons["default"]).forEach(function (key) {
  icons[key] = key;
});
var iconPositions = {
  left: 'left',
  right: 'right'
};
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Button"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    xs: 6
  }, _react["default"].createElement("h2", {
    className: "h4 mb-2"
  }, "Regular."), _react["default"].createElement(_.Button, {
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'primary'),
    isBlock: (0, _addonKnobs["boolean"])('Block', false),
    isDisabled: (0, _addonKnobs["boolean"])('Disabled', false),
    isOutline: (0, _addonKnobs["boolean"])('Outline', false),
    onClick: (0, _addonActions.action)('clicked'),
    size: (0, _addonKnobs.select)('Size', _sizes["default"], 'md'),
    icon: (0, _addonKnobs["boolean"])('Show Icon', false) ? (0, _addonKnobs.select)('Icon', icons, 'media') : undefined,
    iconPosition: (0, _addonKnobs["boolean"])('Show Icon', false) ? (0, _addonKnobs.select)('Icon Position', iconPositions, 'left') : undefined,
    iconTheme: (0, _addonKnobs["boolean"])('Show Icon', false) && (0, _addonKnobs["boolean"])('Use theme?', false) ? (0, _addonKnobs.select)('Icon Theme', _themes["default"], 'light') : undefined
  }, (0, _addonKnobs.text)('Text', 'Click Me'))), _react["default"].createElement(_.Col, {
    xs: 6
  }, _react["default"].createElement("h2", {
    className: "h4 mb-2"
  }, "Icon Only."), _react["default"].createElement(_.Button, {
    theme: (0, _addonKnobs.select)('Theme', _themes["default"], 'primary'),
    isDisabled: (0, _addonKnobs["boolean"])('Disabled', false),
    isOutline: (0, _addonKnobs["boolean"])('Outline', false),
    size: (0, _addonKnobs.select)('Size', _sizes["default"], 'md'),
    icon: (0, _addonKnobs.select)('Icon', icons, 'media'),
    iconTheme: (0, _addonKnobs["boolean"])('Show Icon', false) && (0, _addonKnobs["boolean"])('Use theme?', false) ? (0, _addonKnobs.select)('Icon Theme', _themes["default"], 'light') : undefined
  }))));
});