'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDotdotdot = require('react-dotdotdot');

var _reactDotdotdot2 = _interopRequireDefault(_reactDotdotdot);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _is_future = require('date-fns/is_future');

var _is_future2 = _interopRequireDefault(_is_future);

var _ = require('../../');

var _icons = require('../Icon/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PostCard = function PostCard(_ref) {
  var _ref$actions = _ref.actions,
      actions = _ref$actions === undefined ? [] : _ref$actions,
      className = _ref.className,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === undefined ? 'D MMM [-] HH:mm' : _ref$dateFormat,
      footerButton = _ref.footerButton,
      inspirationActions = _ref.inspirationActions,
      isDraft = _ref.isDraft,
      isInvalid = _ref.isInvalid,
      metaPreview = _ref.metaPreview,
      onApprove = _ref.onApprove,
      post = _ref.post,
      other = _objectWithoutProperties(_ref, ['actions', 'className', 'dateFormat', 'footerButton', 'inspirationActions', 'isDraft', 'isInvalid', 'metaPreview', 'onApprove', 'post']);

  var blockClass = 'post-card';
  var classes = (0, _classnames2.default)(className, blockClass, _defineProperty({}, blockClass + '--draft', isDraft), _defineProperty({}, blockClass + '--invalid', isInvalid));
  var showPostMedia = post.media && post.media.length > 0;
  var showMetaPreview = (!post.media || post.media && post.media.length === 0) && metaPreview && metaPreview.url;
  var showMediaEmpty = post.media && post.media.length === 0 && (!metaPreview || metaPreview && !metaPreview.url);

  return React.createElement(
    _.Card,
    _extends({}, other, { className: classes }),
    React.createElement(
      'div',
      { className: blockClass + '__header' },
      post.socialIdentity && React.createElement(
        'div',
        { style: { width: '35px', height: '35px', minWidth: '35px', minHeight: '35px' } },
        React.createElement(_.Avatar, { url: post.socialIdentity.avatar, provider: post.socialIdentity.provider })
      ),
      React.createElement(
        'div',
        { className: 'mx-1', style: { height: '74px', minWidth: 0, flex: 1 } },
        React.createElement(
          'h1',
          { className: blockClass + '__title' },
          post.title
        ),
        React.createElement(
          'div',
          { className: blockClass + '__date' },
          (!post.date || (0, _is_future2.default)(post.date)) && React.createElement(_.Icon, { name: 'schedule', size: 20, color: '#adb5bd' }),
          post.date ? (0, _format2.default)(post.date, dateFormat) : 'Unscheduled'
        ),
        post.campaign && React.createElement(
          _.Badge,
          { className: 'campaign-tag', color: post.campaign.color },
          post.campaign.name
        )
      ),
      actions.length > 0 && React.createElement(_.Dropdown, {
        render: function render(isOpen, onToggle) {
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(_.Button, { icon: 'menu', onClick: onToggle, size: 'sm', theme: 'light' }),
            React.createElement(
              _.DropdownMenu,
              {
                footer: post.creator ? 'Creator: ' + post.creator : null,
                isOpen: isOpen,
                onClick: onToggle,
                position: 'right',
                theme: 'dark'
              },
              actions.map(function (action, i) {
                return React.createElement(
                  _.DropdownItem,
                  { key: i, onClick: action.onClick },
                  action.icon && React.createElement(_.Icon, { name: action.icon, className: 'mr-1' }),
                  action.label
                );
              })
            )
          );
        }
      })
    ),
    React.createElement(
      'div',
      { className: blockClass + '__content' },
      React.createElement(
        _reactDotdotdot2.default,
        { clamp: 5 },
        React.createElement('div', {
          dangerouslySetInnerHTML: {
            __html: post.content
          }
        })
      )
    ),
    React.createElement(
      'div',
      { className: blockClass + '__media' },
      showPostMedia && React.createElement(_.PostMedia, { media: post.media }),
      showMetaPreview && React.createElement(_.URLMetaPreview, _extends({}, metaPreview, { className: 'border-top border-bottom' })),
      showMediaEmpty && React.createElement(
        'div',
        { className: 'post-media--empty' },
        'No media'
      )
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
          isActive: action.isActive,
          name: action.icon,
          title: action.icon,
          theme: action.theme,
          onClick: function onClick() {
            if (!action.isActive) action.onClick();
          }
        });
      })
    ),
    footerButton && React.createElement(
      'div',
      { className: blockClass + '__footer' },
      footerButton
    )
  );
};

exports.default = PostCard;