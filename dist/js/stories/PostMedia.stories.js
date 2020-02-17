"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('PostMedia', module);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "PostMedia"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement("div", {
    className: "shadow",
    style: {
      height: '170px'
    }
  }, _react["default"].createElement(_.PostMedia, {
    media: []
  }))), _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement("div", {
    className: "shadow",
    style: {
      height: '170px'
    }
  }, _react["default"].createElement(_.PostMedia, {
    media: [{
      type: 'video',
      url: 'https://cdn.filestackcontent.com/CyicFureSgWSlpL3zdsx'
    }]
  }))), _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement("div", {
    className: "shadow",
    style: {
      height: '170px'
    }
  }, _react["default"].createElement(_.PostMedia, {
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80'
    }]
  }))), _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement("div", {
    className: "shadow",
    style: {
      height: '170px'
    }
  }, _react["default"].createElement(_.PostMedia, {
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80'
    }]
  }))), _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement("div", {
    className: "shadow",
    style: {
      height: '170px'
    }
  }, _react["default"].createElement(_.PostMedia, {
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=2250&q=80'
    }]
  }))), _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement("div", {
    className: "shadow",
    style: {
      height: '170px'
    }
  }, _react["default"].createElement(_.PostMedia, {
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=2250&q=80'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6fc9d727accaab5052cd754f634e768&auto=format&fit=crop&w=2251&q=80'
    }]
  })))));
});