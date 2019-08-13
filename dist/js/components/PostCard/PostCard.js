'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _html = require('react-lines-ellipsis/lib/html');

var _html2 = _interopRequireDefault(_html);

var _responsiveHOC = require('react-lines-ellipsis/lib/responsiveHOC');

var _responsiveHOC2 = _interopRequireDefault(_responsiveHOC);

var _dateFns = require('date-fns');

var _ = require('../..');

var _icons = require('../Icon/icons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveHTMLEllipsis = (0, _responsiveHOC2.default)()(_html2.default);

var PostCard = (_temp2 = _class = function (_React$Component) {
  _inherits(PostCard, _React$Component);

  function PostCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCard.__proto__ || Object.getPrototypeOf(PostCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isTruncated: true
    }, _this.handleToggleTruncate = function () {
      _this.setState(function (prevState) {
        return { isTruncated: !prevState.isTruncated };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$actions = _props.actions,
          actions = _props$actions === undefined ? [] : _props$actions,
          className = _props.className,
          _props$dateFormat = _props.dateFormat,
          dateFormat = _props$dateFormat === undefined ? 'HH:mm [on] dddd, D MMMM' : _props$dateFormat,
          errors = _props.errors,
          isDraft = _props.isDraft,
          isInvalid = _props.isInvalid,
          metaPreview = _props.metaPreview,
          post = _props.post,
          other = _objectWithoutProperties(_props, ['actions', 'className', 'dateFormat', 'errors', 'isDraft', 'isInvalid', 'metaPreview', 'post']);

      var classes = (0, _classnames2.default)(className, 'post-card shadow', { 'post-card--draft': isDraft }, { 'post-card--invalid': isInvalid });

      if (!post) return null;

      var showMetaPreview = (!post.media || post.media && post.media.length === 0) && metaPreview && metaPreview.url;
      var showMediaEmpty = post.media && post.media.length === 0 && (!metaPreview || metaPreview && !metaPreview.url);
      // const showPostErrors = errors && errors.length > 0;

      var defaultLineClamp = 3;
      var allLinesClamp = 9999;

      var borderColor = void 0;

      switch (post.state) {
        case 'scheduled':
          borderColor = 'info';
          break;
        case 'published':
          borderColor = 'success';
          break;
        case 'review':
          borderColor = 'warning';
          break;
        default:
          borderColor = '';
          break;
      }

      return React.createElement(
        _.Card,
        _extends({}, other, { className: classes }),
        React.createElement('div', { className: 'bg-' + borderColor + ' rounded-top-sm', style: { height: '4px' } }),
        errors && errors.length > 0 && React.createElement(
          'div',
          { className: 'mt-1' },
          errors.map(function (error, i) {
            return React.createElement(
              'div',
              {
                key: i,
                className: 'text-xs font-weight-bold mb-1 mx-2 bg-danger py-half px-1 rounded-sm text-white'
              },
              error
            );
          })
        ),
        React.createElement(
          'div',
          { className: 'd-flex flex-column flex-md-row justify-content-between px-2 py-1 border-bottom' },
          React.createElement(
            'div',
            { className: 'flex-fill' },
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
                  post.date ? ((0, _dateFns.isFuture)(post.date) ? 'Scheduled for' : 'Published') + ' ' + (0, _dateFns.format)(post.date, dateFormat) : 'Unscheduled'
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
                maxLine: this.state.isTruncated ? defaultLineClamp : allLinesClamp,
                ellipsis: '...',
                basedOn: 'words'
              }),
              React.createElement(
                'div',
                { className: 'd-flex justify-content-end', onClick: this.handleToggleTruncate },
                this.state.isTruncated ? React.createElement(
                  'div',
                  { className: 'cursor-pointer text-underline' },
                  'See more'
                ) : React.createElement(
                  'div',
                  { className: 'cursor-pointer text-underline' },
                  'See less'
                )
              )
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
          { className: 'py-1 px-2 d-flex flex-column flex-md-row justify-content-between' },
          React.createElement(
            'div',
            { className: 'd-flex align-items-center mb-2 mb-md-0' },
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
    }
  }]);

  return PostCard;
}(React.Component), _class.propTypes = {
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    icon: function icon() {
      return (typeof _icons.bpfrpt_proptype_IconNameType === 'function' ? _icons.bpfrpt_proptype_IconNameType : _propTypes2.default.shape(_icons.bpfrpt_proptype_IconNameType)).apply(this, arguments);
    },
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired
  }).isRequired),
  className: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string,
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired),
  isDraft: _propTypes2.default.bool,
  isInvalid: _propTypes2.default.bool,
  metaPreview: _propTypes2.default.shape({
    description: _propTypes2.default.string,
    image: _propTypes2.default.string,
    title: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired
  }),
  post: _propTypes2.default.shape({
    content: _propTypes2.default.string.isRequired,
    date: _propTypes2.default.oneOfType([function () {
      return (typeof Date === 'function' ? _propTypes2.default.instanceOf(Date) : _propTypes2.default.any).apply(this, arguments);
    }, _propTypes2.default.number, _propTypes2.default.string]),
    id: _propTypes2.default.string.isRequired,
    media: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      type: _propTypes2.default.string.isRequired,
      url: _propTypes2.default.string.isRequired
    }).isRequired),
    metrics: _propTypes2.default.arrayOf(_propTypes2.default.any),
    socialIdentity: _propTypes2.default.shape({
      avatar: _propTypes2.default.string,
      displayName: _propTypes2.default.string,
      id: _propTypes2.default.string.isRequired,
      provider: _propTypes2.default.oneOf(['facebook', 'twitter', 'linkedin']).isRequired,
      username: _propTypes2.default.string
    }),
    state: _propTypes2.default.string.isRequired,
    tags: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired
  }).isRequired
}, _temp2);
exports.default = PostCard;