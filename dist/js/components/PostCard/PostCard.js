'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDotdotdot = require('react-dotdotdot');

var _reactDotdotdot2 = _interopRequireDefault(_reactDotdotdot);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PostCard = function PostCard(_ref) {
  var className = _ref.className,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === undefined ? 'D MMM [at] HH:mm' : _ref$dateFormat,
      inspirationActions = _ref.inspirationActions,
      isDraft = _ref.isDraft,
      isInvalid = _ref.isInvalid,
      metaPreview = _ref.metaPreview,
      post = _ref.post;

  var blockClass = 'post-card';
  var classes = (0, _classnames2.default)(className, blockClass, _defineProperty({}, blockClass + '--draft', isDraft), _defineProperty({}, blockClass + '--invalid', isInvalid));

  return React.createElement(
    _.Card,
    { className: classes },
    React.createElement(
      'div',
      { className: blockClass + '__header' },
      post.socialIdentity && React.createElement(
        'div',
        { style: { width: '35px', height: '35px', minWidth: '35px', minHeight: '35px' } },
        React.createElement(_.Avatar, { url: post.socialIdentity.avatar, provider: post.socialProvider })
      ),
      React.createElement(
        'div',
        { className: 'mx-1', style: { height: '64px', minWidth: 0 } },
        React.createElement(
          'h1',
          { className: blockClass + '__title' },
          post.title
        ),
        post.date && React.createElement(
          'div',
          { className: blockClass + '__date' },
          (0, _format2.default)(post.date, dateFormat)
        ),
        post.campaign && React.createElement(
          _.Badge,
          { className: 'campaign-tag', color: post.campaign.color },
          post.campaign.name
        )
      )
    ),
    React.createElement(
      _reactDotdotdot2.default,
      { className: blockClass + '__content', clamp: 5 },
      post.content
    ),
    post.media && React.createElement(
      'div',
      { className: blockClass + '__media' },
      React.createElement(_.PostMedia, { media: post.media })
    ),
    metaPreview && React.createElement(
      'div',
      { className: blockClass + '__media border-top' },
      React.createElement(_.URLMetaPreview, metaPreview)
    ),
    post.metrics && Object.keys(post.metrics).length > 0 && React.createElement(
      'div',
      { className: blockClass + '__metrics' },
      Object.keys(post.metrics).map(function (key) {
        return React.createElement(
          'div',
          { key: key, className: blockClass + '__metric' },
          React.createElement(
            'span',
            null,
            post.metrics && post.metrics[key]
          ),
          ' ',
          key
        );
      })
    ),
    inspirationActions && inspirationActions.length > 0 && React.createElement(
      'div',
      { className: blockClass + '__inspiration-actions' },
      inspirationActions.map(function (action, i) {
        return React.createElement(_.Icon, {
          key: i,
          name: action.icon,
          className: 'cursor-pointer',
          color: action.isActive ? action.activeColor : action.color,
          hoverColor: action.isActive ? action.activeColor : '#343a40',
          onClick: action.onClick
        });
      })
    )
  );
};

PostCard.propTypes = {
  className: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string,
  inspirationActions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    activeColor: _propTypes2.default.string,
    color: _propTypes2.default.string,
    icon: _propTypes2.default.string.isRequired,
    isActive: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
  }).isRequired),
  isDraft: _propTypes2.default.bool,
  isInvalid: _propTypes2.default.bool,
  metaPreview: _propTypes2.default.shape({
    description: _propTypes2.default.string,
    image: _propTypes2.default.string,
    title: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired
  }),
  post: _propTypes2.default.shape({
    campaign: _propTypes2.default.shape({
      color: _propTypes2.default.string.isRequired,
      name: _propTypes2.default.string.isRequired
    }),
    content: _propTypes2.default.string.isRequired,
    date: _propTypes2.default.oneOfType([function () {
      return (typeof Date === 'function' ? _propTypes2.default.instanceOf(Date) : _propTypes2.default.any).apply(this, arguments);
    }, _propTypes2.default.number, _propTypes2.default.string]),
    media: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      type: _propTypes2.default.string.isRequired,
      url: _propTypes2.default.string.isRequired
    }).isRequired),
    metrics: _propTypes2.default.objectOf(_propTypes2.default.number.isRequired),
    socialIdentity: _propTypes2.default.shape({
      avatar: _propTypes2.default.string,
      displayName: _propTypes2.default.string,
      id: _propTypes2.default.string.isRequired,
      username: _propTypes2.default.string
    }),
    socialProvider: _propTypes2.default.string,
    title: _propTypes2.default.string.isRequired
  }).isRequired
};
exports.default = PostCard;