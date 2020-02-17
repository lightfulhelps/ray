"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('ResourceCard', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "ResourceCard"), _react["default"].createElement("p", {
    className: "mb-4"
  }, "The ResourceCard component is intended to behave as a link which is clickable all over. The default tag is an anchor and you can use props/element attributes related to anchors."), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 2,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.ResourceCard, {
    title: "Social media toolkit for charities Social media toolkit for charities",
    campaign: "Fireside Storytelling",
    gradientStart: "#27B0CC",
    gradientEnd: "#4513BB",
    href: "https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png",
    target: "_blank",
    imageForBackground: "https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 2,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.ResourceCard, {
    title: "Social media toolkit for charities",
    campaign: "Fireside Storytelling",
    gradientStart: "#27B0CC",
    gradientEnd: "#4513BB",
    href: "https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png",
    target: "_blank"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 2,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.ResourceCard, {
    title: "Social media toolkit for charities",
    campaign: "Fireside Storytelling",
    gradientStart: "#27B0CC",
    gradientEnd: "#4513BB",
    href: "https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png",
    target: "_blank"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 2,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.ResourceCard, {
    title: "#GivingTueday logo and asset #GivingTueday logo",
    campaign: "Giving Tuesday",
    gradientStart: "#972F53",
    gradientEnd: "#10287A",
    href: "https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png",
    target: "_blank"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 2,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.ResourceCard, {
    title: "How can you give as a charity",
    campaign: "Giving Tuesday",
    gradientStart: "#972F53",
    gradientEnd: "#10287A",
    href: "https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png",
    target: "_blank"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 2,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.ResourceCard, {
    title: "How can you give as a charity",
    campaign: "Giving Tuesday",
    gradientStart: "#972F53",
    gradientEnd: "#10287A",
    href: "https://www.lightful.com/app/uploads/2019/07/make-social-media-easier-compose.png",
    target: "_blank"
  }))));
});