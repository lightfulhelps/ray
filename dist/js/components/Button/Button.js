'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Button = function Button(_ref) {
  var block = _ref.block,
    children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === undefined ? 'primary' : _ref$color,
    disabled = _ref.disabled,
    onClick = _ref.onClick,
    outline = _ref.outline,
    size = _ref.size,
    _ref$tag = _ref.tag,
    Tag = _ref$tag === undefined ? 'button' : _ref$tag;

  var classes = (0, _classnames2.default)(
    'btn',
    'btn' + (outline ? '-outline' : '') + '-' + color,
    size ? 'btn-' + size : false,
    block ? 'btn-block' : false,
    { disabled: disabled }
  );
  return _react2.default.createElement(Tag, { className: classes, onClick: onClick }, children);
};

exports.default = Button;
