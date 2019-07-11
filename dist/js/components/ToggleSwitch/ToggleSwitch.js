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
  var checked = _ref.checked,
      onClick = _ref.onClick,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      labelAlign = _ref.labelAlign,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ['checked', 'onClick', 'isDisabled', 'label', 'labelAlign', 'className']);

  var classes = (0, _classnames2.default)(className, labelAlign === 'left' ? 'align-label-left' : null);

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
    React.createElement(
      'div',
      { className: 'custom-control custom-switch' },
      React.createElement('input', {
        type: 'checkbox',
        className: 'custom-control-input',
        id: 'customSwitch1',
        disabled: isDisabled,
        checked: checked,
        onChange: function onChange() {
          return null;
        }
      }),
      React.createElement(
        'label',
        {
          className: 'custom-control-label',
          htmlFor: 'customSwitch1',
          onClick: function onClick(e) {
            return handleClick(e);
          }
        },
        label
      )
    )
  );
};

exports.default = ToggleSwitch;