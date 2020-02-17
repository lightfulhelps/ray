"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      isDisconnected = _ref.isDisconnected,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      provider = _ref.provider,
      _ref$providerSize = _ref.providerSize,
      providerSize = _ref$providerSize === void 0 ? 'md' : _ref$providerSize,
      other = _objectWithoutProperties(_ref, ["className", "isDisconnected", "url", "provider", "providerSize"]);

  var classes = (0, _classnames["default"])(className, 'avatar', "avatar-provider-".concat(providerSize), {
    'avatar-disconnected': isDisconnected
  });
  return _react["default"].createElement("div", _extends({}, other, {
    className: classes
  }), _react["default"].createElement("div", {
    className: "avatar-inner"
  }, _react["default"].createElement("div", {
    className: "avatar-image",
    style: {
      backgroundImage: "url(".concat(url, ")")
    }
  }), provider && _react["default"].createElement("div", {
    className: "avatar-provider avatar-provider-".concat(provider)
  }, _react["default"].createElement(_.Icon, {
    name: provider,
    color: "#ffffff"
  }))));
};

var _default = Avatar;
exports["default"] = _default;