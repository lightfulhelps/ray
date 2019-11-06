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

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = (_temp2 = _class = function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: !!_this.props.defaultOpen
    }, _this.handleToggle = function () {
      _this.setState(function (prevState) {
        return { isOpen: !prevState.isOpen };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Collapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          label = _props.label,
          other = _objectWithoutProperties(_props, ['children', 'className', 'label']);

      var classes = (0, _classnames2.default)(className);

      return React.createElement(
        'div',
        _extends({}, other, { className: classes }),
        React.createElement(
          'div',
          {
            className: 'h6 mb-0 cursor-pointer d-flex justify-content-between align-items-center',
            'data-test-id': 'collapse_toggle_' + label,
            onClick: this.handleToggle
          },
          label,
          ' ',
          React.createElement(_.Icon, { isActive: true, theme: 'gray-600', name: this.state.isOpen ? 'chevronUp' : 'chevronDown' })
        ),
        this.state.isOpen && React.createElement(
          'div',
          { 'data-test-id': 'collapse_children_' + label },
          children
        )
      );
    }
  }]);

  return Collapse;
}(React.Component), _class.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  defaultOpen: _propTypes2.default.bool,
  label: _propTypes2.default.string.isRequired
}, _temp2);
exports.default = Collapse;