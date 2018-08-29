'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var label = _ref.label,
      className = _ref.className,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'primary' : _ref$theme,
      isBlock = _ref.isBlock,
      isDisabled = _ref.isDisabled,
      isOutline = _ref.isOutline,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      size = _ref.size,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'button' : _ref$tag,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      isDropdown = _ref.isDropdown,
      other = _objectWithoutProperties(_ref, ['label', 'className', 'theme', 'isBlock', 'isDisabled', 'isOutline', 'onClick', 'size', 'tag', 'icon', 'iconPosition', 'isDropdown']);

  var classes = (0, _classnames2.default)(className, 'btn', 'btn' + (isOutline ? '-outline' : '') + '-' + theme, size ? 'btn-' + size : false, { 'btn-block': isBlock }, { disabled: isDisabled }, { 'btn-icon': icon && !label }, iconPosition && label ? 'btn-icon-' + iconPosition : false);

  var labelClasses = (0, _classnames2.default)({ 'order-1': iconPosition && iconPosition === 'left' });

  return React.createElement(
    Tag,
    _extends({}, other, {
      className: classes,
      onClick: onClick,
      'data-toggle': isDropdown && 'dropdown',
      'aria-haspopup': isDropdown && 'true',
      'aria-expanded': isDropdown && 'false'
    }),
    label && React.createElement(
      'span',
      { className: labelClasses },
      label
    ),
    icon && React.createElement(_Icon2.default, {
      name: icon,
      size: (0, _addonKnobs.number)('Size', 24),
      color: (0, _addonKnobs.color)('Color', '#adb5bd'),
      hoverColor: (0, _addonKnobs.color)('Hover Color', '#212529')
    })
  );
};

exports.default = Button;