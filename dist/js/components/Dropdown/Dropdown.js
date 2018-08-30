'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? 'dark' : _props$theme,
          _props$buttonTheme = _props.buttonTheme,
          buttonTheme = _props$buttonTheme === undefined ? 'light' : _props$buttonTheme,
          items = _props.items,
          className = _props.className,
          footer = _props.footer;

      var classes = (0, _classnames2.default)(className, 'dropdown', 'dropdown-' + theme);

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(_Button2.default, {
          onClick: function onClick() {
            return _this2.handleDropdown();
          },
          icon: 'menu',
          'aria-haspopup': 'true',
          'aria-expanded': 'false',
          theme: buttonTheme
        }),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('dropdown-menu', { show: this.state.isOpen }),
            'aria-labelledby': 'dropdownMenuButton'
          },
          items.map(function (item, i) {
            return _react2.default.createElement(_DropdownItem2.default, { label: item.label, icon: item.icon, key: i, onClick: item.onClick });
          }),
          footer && _react2.default.createElement(_DropdownItem2.default, { label: footer, className: 'dropdown-item-footer' })
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component), _class.propTypes = {
  buttonTheme: _propTypes2.default.string,
  className: _propTypes2.default.string,
  footer: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  theme: _propTypes2.default.string
}, _temp2);
exports.default = Dropdown;