'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Progress = function Progress(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isAnimated = _ref.isAnimated,
      isStriped = _ref.isStriped,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'primary' : _ref$theme,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? 0 : _ref$value,
      other = _objectWithoutProperties(_ref, ['children', 'className', 'isAnimated', 'isStriped', 'theme', 'value']);

  var classes = (0, _classnames2.default)(className, 'progress');
  var barClasses = (0, _classnames2.default)('progress-bar', _defineProperty({}, 'bg-' + theme, theme), { 'progress-bar-animated': isAnimated }, { 'progress-bar-striped': isStriped });

  return React.createElement(
    'div',
    _extends({}, other, { className: classes, 'data-test-id': 'progress' }),
    React.createElement(
      'div',
      {
        className: barClasses,
        'data-test-id': 'progress-bar',
        role: 'progressbar',
        style: { width: value + '%' },
        'aria-valuenow': '25',
        'aria-valuemin': '0',
        'aria-valuemax': '100'
      },
      children
    )
  );
};

exports.default = Progress;