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

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (_temp2 = _class = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleMouseEnter = function () {
      _this.setState({ hover: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hover: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          _props$color = _props.color,
          color = _props$color === undefined ? 'currentColor' : _props$color,
          hoverColor = _props.hoverColor,
          isActive = _props.isActive,
          isDisabled = _props.isDisabled,
          name = _props.name,
          _props$size = _props.size,
          size = _props$size === undefined ? '1em' : _props$size,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          theme = _props.theme,
          title = _props.title,
          _props$viewBox = _props.viewBox,
          viewBox = _props$viewBox === undefined ? '0 0 24 24' : _props$viewBox,
          other = _objectWithoutProperties(_props, ['className', 'color', 'hoverColor', 'isActive', 'isDisabled', 'name', 'size', 'style', 'theme', 'title', 'viewBox']);

      var classes = (0, _classnames2.default)(className, 'icon', theme ? 'icon-' + theme : '', { disabled: isDisabled }, { active: isActive }, { 'cursor-pointer': typeof other.onClick === 'function' });

      if (theme) {
        delete style.fill;
      } else {
        style.fill = this.state.hover && hoverColor ? hoverColor : color;
      }

      return _react2.default.createElement(
        'svg',
        _extends({}, other, {
          className: classes,
          width: size,
          height: size,
          viewBox: viewBox,
          style: style,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }),
        title && _react2.default.createElement(
          'title',
          null,
          title
        ),
        _icons2.default[name]
      );
    }
  }]);

  return Icon;
}(_react.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string,
  isActive: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  name: function name() {
    return (typeof _icons.bpfrpt_proptype_IconNameType === 'function' ? _icons.bpfrpt_proptype_IconNameType.isRequired ? _icons.bpfrpt_proptype_IconNameType.isRequired : _icons.bpfrpt_proptype_IconNameType : _propTypes2.default.shape(_icons.bpfrpt_proptype_IconNameType).isRequired).apply(this, arguments);
  },
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.number,
  style: _propTypes2.default.objectOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error('Prop `' + propName + '` has type \'any\' or \'mixed\', but was not provided to `' + componentName + '`. Pass undefined or any other value.');
    }
  }),
  theme: _propTypes2.default.string,
  title: _propTypes2.default.string,
  viewBox: _propTypes2.default.string
}, _temp2);
exports.default = Icon;