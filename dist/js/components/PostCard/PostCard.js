'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _html = require('react-lines-ellipsis/lib/html');

var _html2 = _interopRequireDefault(_html);

var _responsiveHOC = require('react-lines-ellipsis/lib/responsiveHOC');

var _responsiveHOC2 = _interopRequireDefault(_responsiveHOC);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _ = require('../..');

var _icons = require('../Icon/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ResponsiveHTMLEllipsis = (0, _responsiveHOC2.default)()(_html2.default);

var PostCard = function PostCard(_ref) {
  var _ref$actions = _ref.actions,
      actions = _ref$actions === undefined ? [] : _ref$actions,
      className = _ref.className,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === undefined ? 'HH:mm [on] dddd, D MMMM' : _ref$dateFormat,
      errors = _ref.errors,
      isDraft = _ref.isDraft,
      isInvalid = _ref.isInvalid,
      metaPreview = _ref.metaPreview,
      post = _ref.post,
      other = _objectWithoutProperties(_ref, ['actions', 'className', 'dateFormat', 'errors', 'isDraft', 'isInvalid', 'metaPreview', 'post']);

  var classes = (0, _classnames2.default)(className, 'post-card shadow', { 'post-card--draft': isDraft }, { 'post-card--invalid': isInvalid });
  var showMetaPreview = (!post.media || post.media && post.media.length === 0) && metaPreview && metaPreview.url;
  var showMediaEmpty = post.media && post.media.length === 0 && (!metaPreview || metaPreview && !metaPreview.url);
  // const showPostErrors = errors && errors.length > 0;

  var borderColor = void 0;

  switch (post.state) {
    case 'scheduled':
      borderColor = 'warning';
      break;
    case 'published':
      borderColor = 'info';
      break;
    case 'review':
      borderColor = 'danger';
      break;
    default:
      borderColor = '';
      break;
  }

  return React.createElement(
    _.Card,
    _extends({}, other, { className: classes }),
    React.createElement('div', { className: 'bg-' + borderColor + ' rounded-top-sm', style: { height: '4px' } }),
    React.createElement(
      'div',
      { className: 'd-flex flex-column flex-md-row justify-content-between px-2 py-1 border-bottom' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'd-flex mb-half' },
          post.socialIdentity && React.createElement(_.Avatar, {
            className: 'flex-shrink-0',
            url: post.socialIdentity.avatar,
            provider: post.socialIdentity.provider,
            style: { width: '40px', height: '40px' }
          }),
          React.createElement(
            'div',
            { className: 'ml-1' },
            React.createElement(
              'div',
              { className: 'h6 mb-0', 'data-test-id': 'post-card-date' },
              post.date ? 'Scheduled for ' + (0, _format2.default)(post.date, dateFormat) : 'Unscheduled'
            ),
            post.socialIdentity && React.createElement(
              'div',
              { className: 'text-sm' },
              post.socialIdentity.displayName
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'text-sm mb-1', 'data-test-id': 'post-card-content' },
          React.createElement(ResponsiveHTMLEllipsis, {
            unsafeHTML: post.content.replace(/\n/g, '<br />'),
            maxLine: 3,
            ellipsis: '...',
            basedOn: 'words'
          })
        ),
        post.tags && post.tags.length > 0 && React.createElement(
          'div',
          null,
          post.tags.map(function (tag, i) {
            return React.createElement(
              _.Tag,
              {
                className: 'text-xs ' + (i === 0 ? '' : 'ml-half  '),
                isOutline: true,
                key: i,
                theme: 'gray-600'
              },
              tag
            );
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'post-card__media-wrap flex-shrink-0 rounded-sm overflow-hidden' },
        post.media && post.media.length > 0 && React.createElement(_.PostMedia, { media: post.media }),
        showMetaPreview && React.createElement(_.URLMetaPreview, _extends({}, metaPreview, { className: 'border-top border-bottom' })),
        showMediaEmpty && React.createElement(
          'div',
          { className: 'post-media--empty' },
          'No media'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'py-1 px-2 d-flex justify-content-between' },
      React.createElement(
        'div',
        { className: 'd-flex align-items-center' },
        post.metrics && post.metrics.length > 0 && post.metrics.map(function (metric) {
          return React.createElement(
            'div',
            { className: 'd-flex align-items-center text-sm mr-1', key: metric.key },
            metric.icon && React.createElement(_.Icon, { className: 'mr-half', isActive: true, name: metric.icon, size: 20 }),
            ' ',
            metric.value,
            ' ',
            metric.key
          );
        })
      ),
      React.createElement(
        'div',
        null,
        actions.length > 0 && actions.map(function (action, i) {
          return React.createElement(
            _.Button,
            {
              key: i,
              theme: 'dark',
              size: 'sm',
              isOutline: true,
              className: 'ml-1',
              onClick: action.onClick
            },
            action.label
          );
        })
      )
    )
  );
};

exports.default = PostCard;