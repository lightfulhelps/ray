"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("..");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('InspirationPostCard', module);
var defaultDate = new Date();
var socialProviders = {
  twitter: 'Twitter',
  facebook: 'Facebook',
  linkedin: 'LinkedIn'
};
var media = [{
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
}];
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "InspirationPostCard"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    md: 6
  }, _react["default"].createElement(_.InspirationPostCard, {
    post: {
      title: (0, _addonKnobs.text)('Title', 'Hope For Children'),
      date: (0, _addonKnobs.date)('Date', defaultDate),
      socialIdentity: {
        id: '123',
        avatar: (0, _addonKnobs.text)('Avatar URL', 'https://randomuser.me/api/portraits/women/47.jpg'),
        provider: (0, _addonKnobs.select)('Social Provider', socialProviders, 'twitter')
      },
      content: '<a href="">@Buttle UK</a> helped more than 3,000 vulnerable families buy beds for their <a href="">#children</a> last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
      media: media,
      metrics: {
        likes: 12,
        comments: 30,
        shares: 69,
        clicks: 30
      },
      tags: []
    },
    inspirationActions: [{
      icon: 'follow',
      onClick: (0, _addonActions.action)('Follow'),
      theme: (0, _addonKnobs["boolean"])('Following', true) ? 'primary' : 'gray-500'
    }, {
      icon: 'like',
      onClick: (0, _addonActions.action)('Like'),
      theme: (0, _addonKnobs["boolean"])('Like', true) ? 'primary' : 'gray-500'
    }, {
      icon: 'repost',
      isActive: false,
      theme: 'gray-500'
    }, {
      icon: 'reply',
      isActive: false,
      theme: 'gray-500'
    }, {
      icon: 'create',
      isActive: false,
      theme: 'gray-500'
    }]
  }))));
});
stories.add('Ghost', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "PostCardGhost"), _react["default"].createElement(_.Row, null, _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement(_.PostCardGhost, null)), _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement(_.PostCardGhost, null)), _react["default"].createElement(_.Col, {
    className: "mb-2",
    md: 6,
    lg: 4
  }, _react["default"].createElement(_.PostCardGhost, null))));
});