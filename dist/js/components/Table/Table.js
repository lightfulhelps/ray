'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Table = function Table(_ref) {
  var className = _ref.className,
      isBordered = _ref.isBordered,
      isBorderless = _ref.isBorderless,
      isHoverable = _ref.isHoverable,
      isResponsive = _ref.isResponsive,
      isStriped = _ref.isStriped,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ['className', 'isBordered', 'isBorderless', 'isHoverable', 'isResponsive', 'isStriped', 'size']);

  var classes = (0, _classnames2.default)(className, 'table', size ? 'table-' + size : false, { 'table-bordered': isBordered && !isBorderless }, { 'table-borderless': isBorderless && !isBordered }, { 'table-striped': isStriped }, { 'table-hover': isHoverable }, { 'table-responsive': isResponsive });

  return React.createElement('table', _extends({}, other, { className: classes }));
};

exports.default = Table;