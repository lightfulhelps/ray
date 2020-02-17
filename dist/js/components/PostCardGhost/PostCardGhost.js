"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PostCardGhost = function PostCardGhost(_ref) {
  var className = _ref.className,
      isLoading = _ref.isLoading,
      other = _objectWithoutProperties(_ref, ["className", "isLoading"]);

  var classes = (0, _classnames["default"])(className, 'post-card-ghost', 'bg-gray-200 border-0 overflow-hidden', {
    loading: isLoading
  });
  return React.createElement(_.Card, _extends({}, other, {
    className: classes
  }), React.createElement("div", {
    className: "d-flex align-items-top px-2 pt-2 pb-0"
  }, React.createElement("div", {
    className: "ghost rounded-circle mr-2 mb-0",
    style: {
      width: '35px',
      height: '35px'
    }
  }), React.createElement("div", {
    className: "flex-fill"
  }, React.createElement("div", {
    className: "ghost ghost-lg w-75"
  }), React.createElement("div", {
    className: "ghost w-50"
  }), React.createElement("div", {
    className: "ghost w-50 mb-0"
  })), React.createElement("div", {
    className: "ghost rounded-sm",
    style: {
      width: '26px',
      height: '26px'
    }
  })), React.createElement("div", {
    className: "p-2"
  }, React.createElement("div", {
    className: "ghost ghost-sm"
  }), React.createElement("div", {
    className: "ghost ghost-sm"
  }), React.createElement("div", {
    className: "ghost ghost-sm"
  }), React.createElement("div", {
    className: "ghost ghost-sm"
  }), React.createElement("div", {
    className: "ghost ghost-sm mb-0 w-75"
  })), React.createElement("div", {
    className: "ghost mb-0",
    style: {
      height: '164px'
    }
  }));
};

var _default = PostCardGhost;
exports["default"] = _default;