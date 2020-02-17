"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isHex = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var isHex = function isHex(string) {
  return /^#([0-9A-F]{3}){1,2}$/i.test(string);
};

exports.isHex = isHex;

var ResourceCard = function ResourceCard(_ref) {
  var campaign = _ref.campaign,
      className = _ref.className,
      gradientEnd = _ref.gradientEnd,
      gradientStart = _ref.gradientStart,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'a' : _ref$tag,
      title = _ref.title,
      imageForBackground = _ref.imageForBackground,
      other = _objectWithoutProperties(_ref, ["campaign", "className", "gradientEnd", "gradientStart", "tag", "title", "imageForBackground"]);

  var classes = (0, _classnames["default"])(className, 'resource-card', 'card p-1 rounded shadow h-100 bg-gray-900 text-decoration-none');
  var style = {};

  if (imageForBackground) {
    style.backgroundImage = "url('".concat(imageForBackground, "')");
    style.backgroundPosition = 'center';
    style.backgroundSize = 'cover';
    style.backgroundRepeat = 'no-repeat';
  } else if (gradientStart && isHex(gradientStart) && gradientEnd && isHex(gradientEnd)) {
    style.backgroundImage = "linear-gradient(90deg, ".concat(gradientStart, " 0%, ").concat(gradientEnd, " 100%)");
  }

  return React.createElement(Tag, _extends({}, other, {
    className: classes,
    style: style
  }), React.createElement("div", {
    className: "d-flex align-items-center mb-2"
  }, React.createElement("div", {
    className: "rounded-circle d-flex align-items-center justify-content-center mr-1 flex-shrink-0",
    style: {
      width: '24px',
      height: '24px',
      background: 'rgba(255, 255, 255, 0.2)'
    }
  }, React.createElement(_.Icon, {
    isActive: true,
    name: "download",
    theme: "white"
  })), React.createElement("div", {
    className: "text-xs text-white",
    "data-test-id": "resource-card-campaign"
  }, campaign)), React.createElement("div", {
    className: "text-sm font-weight-bold text-white",
    "data-test-id": "resource-card-title"
  }, title));
};

var _default = ResourceCard;
exports["default"] = _default;