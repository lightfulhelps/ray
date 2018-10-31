'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClearIndicator = function ClearIndicator(_ref) {
  var innerProps = _ref.innerProps;
  return _react2.default.createElement(_.Icon, _extends({}, innerProps, { name: 'close', title: 'Clear', theme: 'gray-500' }));
};

exports.default = ClearIndicator;