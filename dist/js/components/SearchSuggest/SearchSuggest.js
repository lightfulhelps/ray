"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.highlightMatches = exports.findMatches = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var findMatches = function findMatches(option, search, exclude) {
  var normalize = function normalize(str) {
    return str.replace(exclude, '').toLowerCase();
  };

  return normalize(option).includes(normalize(search));
};

exports.findMatches = findMatches;

var highlightMatches = function highlightMatches(option, search, exclude) {
  if (!search) return option;
  var regex = new RegExp("(".concat(search.replace(exclude, ''), ")"), 'gi');
  var ret = option.replace(regex, "<strong class=\"text-gray-900\">$&</strong>");
  return ret;
};

exports.highlightMatches = highlightMatches;

var SearchSuggest = function SearchSuggest(_ref) {
  var className = _ref.className,
      exclude = _ref.exclude,
      isLoading = _ref.isLoading,
      isOpen = _ref.isOpen,
      limit = _ref.limit,
      onClear = _ref.onClear,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onSelect = _ref.onSelect,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? '' : _ref$search,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, ["className", "exclude", "isLoading", "isOpen", "limit", "onClear", "onClick", "onRemove", "onSelect", "options", "search", "title"]);

  var classes = (0, _classnames["default"])(className, 'search-suggest');
  var count = limit && limit > 0 ? limit : 10;
  var filteredOptions = options.filter(function (option) {
    return findMatches(option, search, exclude);
  });
  if (!isLoading && !options.length) return null;
  if (search.length > 0 && !filteredOptions.length) return null;
  return React.createElement(_.DropdownMenu, _extends({}, other, {
    className: classes,
    "data-test-id": "search-suggest",
    isOpen: isOpen,
    onClick: onClick
  }), title && React.createElement(_.DropdownItem, {
    className: "d-flex justify-content-between align-items-center",
    "data-test-id": "search-suggest-header",
    isHeader: true
  }, title, ' ', !isLoading && onClear && React.createElement("div", {
    className: "ml-1 text-danger cursor-pointer text-capitalize",
    "data-test-id": "search-suggest-clear",
    onClick: onClear
  }, "Clear All")), isLoading && React.createElement(_.DropdownItem, {
    "data-test-id": "search-suggest-loading",
    isDisabled: true
  }, "Loading..."), !isLoading && filteredOptions.slice(0, count).map(function (option, i) {
    return React.createElement(_.DropdownItem, {
      className: "d-flex justify-content-between align-items-center text-body",
      "data-test-id": "search-suggest-item",
      key: i,
      onClick: function onClick() {
        return onSelect(option, i);
      }
    }, React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: highlightMatches(option, search, exclude)
      }
    }), onRemove && React.createElement(_.Icon, {
      className: "ml-1",
      "data-test-id": "search-suggest-remove",
      name: "close",
      onClick: function onClick(e) {
        e.stopPropagation();
        onRemove(i);
      }
    }));
  }));
};

var _default = SearchSuggest;
exports["default"] = _default;