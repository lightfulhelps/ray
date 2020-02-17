"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PostMedia = function PostMedia(_ref) {
  var className = _ref.className,
      media = _ref.media,
      other = _objectWithoutProperties(_ref, ["className", "media"]);

  var blockClass = 'post-media';
  var classes = (0, _classnames["default"])(className, blockClass, "".concat(blockClass, "--").concat(media.length));

  if (!media.length) {
    return _react["default"].createElement("div", _extends({}, other, {
      className: "".concat(classes, " ").concat(blockClass, "--empty")
    }), "No media");
  }

  var video = media.find(function (m) {
    return m.type === 'video';
  });

  if (video) {
    return _react["default"].createElement("div", _extends({}, other, {
      className: classes
    }), _react["default"].createElement("video", {
      className: "".concat(blockClass, "__video"),
      controls: true,
      src: video.url
    }));
  }

  return _react["default"].createElement("div", _extends({}, other, {
    className: classes
  }), media.map(function (m, i) {
    return _react["default"].createElement("div", {
      key: i,
      className: "".concat(blockClass, "__image"),
      style: {
        backgroundImage: "url(".concat(m.url, ")")
      }
    });
  }));
};

var _default = PostMedia;
exports["default"] = _default;