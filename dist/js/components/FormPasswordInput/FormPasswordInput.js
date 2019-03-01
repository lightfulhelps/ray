'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormPasswordInput = (_temp2 = _class = function (_React$Component) {
  _inherits(FormPasswordInput, _React$Component);

  function FormPasswordInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormPasswordInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormPasswordInput.__proto__ || Object.getPrototypeOf(FormPasswordInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hidePassword: true
    }, _this.togglePassword = function () {
      _this.setState(function (prevState) {
        return {
          hidePassword: !prevState.hidePassword
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormPasswordInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          onChange = _props.onChange,
          onBlur = _props.onBlur,
          value = _props.value,
          id = _props.id,
          name = _props.name,
          placeholder = _props.placeholder,
          other = _objectWithoutProperties(_props, ['className', 'onChange', 'onBlur', 'value', 'id', 'name', 'placeholder']);

      var hidePassword = this.state.hidePassword;

      var classes = (0, _classnames2.default)(className, 'form-control');

      return React.createElement(
        'div',
        _extends({}, other, { className: 'form-password-input input-group' }),
        React.createElement('input', {
          className: classes,
          'data-test-id': 'password-input',
          name: name,
          id: id,
          onBlur: onBlur,
          onChange: onChange,
          placeholder: placeholder,
          type: hidePassword ? 'password' : 'text',
          value: value
        }),
        React.createElement(
          'div',
          { className: 'input-group-append' },
          React.createElement(
            _Button2.default,
            {
              'data-test-id': 'password-input-button',
              icon: hidePassword ? 'preview' : 'previewHide',
              isOutline: true,
              onClick: this.togglePassword,
              theme: 'gray-600'
            },
            React.createElement(
              'span',
              { className: 'form-password-input__toggle-password-text' },
              hidePassword ? 'Show' : 'Hide'
            )
          )
        )
      );
    }
  }]);

  return FormPasswordInput;
}(React.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired
}, _temp2);
FormPasswordInput.defaultProps = {
  name: 'password'
};
exports.default = FormPasswordInput;