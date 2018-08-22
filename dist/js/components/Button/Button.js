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

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'primary' : _ref$color,
      isBlock = _ref.isBlock,
      isDisabled = _ref.isDisabled,
      isOutline = _ref.isOutline,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      size = _ref.size,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'button' : _ref$tag;

  var classes = (0, _classnames2.default)(className, 'btn', 'btn' + (isOutline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, { 'btn-block': isBlock }, { disabled: isDisabled });

  return React.createElement(
    Tag,
    { className: classes, onClick: onClick },
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  isBlock: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  isOutline: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(['lg', 'md', 'sm']),
  tag: _propTypes2.default.string
};
exports.default = Button;