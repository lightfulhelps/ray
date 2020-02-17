"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.config = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _html = _interopRequireDefault(require("react-lines-ellipsis/lib/html"));

var _responsiveHOC = _interopRequireDefault(require("react-lines-ellipsis/lib/responsiveHOC"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var config = {
  contentLines: 5,
  tagLimit: 3
};
exports.config = config;
var ResponsiveHTMLEllipsis = (0, _responsiveHOC["default"])()(_html["default"]);

var InspirationPostCard = function InspirationPostCard(_ref) {
  var className = _ref.className,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? 'D MMM YY [-] HH:mm' : _ref$dateFormat,
      inspirationActions = _ref.inspirationActions,
      metaPreview = _ref.metaPreview,
      post = _ref.post,
      other = _objectWithoutProperties(_ref, ["className", "dateFormat", "inspirationActions", "metaPreview", "post"]);

  var blockClass = 'inspiration-post-card';
  var classes = (0, _classnames["default"])(className, blockClass);
  var showMetaPreview = (!post.media || post.media && post.media.length === 0) && metaPreview && metaPreview.url;
  var showMediaEmpty = post.media && post.media.length === 0 && (!metaPreview || metaPreview && !metaPreview.url);
  return React.createElement(_.Card, _extends({}, other, {
    className: classes
  }), React.createElement("div", {
    className: "".concat(blockClass, "__header")
  }, post.socialIdentity && React.createElement("div", {
    style: {
      width: '35px',
      height: '35px',
      minWidth: '35px',
      minHeight: '35px'
    }
  }, React.createElement(_.Avatar, {
    url: post.socialIdentity.avatar,
    provider: post.socialIdentity.provider
  })), React.createElement("div", {
    className: "mx-1",
    style: {
      minWidth: 0,
      flex: 1
    }
  }, React.createElement("h1", {
    className: "".concat(blockClass, "__title")
  }, post.title), React.createElement("div", {
    className: "".concat(blockClass, "__date")
  }, post.date ? (0, _format["default"])(post.date, dateFormat) : 'Unscheduled'))), React.createElement("div", {
    className: "".concat(blockClass, "__content")
  }, React.createElement(ResponsiveHTMLEllipsis, {
    unsafeHTML: post.content.replace(/\n/g, '<br />'),
    maxLine: config.contentLines,
    ellipsis: "...",
    basedOn: "words"
  })), React.createElement("div", {
    className: "".concat(blockClass, "__media")
  }, post.media && post.media.length > 0 && React.createElement(_.PostMedia, {
    media: post.media
  }), showMetaPreview && React.createElement(_.URLMetaPreview, _extends({}, metaPreview, {
    className: "border-top border-bottom"
  })), showMediaEmpty && React.createElement("div", {
    className: "post-media--empty"
  }, "No media")), post.tags && post.tags.length > 0 && React.createElement("div", {
    className: "".concat(blockClass, "__tags d-flex align-items-center bg-gray-200 px-2 py-1")
  }, React.createElement("div", {
    className: "d-flex align-items-center text-gray-900 font-weight-bold mr-1"
  }, post.tags.length, ' ', React.createElement(_.Icon, {
    name: "tag",
    theme: "gray-500",
    isActive: true,
    style: {
      marginLeft: '2px'
    }
  })), React.createElement("div", {
    className: "d-flex flex-fill",
    style: {
      minWidth: 0
    }
  }, post.tags.slice(0, config.tagLimit).map(function (tag, i) {
    return React.createElement(_.Tag, {
      className: "text-xs ".concat(i < config.tagLimit - 1 ? 'mr-1' : ''),
      key: i,
      theme: "light"
    }, tag);
  })), post.tags.length > config.tagLimit && React.createElement("div", {
    className: "".concat(blockClass, "__tags-more")
  }, "+", post.tags.length - config.tagLimit)), post.metrics && Object.keys(post.metrics).length > 0 && React.createElement("div", {
    className: "".concat(blockClass, "__metrics")
  }, Object.keys(post.metrics).map(function (key) {
    return React.createElement("div", {
      key: key,
      className: "".concat(blockClass, "__metric")
    }, React.createElement("span", null, post.metrics && post.metrics[key]), " ", key);
  })), inspirationActions && inspirationActions.length > 0 && React.createElement("div", {
    className: "".concat(blockClass, "__inspiration-actions")
  }, inspirationActions.map(function (action, i) {
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
  })));
};

var _default = InspirationPostCard;
exports["default"] = _default;