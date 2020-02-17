"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _Creatable = _interopRequireDefault(require("react-select/lib/Creatable"));

var _ClearIndicator = _interopRequireDefault(require("./ClearIndicator"));

var _DropdownIndicator = _interopRequireDefault(require("./DropdownIndicator"));

var _MultiValue = _interopRequireDefault(require("./MultiValue"));

var _Option = _interopRequireDefault(require("./Option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormSelect = function FormSelect(_ref) {
  var className = _ref.className,
      isCreatable = _ref.isCreatable,
      isInvalid = _ref.isInvalid,
      isValid = _ref.isValid,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ["className", "isCreatable", "isInvalid", "isValid", "size"]);

  var Component = isCreatable ? _Creatable["default"] : _reactSelect["default"];
  var classNamePrefix = 'form-select';
  var classes = (0, _classnames["default"])(className, classNamePrefix, size ? "".concat(classNamePrefix, "-").concat(size) : '', {
    'is-invalid': isInvalid
  }, {
    'is-valid': isValid
  });
  return React.createElement(Component, _extends({}, other, {
    className: classes,
    classNamePrefix: classNamePrefix,
    components: {
      ClearIndicator: _ClearIndicator["default"],
      DropdownIndicator: _DropdownIndicator["default"],
      MultiValue: _MultiValue["default"],
      Option: _Option["default"]
    },
    styles: {
      clearIndicator: function clearIndicator() {
        return {};
      },
      container: function container() {
        return {};
      },
      control: function control() {
        return {};
      },
      dropdownIndicator: function dropdownIndicator() {
        return {};
      },
      group: function group() {
        return {};
      },
      groupHeading: function groupHeading() {
        return {};
      },
      indicatorsContainer: function indicatorsContainer() {
        return {};
      },
      indicatorSeparator: function indicatorSeparator() {
        return {};
      },
      input: function input() {
        return {};
      },
      // loadingIndicator: () => ({}),
      // loadingMessage: () => ({}),
      menu: function menu() {
        return {};
      },
      menuList: function menuList() {
        return {};
      },
      multiValue: function multiValue() {
        return {};
      },
      multiValueLabel: function multiValueLabel() {
        return {};
      },
      multiValueRemove: function multiValueRemove() {
        return {};
      },
      noOptionsMessage: function noOptionsMessage() {
        return {};
      },
      option: function option() {
        return {};
      },
      placeholder: function placeholder() {
        return {};
      },
      singleValue: function singleValue() {
        return {};
      },
      valueContainer: function valueContainer() {
        return {};
      }
    }
  }));
};

var _default = FormSelect;
exports["default"] = _default;