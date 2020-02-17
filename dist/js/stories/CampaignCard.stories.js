"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('CampaignCard', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "CampaignCard"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 3,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.CampaignCard, {
    title: "Social media toolkit for charities",
    status: "Live",
    cover: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    tag: "a",
    href: "http://foo.com"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 3,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.CampaignCard, {
    title: "Social media toolkit for charities",
    status: "Live",
    cover: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    tag: "a",
    href: "http://foo.com"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 3,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.CampaignCard, {
    title: "Social media toolkit for charities",
    status: "Draft",
    cover: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    tag: "a",
    href: "http://foo.com"
  })), _react["default"].createElement(_.Col, {
    sm: 6,
    md: 4,
    lg: 3,
    className: "mb-2 mb-lg-0"
  }, _react["default"].createElement(_.CampaignCard, {
    title: "#GivingTueday logo and asset",
    status: "Draft",
    cover: "https://images.unsplash.com/photo-1509460691319-135d8cfa14f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    tag: "a",
    href: "http://foo.com"
  }))));
});