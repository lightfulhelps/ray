'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min');

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _icons = require('../Icon/icons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Dropdown = function Dropdown(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'dark' : _ref$theme,
      _ref$buttonTheme = _ref.buttonTheme,
      buttonTheme = _ref$buttonTheme === undefined ? 'light' : _ref$buttonTheme,
      items = _ref.items,
      className = _ref.className,
      footer = _ref.footer;

  var classes = (0, _classnames2.default)(className, 'dropdown-menu', 'dropdown-menu-' + theme);
  return React.createElement(
    'div',
    { className: 'dropdown' },
    React.createElement(_Button2.default, {
      icon: 'menu',
      'data-toggle': 'dropdown',
      'aria-haspopup': 'true',
      'aria-expanded': 'false',
      theme: buttonTheme
    }),
    React.createElement(
      'div',
      { className: classes, 'aria-labelledby': 'dropdownMenuButton' },
      items.map(function (_ref2, i) {
        var icon = _ref2.icon,
            label = _ref2.label;
        return React.createElement(_DropdownItem2.default, { label: label, icon: icon, key: i });
      }),
      footer && React.createElement(_DropdownItem2.default, { label: footer, className: 'dropdown-item-footer' })
    )
  );
};
Dropdown.propTypes = {
  buttonTheme: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  footer: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  theme: _propTypes2.default.string
};
exports.default = Dropdown;