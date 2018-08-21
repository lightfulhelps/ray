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
  var block = _ref.block,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'primary' : _ref$color,
      disabled = _ref.disabled,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      outline = _ref.outline,
      size = _ref.size,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'button' : _ref$tag;

  var classes = (0, _classnames2.default)('btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { disabled: disabled });
  return React.createElement(
    Tag,
    { className: classes, onClick: onClick },
    children
  );
};

Button.propTypes = {
  block: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  outline: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['lg', 'sm']),
  tag: _propTypes2.default.string
};
exports.default = Button;