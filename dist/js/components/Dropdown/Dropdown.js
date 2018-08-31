'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _icons = require('../Icon/icons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = (_temp2 = _class = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.handleItemClick = function (clickFunction) {
      if (typeof clickFunction === 'function') {
        clickFunction();
      }

      _this.setState({ isOpen: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: 'handleDropdown',
    value: function handleDropdown() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$buttonIcon = _props.buttonIcon,
          buttonIcon = _props$buttonIcon === undefined ? 'menu' : _props$buttonIcon,
          _props$buttonSize = _props.buttonSize,
          buttonSize = _props$buttonSize === undefined ? 'sm' : _props$buttonSize,
          _props$buttonTheme = _props.buttonTheme,
          buttonTheme = _props$buttonTheme === undefined ? 'light' : _props$buttonTheme,
          className = _props.className,
          footer = _props.footer,
          items = _props.items,
          _props$position = _props.position,
          position = _props$position === undefined ? 'left' : _props$position,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? 'dark' : _props$theme,
          other = _objectWithoutProperties(_props, ['buttonIcon', 'buttonSize', 'buttonTheme', 'className', 'footer', 'items', 'position', 'theme']);

      var classes = (0, _classnames2.default)(className, 'dropdown', 'd-inline-block');
      var menuClasses = (0, _classnames2.default)('dropdown-menu', 'dropdown-menu-' + theme, 'dropdown-menu-' + position, { show: this.state.isOpen });

      return _react2.default.createElement(
        'div',
        _extends({}, other, { className: classes }),
        _react2.default.createElement(_Button2.default, {
          onClick: function onClick() {
            return _this2.handleDropdown();
          },
          icon: buttonIcon,
          'aria-haspopup': 'true',
          'aria-expanded': this.state.isOpen,
          size: buttonSize,
          theme: buttonTheme
        }),
        _react2.default.createElement(
          'div',
          { className: menuClasses, 'aria-labelledby': 'dropdownMenuButton' },
          items.map(function (item, i) {
            return _react2.default.createElement(_DropdownItem2.default, {
              key: i,
              label: item.label,
              icon: item.icon,
              onClick: function onClick() {
                return _this2.handleItemClick(item.onClick);
              }
            });
          }),
          footer && _react2.default.createElement(
            'div',
            { className: 'dropdown-footer' },
            footer
          )
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component), _class.propTypes = {
  buttonIcon: function buttonIcon() {
    return (typeof _icons.bpfrpt_proptype_IconNameType === 'function' ? _icons.bpfrpt_proptype_IconNameType : _propTypes2.default.shape(_icons.bpfrpt_proptype_IconNameType)).apply(this, arguments);
  },
  buttonSize: _propTypes2.default.oneOf(['lg', 'md', 'sm']),
  buttonTheme: _propTypes2.default.string,
  className: _propTypes2.default.string,
  footer: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(function () {
    return (typeof _DropdownItem.bpfrpt_proptype_DropdownItemType === 'function' ? _DropdownItem.bpfrpt_proptype_DropdownItemType.isRequired ? _DropdownItem.bpfrpt_proptype_DropdownItemType.isRequired : _DropdownItem.bpfrpt_proptype_DropdownItemType : _propTypes2.default.shape(_DropdownItem.bpfrpt_proptype_DropdownItemType).isRequired).apply(this, arguments);
  }).isRequired,
  position: _propTypes2.default.oneOf(['left', 'right']),
  theme: _propTypes2.default.string
}, _temp2);
exports.default = Dropdown;