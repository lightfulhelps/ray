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
      className = _ref.className,
      _ref$id = _ref.id,
      id = _ref$id === undefined ? 'toggle-switch' : _ref$id,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      labelAlign = _ref.labelAlign,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      other = _objectWithoutProperties(_ref, ['checked', 'className', 'id', 'isDisabled', 'label', 'labelAlign', 'onChange', 'onClick']);

  var classes = (0, _classnames2.default)(className, 'custom-control custom-switch', labelAlign === 'left' ? 'custom-switch-left' : null);

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
    React.createElement('input', {
      type: 'checkbox',
      className: 'custom-control-input',
      id: id,
      disabled: isDisabled,
      checked: checked,
      onChange: onChange
    }),
    React.createElement(
      'label',
      { className: 'custom-control-label', htmlFor: id, onClick: handleClick },
      label
    )
  );
};

exports.default = ToggleSwitch;