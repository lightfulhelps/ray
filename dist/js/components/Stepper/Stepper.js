'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _icons = require('../Icon/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Stepper = function Stepper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === undefined ? 'left' : _ref$iconPosition,
      isBlock = _ref.isBlock,
      isDisabled = _ref.isDisabled,
      isOutline = _ref.isOutline,
      onClick = _ref.onClick,
      size = _ref.size,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'button' : _ref$tag,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'primary' : _ref$theme,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'button' : _ref$type,
      other = _objectWithoutProperties(_ref, ['children', 'className', 'icon', 'iconPosition', 'isBlock', 'isDisabled', 'isOutline', 'onClick', 'size', 'tag', 'theme', 'type']);

  var classes = (0, _classnames2.default)(className, 'btn', 'btn' + (isOutline ? '-outline' : '') + '-' + theme, size ? 'btn-' + size : false, { 'btn-block': isBlock }, { disabled: isDisabled }, { 'btn-icon': icon && !children }, _defineProperty({}, 'btn-icon-' + iconPosition, icon && children));

  function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return React.createElement(
    Tag,
    _extends({}, other, {
      className: classes,
      onClick: handleClick,
      type: Tag === 'button' ? type : undefined
    }),
    children,
    icon && React.createElement(_Icon2.default, { name: icon })
  );
};

exports.default = Stepper;