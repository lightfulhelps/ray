"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("..");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var stories = (0, _react2.storiesOf)('CampaignTemplateCard', module);
stories.addDecorator(_addonKnobs.withKnobs);
var props = {
  image: 'https://images.unsplash.com/photo-1564046438318-e700bf2c9344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  title: 'End of Year Fundrasing Appeal',
  description: 'This 20-post template is big...but dedicate your time and creativity to it and you will create a great digital fundraising appeal!'
};
var props2 = {
  image: 'https://images.unsplash.com/photo-1566410864800-87d35084f611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  title: 'Create your own',
  ctaText: 'Create your template',
  description: "Don't use a template, do your own thing."
};
var props3 = {
  image: 'https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80',
  title: 'Short story template',
  description: 'A quick, easy to fill out guide to help you decide what you want to say before, during and after your event/appeal/campaign.'
};
stories.add('CampaignTemplateCard', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "mb-3"
  }, "CampaignTemplateCard"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    lg: 4,
    md: 6,
    sm: 8,
    className: "mb-3"
  }, _react["default"].createElement(_.CampaignTemplateCard, props)), _react["default"].createElement(_.Col, {
    lg: 4,
    md: 6,
    sm: 8,
    className: "mb-3"
  }, _react["default"].createElement(_.CampaignTemplateCard, _extends({}, props3, {
    isSelected: true
  }))), _react["default"].createElement(_.Col, {
    lg: 4,
    md: 6,
    sm: 8,
    className: "mb-3"
  }, _react["default"].createElement(_.CampaignTemplateCard, props2)), _react["default"].createElement(_.Col, {
    lg: 4,
    md: 6,
    sm: 8,
    className: "mb-3"
  }, _react["default"].createElement(_.CampaignTemplateCard, props)), _react["default"].createElement(_.Col, {
    lg: 4,
    md: 6,
    sm: 8,
    className: "mb-3"
  }, _react["default"].createElement(_.CampaignTemplateCard, props3))));
});