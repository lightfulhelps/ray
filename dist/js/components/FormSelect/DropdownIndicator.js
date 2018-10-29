'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownIndicator = function DropdownIndicator() {
  return _react2.default.createElement(_.Icon, { name: 'caretDown', title: 'Open' });
};

exports.default = DropdownIndicator;