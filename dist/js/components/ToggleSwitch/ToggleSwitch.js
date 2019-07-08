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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable jsx-a11y/label-has-associated-control */


var ToggleSwitch = function ToggleSwitch(_ref) {
  var onClick = _ref.onClick,
      isDisabled = _ref.isDisabled,
      labelRight = _ref.labelRight,
      labelLeft = _ref.labelLeft,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ['onClick', 'isDisabled', 'labelRight', 'labelLeft', 'className']);

  var classes = (0, _classnames2.default)(className, 'toggle-switch-container');

  function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return React.createElement(
    'div',
    _extends({}, other, { className: classes }),
    labelLeft && React.createElement(
      'span',
      { className: 'toggle-switch__label--left font-weight-bold' },
      labelLeft
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'custom-control custom-switch' },
        React.createElement('input', {
          disabled: isDisabled,
          type: 'checkbox',
          className: 'custom-control-input',
          id: 'customSwitch1'
        }),
        React.createElement('label', {
          className: 'custom-control-label',
          htmlFor: 'customSwitch1',
          onClick: function onClick(e) {
            return handleClick(e);
          }
        })
      )
    ),
    labelRight && React.createElement(
      'span',
      { className: 'toggle-switch__label--left font-weight-bold' },
      labelRight
    )
  );
};

exports.default = ToggleSwitch;