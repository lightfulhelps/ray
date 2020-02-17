"use strict";

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Importatn to be able to use it as an index for props (TODO : Look for a better solution)
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-".concat(colWidth);
  }

  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-".concat(colWidth, "-auto");
  }

  if (colSize === false) return '';
  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};

var Col = function Col(props) {
  var children = props.children,
      className = props.className,
      _props$tag = props.tag,
      Tag = _props$tag === void 0 ? 'div' : _props$tag,
      other = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var colClasses = [];
  colWidths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (_typeof(columnProp) === 'object') {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-".concat(colWidth, "-");
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames)));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = (0, _classnames["default"])(className, colClasses);
  return React.createElement(Tag, _extends({}, other, {
    className: classes
  }), children);
};

var _default = Col;
exports["default"] = _default;