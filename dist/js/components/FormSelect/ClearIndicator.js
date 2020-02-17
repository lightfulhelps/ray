"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ClearIndicator = function ClearIndicator(_ref) {
  var innerProps = _ref.innerProps;
  return _react["default"].createElement(_.Icon, _extends({}, innerProps, {
    name: "close",
    title: "Clear",
    theme: "gray-500"
  }));
};

var _default = ClearIndicator;
exports["default"] = _default;