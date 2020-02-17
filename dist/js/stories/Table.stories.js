"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _sizes = _interopRequireDefault(require("./utils/sizes"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Table', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Table"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, null, _react["default"].createElement(_.Table, {
    isBordered: (0, _addonKnobs["boolean"])('Bordered', false),
    isBorderless: (0, _addonKnobs["boolean"])('Borderless', false),
    isStriped: (0, _addonKnobs["boolean"])('Striped', false),
    isHoverable: (0, _addonKnobs["boolean"])('Hoverable', false),
    isResponsive: (0, _addonKnobs["boolean"])('Responsive', false),
    size: (0, _addonKnobs.select)('Size', _sizes["default"], 'md')
  }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "#"), _react["default"].createElement("th", null, "First Name"), _react["default"].createElement("th", null, "Last Name"), _react["default"].createElement("th", null, "Username"))), _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", {
    scope: "row"
  }, "1"), _react["default"].createElement("td", null, "Mark"), _react["default"].createElement("td", null, "Otto"), _react["default"].createElement("td", null, "@mdo")), _react["default"].createElement("tr", null, _react["default"].createElement("th", {
    scope: "row"
  }, "2"), _react["default"].createElement("td", null, "Jacob"), _react["default"].createElement("td", null, "Thornton"), _react["default"].createElement("td", null, "@fat")), _react["default"].createElement("tr", null, _react["default"].createElement("th", {
    scope: "row"
  }, "3"), _react["default"].createElement("td", null, "Larry"), _react["default"].createElement("td", null, "the Bird"), _react["default"].createElement("td", null, "@twitter")))))));
});