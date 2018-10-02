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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      isPill = _ref.isPill,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'div' : _ref$tag,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'primary' : _ref$theme,
      other = _objectWithoutProperties(_ref, ['children', 'className', 'color', 'isPill', 'tag', 'theme']);

  var classes = (0, _classnames2.default)(className, 'badge', 'text-uppercase', 'text-truncate', 'mw-100', theme ? 'badge-' + theme : null, {
    'badge-pill': isPill
  });

  return React.createElement(
    Tag,
    _extends({}, other, { className: classes, style: { backgroundColor: color } }),
    children
  );
};

exports.default = Badge;