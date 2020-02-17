"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = _interopRequireDefault(require("./icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      hoverColor = _ref.hoverColor,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '1em' : _ref$size,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      theme = _ref.theme,
      title = _ref.title,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 24 24' : _ref$viewBox,
      other = _objectWithoutProperties(_ref, ["className", "color", "hoverColor", "isActive", "isDisabled", "name", "size", "style", "theme", "title", "viewBox"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var handleMouseEnter = function handleMouseEnter() {
    setHover(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    setHover(false);
  };

  var classes = (0, _classnames["default"])(className, 'icon', theme ? "icon-".concat(theme) : '', {
    disabled: isDisabled
  }, {
    active: isActive
  }, {
    'cursor-pointer': typeof other.onClick === 'function' && !isDisabled
  });

  if (theme) {
    delete style.fill;
  } else {
    style.fill = hover && hoverColor ? hoverColor : color;
  }

  return _react["default"].createElement("svg", _extends({}, other, {
    className: classes,
    width: size,
    height: size,
    viewBox: viewBox,
    style: style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }), title && _react["default"].createElement("title", null, title), _icons["default"][name]);
};

var _default = Icon;
exports["default"] = _default;