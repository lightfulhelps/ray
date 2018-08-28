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
  var avatarUrl = _ref.avatarUrl,
      campaign = _ref.campaign,
      className = _ref.className,
      content = _ref.content,
      date = _ref.date,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === undefined ? 'D MMM [at] HH:mm' : _ref$dateFormat,
      inspirationActions = _ref.inspirationActions,
      isDraft = _ref.isDraft,
      isInvalid = _ref.isInvalid,
      media = _ref.media,
      metaPreview = _ref.metaPreview,
      socialProvider = _ref.socialProvider,
      title = _ref.title;

  var baseClass = 'post-card';
  var classes = (0, _classnames2.default)(className, baseClass, _defineProperty({}, baseClass + '--draft', isDraft), _defineProperty({}, baseClass + '--invalid', isInvalid));

  return React.createElement(
    _.Card,
    { className: classes },
    React.createElement(
      'div',
      { className: baseClass + '__header' },
      React.createElement(
        'div',
        { style: { width: '35px', height: '35px' } },
        React.createElement(_.Avatar, { url: avatarUrl, provider: socialProvider })
      ),
      React.createElement(
        'div',
        { className: 'mx-1' },
        React.createElement(
          'h1',
          { className: baseClass + '__title' },
          title
        ),
        date && React.createElement(
          'div',
          { className: baseClass + '__date' },
          (0, _format2.default)(date, dateFormat)
        ),
        campaign && React.createElement(
          _.Badge,
          { className: 'campaign-tag', color: campaign.color },
          campaign.name
        )
      )
    ),
    React.createElement(
      _reactDotdotdot2.default,
      { className: baseClass + '__content', clamp: 5 },
      content
    ),
    media && React.createElement(
      'div',
      { className: baseClass + '__media' },
      React.createElement(_.PostMedia, { media: media })
    ),
    metaPreview && React.createElement(
      'div',
      { className: baseClass + '__media border-top' },
      React.createElement(_.URLMetaPreview, metaPreview)
    ),
    inspirationActions && inspirationActions.length > 0 && React.createElement(
      'div',
      { className: baseClass + '__inspiration-actions' },
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
  avatarUrl: _propTypes2.default.string,
  campaign: _propTypes2.default.shape({
    color: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired
  }),
  className: _propTypes2.default.string,
  content: _propTypes2.default.string.isRequired,
  date: _propTypes2.default.oneOfType([function () {
    return (typeof Date === 'function' ? _propTypes2.default.instanceOf(Date) : _propTypes2.default.any).apply(this, arguments);
  }, _propTypes2.default.number, _propTypes2.default.string]),
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
  media: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    type: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired
  }).isRequired),
  metaPreview: _propTypes2.default.shape({
    description: _propTypes2.default.string,
    image: _propTypes2.default.string,
    title: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired
  }),
  socialProvider: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired
};
exports.default = PostCard;