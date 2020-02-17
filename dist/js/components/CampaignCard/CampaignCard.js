"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CampaignCard = function CampaignCard(_ref) {
  var className = _ref.className,
      cover = _ref.cover,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? '' : _ref$state,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, ["className", "cover", "state", "tag", "title"]);

  var classes = (0, _classnames["default"])(className, 'campaign-card', 'card rounded-lg shadow text-decoration-none h-100');
  var stateClasses = (0, _classnames["default"])('text-xs font-weight-bold', {
    'text-primary': state.toLowerCase() === 'live'
  }, {
    'text-warning': state.toLowerCase() === 'draft'
  });
  return React.createElement(Tag, _extends({}, other, {
    className: classes,
    "data-test-id": "campaign-card"
  }), React.createElement("div", {
    className: "campaign-card-cover",
    "data-test-id": "campaign-card-cover",
    style: {
      backgroundImage: "url(".concat(cover, ")")
    }
  }), React.createElement("div", {
    className: "px-2 py-1 h-100 d-flex flex-column justify-content-between"
  }, React.createElement("div", {
    className: "h6",
    "data-test-id": "campaign-card-title"
  }, title), React.createElement("div", {
    className: stateClasses,
    "data-test-id": "campaign-card-state"
  }, state)));
};

var _default = CampaignCard;
exports["default"] = _default;