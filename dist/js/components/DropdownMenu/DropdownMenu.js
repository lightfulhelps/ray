'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

var _DropdownItem = require('../DropdownItem/DropdownItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DropdownMenu = function DropdownMenu(_ref) {
  var className = _ref.className,
      footer = _ref.footer,
      items = _ref.items,
      isOpen = _ref.isOpen,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? 'left' : _ref$position,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'light' : _ref$theme,
      other = _objectWithoutProperties(_ref, ['className', 'footer', 'items', 'isOpen', 'onClick', 'position', 'theme']);

  var classes = (0, _classnames2.default)(className, 'dropdown-menu', 'dropdown-menu-' + theme, 'dropdown-menu-' + position, { show: isOpen });

  return React.createElement(
    'div',
    _extends({}, other, { className: classes, onClick: onClick }),
    items.map(function (item, i) {
      return React.createElement(_.DropdownItem, {
        key: i,
        label: item.label,
        icon: item.icon,
        iconColor: item.iconColor,
        onClick: item.onClick
      });
    }),
    footer && React.createElement(
      'div',
      { className: 'dropdown-footer' },
      footer
    )
  );
};

exports.default = DropdownMenu;