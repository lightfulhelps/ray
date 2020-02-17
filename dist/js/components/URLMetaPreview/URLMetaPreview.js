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

var cleanURL = function cleanURL(url) {
  return url.replace(/https?:\/\/(www.)?/, '');
};

var URLMetaPreview = function URLMetaPreview(_ref) {
  var className = _ref.className,
      description = _ref.description,
      image = _ref.image,
      _ref$isVertical = _ref.isVertical,
      isVertical = _ref$isVertical === void 0 ? false : _ref$isVertical,
      title = _ref.title,
      url = _ref.url,
      other = _objectWithoutProperties(_ref, ["className", "description", "image", "isVertical", "title", "url"]);

  var classes = (0, _classnames["default"])(className, 'url-meta-preview', 'bg-white h-100');

  if (!url) {
    return null;
  }

  return _react["default"].createElement("div", _extends({}, other, {
    className: classes
  }), _react["default"].createElement("div", {
    className: isVertical ? '' : 'row h-100'
  }, image && _react["default"].createElement("div", {
    className: isVertical ? '' : 'col-4 pr-0'
  }, _react["default"].createElement("div", {
    className: "w-100 h-100 bg-cover bg-center",
    "data-test-id": "url-meta-preview-image",
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }, isVertical && _react["default"].createElement("img", {
    className: "w-100",
    src: image,
    alt: ""
  }))), _react["default"].createElement("div", {
    className: isVertical ? '' : image ? 'col-8 pl-0' : 'col-12'
  }, _react["default"].createElement("div", {
    className: "d-flex flex-column justify-content-between h-100 p-1 text-xs"
  }, _react["default"].createElement("a", {
    className: "font-weight-bold text-dark text-truncate",
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, title), description && _react["default"].createElement("div", {
    className: "font-weight-light text-gray-500 text-truncate",
    "data-test-id": "url-meta-preview-description"
  }, description) // <ResponsiveEllipsis
  //   className="font-weight-light text-gray-500"
  //   text={description}
  //   maxLine={3}
  //   ellipsis="..."
  //   basedOn="words"
  // />
  , _react["default"].createElement("a", {
    className: "d-block text-body text-truncate",
    "data-test-id": "url-meta-preview-url",
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, cleanURL(url))))));
};

var _default = URLMetaPreview;
exports["default"] = _default;