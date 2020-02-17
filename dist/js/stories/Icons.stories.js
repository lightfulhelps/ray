"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _icons = _interopRequireDefault(require("../components/Icon/icons"));

var _themes = _interopRequireDefault(require("./utils/themes"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Icons', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Icons"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, null, _react["default"].createElement("div", {
    className: "bg-white py-4 shadow"
  }, _react["default"].createElement(_.Row, null, Object.keys(_icons["default"]).map(function (icon) {
    return _react["default"].createElement(_.Col, {
      key: icon,
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2,
      className: "text-center mb-4"
    }, _react["default"].createElement(_.Icon, {
      name: icon,
      size: (0, _addonKnobs.number)('Size', 24),
      color: (0, _addonKnobs.color)('Color', '#adb5bd'),
      hoverColor: (0, _addonKnobs.color)('Hover Color', '#212529'),
      theme: (0, _addonKnobs["boolean"])('Use theme?') && (0, _addonKnobs.select)('Theme', _themes["default"], 'primary')
    }), _react["default"].createElement("div", null, icon));
  }))))));
});