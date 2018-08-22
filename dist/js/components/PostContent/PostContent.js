'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDotdotdot = require('react-dotdotdot');

var _reactDotdotdot2 = _interopRequireDefault(_reactDotdotdot);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PostContent = function PostContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$lines = _ref.lines,
      lines = _ref$lines === undefined ? 5 : _ref$lines;

  var classes = (0, _classnames2.default)(className, 'post-content', 'my-1 mx-2 font-weight-light');

  return React.createElement(
    'div',
    { className: classes },
    React.createElement(
      _reactDotdotdot2.default,
      { clamp: lines },
      children
    )
  );
};
PostContent.propTypes = {
  children: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  lines: _propTypes2.default.number
};
exports.default = PostContent;