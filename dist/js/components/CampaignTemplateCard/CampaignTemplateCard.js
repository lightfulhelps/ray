"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CampaignTemplateCard = function CampaignTemplateCard(_ref) {
  var className = _ref.className,
      _ref$ctaText = _ref.ctaText,
      ctaText = _ref$ctaText === void 0 ? 'Use this template' : _ref$ctaText,
      _ref$ctaTextSelected = _ref.ctaTextSelected,
      ctaTextSelected = _ref$ctaTextSelected === void 0 ? 'Selected' : _ref$ctaTextSelected,
      onClick = _ref.onClick,
      title = _ref.title,
      description = _ref.description,
      image = _ref.image,
      isSelected = _ref.isSelected,
      other = _objectWithoutProperties(_ref, ["className", "ctaText", "ctaTextSelected", "onClick", "title", "description", "image", "isSelected"]);

  var classes = (0, _classnames["default"])(className, 'card h-100 rounded-lg', {
    'campaign-template-card--selected': isSelected
  }, 'campaign-template-card');
  var imgStyles = {
    backgroundImage: "url(".concat(image, ")"),
    height: 0,
    paddingBottom: '50%',
    backgroundPosition: 'center'
  };
  var btnProps = {
    'data-test-id': 'campaign-template-card-button',
    className: 'mt-2',
    onClick: onClick,
    isBlock: true,
    isDisabled: false,
    theme: 'primary',
    children: ctaText
  };

  if (isSelected) {
    btnProps.isDisabled = true;
    btnProps.theme = 'success';
    btnProps.icon = 'tick';
    btnProps.children = ctaTextSelected;
  }

  return React.createElement("div", _extends({}, other, {
    className: classes
  }), React.createElement("div", {
    style: imgStyles,
    className: "bg-cover bg-gray-900 w-100 rounded-top-lg",
    "data-test-id": "campaign-template-card-image"
  }), React.createElement("div", {
    className: "p-2 d-flex h-100 flex-column justify-content-between"
  }, React.createElement("div", null, React.createElement("h5", {
    "data-test-id": "campaign-template-card-title"
  }, title), React.createElement("div", {
    className: "text-sm",
    "data-test-id": "campaign-template-card-description"
  }, description)), React.createElement(_.Button, btnProps)));
};

var _default = CampaignTemplateCard;
exports["default"] = _default;