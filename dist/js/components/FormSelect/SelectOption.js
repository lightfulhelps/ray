'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactSelect = require('react-select');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Option = _reactSelect.components.Option;


var SelectOption = function SelectOption(props) {
  return React.createElement(
    Option,
    props,
    props.data.icon && React.createElement(_Icon2.default, { className: 'mr-1', name: props.data.icon }),
    props.label
  );
};

exports.default = SelectOption;