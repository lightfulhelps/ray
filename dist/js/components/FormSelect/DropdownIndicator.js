"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropdownIndicator = function DropdownIndicator() {
  return _react["default"].createElement(_.Icon, {
    name: "caretDown",
    title: "Open",
    theme: "gray-500"
  });
};

var _default = DropdownIndicator;
exports["default"] = _default;