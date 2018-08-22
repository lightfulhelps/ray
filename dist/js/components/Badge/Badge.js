'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Badge = function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      isPill = _ref.isPill,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'span' : _ref$tag,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'primary' : _ref$theme;

  var classes = (0, _classnames2.default)(className, 'badge', 'text-uppercase', theme ? 'badge-' + theme : null, {
    'badge-pill': isPill
  });

  return React.createElement(
    Tag,
    { className: classes, style: { backgroundColor: color } },
    children
  );
};

Badge.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  isPill: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  theme: _propTypes2.default.string
};
exports.default = Badge;