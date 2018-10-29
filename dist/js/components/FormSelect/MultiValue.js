'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiValue = function MultiValue(props) {
  return _react2.default.createElement(
    _.Tag,
    { onRemove: props.removeProps.onClick, theme: 'gray-900' },
    props.children
  );
};

exports.default = MultiValue;