"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Collapse', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Collapse"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    sm: 6
  }, _react["default"].createElement("p", {
    className: "mb-4"
  }, "The collapse component does not have any styling but you can apply any Bootstrap classes to change it's appearance. Here they are also displayed inside a Card component."), _react["default"].createElement(_.Card, {
    className: "shadow p-2"
  }, _react["default"].createElement(_.Collapse, {
    className: "pb-1 mb-1 border-bottom",
    defaultOpen: true,
    label: "Social profiles"
  }, _react["default"].createElement("div", null, "Commodo lectus a VHS urna vivamus mattis quisque VHS porttitor enim lectus rutrum organic eu sodales. Mauris nam +1 massa massa diam sapien San Francisco auctor mauris non eu vinyl sem pharetra.")), _react["default"].createElement(_.Collapse, {
    className: "pb-1 mb-1 border-bottom",
    label: "Labels"
  }, _react["default"].createElement("div", null, "Fixie eu congue auctor tellus cursus mauris curabitur noise-rock amet maecenas magna pharetra lectus integer donec bahn mi diam morbi. Risus morbi vulputate ornare sodales mustache elementum sodales porta eget maecenas massa adipiscing keytar amet sagittis porta leo.")), _react["default"].createElement(_.Collapse, {
    label: "Stories"
  }, _react["default"].createElement("div", null, "DIY eu non nec congue quam leo lectus vinyl sem pharetra undefined ut tempus ligula amet artisan sodales. Nibh leo congue ipsum quisque enim indie lectus sapien nibh ut risus rutrum donec brunch proin cursus porttitor arcu duis."))))));
});