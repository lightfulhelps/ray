'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Button = function Button(_ref) {
  var children = _ref.children,
      label = _ref.label,
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
      isDropdown = _ref.isDropdown;

  var classes = (0, _classnames2.default)(className, 'btn', 'btn' + (isOutline ? '-outline' : '') + '-' + theme, size ? 'btn-' + size : false, { 'btn-block': isBlock }, { disabled: isDisabled }, { 'btn-icon': icon && !label }, iconPosition && label ? 'btn-icon-' + iconPosition : false);

  var labelClasses = (0, _classnames2.default)({ 'order-1': iconPosition && iconPosition === 'left' });

  return React.createElement(
    Tag,
    {
      className: classes,
      onClick: onClick,
      'data-toggle': isDropdown && 'dropdown',
      'aria-haspopup': isDropdown && 'true',
      'aria-expanded': isDropdown && 'false'
    },
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

Button.propTypes = {
  children: _propTypes2.default.node,
  label: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  isBlock: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  isOutline: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(['lg', 'md', 'sm']),
  tag: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  iconPosition: _propTypes2.default.string,
  isDropdown: _propTypes2.default.bool
};
exports.default = Button;