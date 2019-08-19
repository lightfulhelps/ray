'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

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

var config = exports.config = {
  contentLines: 5,
  tagLimit: 3
};

var ResponsiveHTMLEllipsis = (0, _responsiveHOC2.default)()(_html2.default);

var InspirationPostCard = function InspirationPostCard(_ref) {
  var className = _ref.className,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === undefined ? 'D MMM YY [-] HH:mm' : _ref$dateFormat,
      inspirationActions = _ref.inspirationActions,
      metaPreview = _ref.metaPreview,
      post = _ref.post,
      other = _objectWithoutProperties(_ref, ['className', 'dateFormat', 'inspirationActions', 'metaPreview', 'post']);

  var blockClass = 'inspiration-post-card';
  var classes = (0, _classnames2.default)(className, blockClass);
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
        { className: 'mx-1', style: { height: '72px', minWidth: 0, flex: 1 } },
        React.createElement(
          'h1',
          { className: blockClass + '__title' },
          post.title
        ),
        React.createElement(
          'div',
          { className: blockClass + '__date' },
          post.date ? (0, _format2.default)(post.date, dateFormat) : 'Unscheduled'
        )
      )
    ),
    React.createElement(
      'div',
      { className: blockClass + '__content' },
      React.createElement(ResponsiveHTMLEllipsis, {
        unsafeHTML: post.content.replace(/\n/g, '<br />'),
        maxLine: config.contentLines,
        ellipsis: '...',
        basedOn: 'words'
      })
    ),
    React.createElement(
      'div',
      { className: blockClass + '__media' },
      post.media && post.media.length > 0 && React.createElement(_.PostMedia, { media: post.media }),
      showMetaPreview && React.createElement(_.URLMetaPreview, _extends({}, metaPreview, { className: 'border-top border-bottom' })),
      showMediaEmpty && React.createElement(
        'div',
        { className: 'post-media--empty' },
        'No media'
      )
    ),
    post.tags && post.tags.length > 0 && React.createElement(
      'div',
      { className: blockClass + '__tags d-flex align-items-center bg-gray-200 px-2 py-1' },
      React.createElement(
        'div',
        { className: 'd-flex align-items-center text-gray-900 font-weight-bold mr-1' },
        post.tags.length,
        ' ',
        React.createElement(_.Icon, { name: 'tag', theme: 'gray-500', isActive: true, style: { marginLeft: '2px' } })
      ),
      React.createElement(
        'div',
        { className: 'd-flex flex-fill', style: { minWidth: 0 } },
        post.tags.slice(0, config.tagLimit).map(function (tag, i) {
          return React.createElement(
            _.Tag,
            {
              className: 'text-xs ' + (i < config.tagLimit - 1 ? 'mr-1' : ''),
              key: i,
              theme: 'light'
            },
            tag
          );
        })
      ),
      post.tags.length > config.tagLimit && React.createElement(
        'div',
        { className: blockClass + '__tags-more' },
        '+',
        post.tags.length - config.tagLimit
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
    )
  );
};

exports.default = InspirationPostCard;