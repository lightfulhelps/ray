"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _html = _interopRequireDefault(require("react-lines-ellipsis/lib/html"));

var _responsiveHOC = _interopRequireDefault(require("react-lines-ellipsis/lib/responsiveHOC"));

var _dateFns = require("date-fns");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResponsiveHTMLEllipsis = (0, _responsiveHOC["default"])()(_html["default"]);

var PostCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostCard, _React$Component);

  function PostCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PostCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PostCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isTruncated: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleTruncate", function () {
      _this.setState(function (prevState) {
        return {
          isTruncated: !prevState.isTruncated
        };
      });
    });

    return _this;
  }

  _createClass(PostCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$actions = _this$props.actions,
          actions = _this$props$actions === void 0 ? [] : _this$props$actions,
          className = _this$props.className,
          _this$props$dateForma = _this$props.dateFormat,
          dateFormat = _this$props$dateForma === void 0 ? 'HH:mm [on] dddd, D MMMM' : _this$props$dateForma,
          errors = _this$props.errors,
          isDraft = _this$props.isDraft,
          isImported = _this$props.isImported,
          isInvalid = _this$props.isInvalid,
          metaPreview = _this$props.metaPreview,
          notesAction = _this$props.notesAction,
          _this$props$notesCoun = _this$props.notesCount,
          notesCount = _this$props$notesCoun === void 0 ? 0 : _this$props$notesCoun,
          post = _this$props.post,
          other = _objectWithoutProperties(_this$props, ["actions", "className", "dateFormat", "errors", "isDraft", "isImported", "isInvalid", "metaPreview", "notesAction", "notesCount", "post"]);

      var classes = (0, _classnames["default"])(className, 'post-card shadow', {
        'post-card--draft': isDraft
      }, {
        'post-card--invalid': isInvalid
      });
      if (!post) return null;
      var showMetaPreview = (!post.media || post.media && post.media.length === 0) && metaPreview && metaPreview.url;
      var showMediaEmpty = post.media && post.media.length === 0 && (!metaPreview || metaPreview && !metaPreview.url);
      var hasPostMetrics = post.metrics && post.metrics.length > 0;
      var defaultLineClamp = 3;
      var allLinesClamp = 9999;
      var borderColor;

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

      return React.createElement(_.Card, _extends({}, other, {
        className: classes
      }), React.createElement("div", {
        className: "bg-".concat(borderColor, " rounded-top-sm mb-1"),
        style: {
          height: '3px'
        }
      }), errors && errors.length > 0 && React.createElement("div", {
        className: "mb-1"
      }, errors.map(function (error, i) {
        return React.createElement("div", {
          key: i,
          className: (0, _classnames["default"])('d-flex align-items-center text-sm font-weight-bold mx-2 alert-danger p-1 rounded-sm', {
            'mb-1': i < errors.length - 1
          }),
          style: {
            lineHeight: 1.4
          }
        }, React.createElement(_.Icon, {
          className: "mr-half flex-shrink-0",
          name: "alert",
          theme: "danger",
          size: 18
        }), error);
      })), isImported && React.createElement("div", {
        className: "post-card__imported px-1 py-half rounded-sm text-sm alert-info font-weight-normal"
      }, "This post was imported from outside of Lightful. Link clicks are not tracked."), React.createElement("div", {
        className: "d-flex flex-column flex-md-row justify-content-between px-2 pb-2 pt-1 border-bottom"
      }, React.createElement("div", {
        className: "flex-fill"
      }, React.createElement("div", {
        className: "d-flex mb-1"
      }, post.socialIdentity && React.createElement(_.Avatar, {
        className: "flex-shrink-0",
        url: post.socialIdentity.avatar,
        provider: post.socialIdentity.provider,
        providerSize: "lg",
        style: {
          width: '45px',
          height: '45px'
        }
      }), React.createElement("div", {
        className: "ml-half"
      }, React.createElement("div", {
        className: "h6 mb-0",
        "data-test-id": "post-card-date"
      }, post.date ? "".concat(post.state === 'published' ? 'Published' : 'Scheduled for', " ").concat((0, _dateFns.format)(post.date, dateFormat)) : 'Unscheduled'), post.socialIdentity && React.createElement("div", {
        className: "text-sm"
      }, post.socialIdentity.displayName))), React.createElement("div", {
        className: "text-sm mb-1 post-card__content",
        "data-test-id": "post-card-content",
        onClick: this.handleToggleTruncate
      }, React.createElement(ResponsiveHTMLEllipsis, {
        unsafeHTML: post.content.replace(/\n/g, '<br />'),
        maxLine: this.state.isTruncated ? defaultLineClamp : allLinesClamp,
        ellipsisHTML: "<span class=\"text-underline cursor-pointer font-weight-bold\">See more</span>",
        basedOn: "words"
      })), React.createElement("div", {
        className: "d-flex flex-wrap"
      }, post.campaign && React.createElement(_.Badge, {
        className: "d-flex align-items-center mb-1 mb-lg-0 mr-1 badge-pill",
        color: post.campaign.color
      }, React.createElement(_.Icon, {
        className: "mr-half",
        name: "storyBuilder"
      }), "Story: ", post.campaign.name), post.tags && post.tags.length > 0 && post.tags.map(function (tag, i) {
        return React.createElement(_.Tag, {
          className: "text-xs mr-half mb-1 mb-lg-0 ".concat(i === 0 ? '' : ''),
          isOutline: true,
          key: i,
          theme: "gray-600"
        }, tag);
      }))), React.createElement("div", {
        className: (0, _classnames["default"])('post-card__media-wrap flex-shrink-0 overflow-hidden', {
          'h-100': showMetaPreview
        })
      }, post.media && post.media.length > 0 && React.createElement(_.PostMedia, {
        media: post.media
      }), showMetaPreview && React.createElement(_.URLMetaPreview, _extends({}, metaPreview, {
        className: "border",
        isVertical: true
      })), showMediaEmpty && React.createElement("div", {
        className: "post-media--empty"
      }, "No media"))), React.createElement("div", {
        className: (0, _classnames["default"])('py-1 px-2 d-flex flex-column flex-md-row align-items-center', notesAction || hasPostMetrics ? 'justify-content-between' : 'justify-content-end')
      }, (notesAction || hasPostMetrics) && React.createElement("div", {
        className: "d-flex align-items-center flex-wrap mt-1 mt-md-0 mb-2 mb-md-0"
      }, notesAction ? React.createElement("div", {
        className: "d-flex align-items-center cursor-pointer",
        "data-test-id": "post-card-notes",
        onClick: notesAction
      }, React.createElement(_.Icon, {
        className: "mr-half",
        name: "comment"
      }), ' ', React.createElement("span", {
        className: "text-underline text-sm font-weight-bold",
        style: {
          lineHeight: 1
        }
      }, "View notes (", notesCount.toString(), ")")) : post.metrics && post.metrics.length > 0 && post.metrics.map(function (metric) {
        return React.createElement("div", {
          className: "d-flex align-items-center text-sm mr-1",
          "data-test-id": "post-card-metric",
          key: metric.key
        }, metric.icon && React.createElement(_.Icon, {
          className: "mr-half",
          isActive: true,
          name: metric.icon,
          size: 20
        }), ' ', metric.value, " ", metric.key);
      })), React.createElement("div", {
        className: "d-flex flex-wrap"
      }, actions.length > 0 && actions.map(function (action, i) {
        return React.createElement(_.Button, _extends({
          key: i,
          theme: "gray-600",
          isOutline: true,
          size: "sm",
          className: "mr-1 mb-1 mr-md-0 ml-md-1 mb-lg-0",
          "data-test-id": "post-card-action"
        }, action));
      }))));
    }
  }]);

  return PostCard;
}(React.Component);

var _default = PostCard;
exports["default"] = _default;