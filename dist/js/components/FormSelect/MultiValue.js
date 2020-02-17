"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MultiValue = function MultiValue(props) {
  return _react["default"].createElement(_.Tag, {
    onRemove: props.removeProps.onClick,
    theme: "gray-800"
  }, props.children);
};

var _default = MultiValue;
exports["default"] = _default;