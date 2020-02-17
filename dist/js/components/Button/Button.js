"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
      iconTheme = _ref.iconTheme,
      isBlock = _ref.isBlock,
      isDisabled = _ref.isDisabled,
      isOutline = _ref.isOutline,
      onClick = _ref.onClick,
      size = _ref.size,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'button' : _ref$tag,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'primary' : _ref$theme,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      other = _objectWithoutProperties(_ref, ["children", "className", "icon", "iconPosition", "iconTheme", "isBlock", "isDisabled", "isOutline", "onClick", "size", "tag", "theme", "type"]);

  var classes = (0, _classnames["default"])(className, 'btn', "btn".concat(isOutline ? '-outline' : '', "-").concat(theme), size ? "btn-".concat(size) : false, {
    'btn-block': isBlock
  }, {
    disabled: isDisabled
  }, {
    'btn-icon': icon && !children
  }, _defineProperty({}, "btn-icon-".concat(iconPosition), icon && children));

  var handleClick = function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  };

  return React.createElement(Tag, _extends({}, other, {
    className: classes,
    onClick: handleClick,
    type: Tag === 'button' ? type : undefined,
    disabled: isDisabled,
    blabla: "grgr"
  }), children, icon && React.createElement(_Icon["default"], {
    name: icon,
    theme: iconTheme
  }));
};

var _default = Button;
exports["default"] = _default;