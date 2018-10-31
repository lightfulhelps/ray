'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

var _ClearIndicator = require('./ClearIndicator');

var _ClearIndicator2 = _interopRequireDefault(_ClearIndicator);

var _DropdownIndicator = require('./DropdownIndicator');

var _DropdownIndicator2 = _interopRequireDefault(_DropdownIndicator);

var _MultiValue = require('./MultiValue');

var _MultiValue2 = _interopRequireDefault(_MultiValue);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Props introduced by Ray - everything else will be passed through
// See - https://react-select.com/props - for more information
var FormSelect = function FormSelect(_ref) {
  var className = _ref.className,
      isCreatable = _ref.isCreatable,
      isInvalid = _ref.isInvalid,
      isValid = _ref.isValid,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ['className', 'isCreatable', 'isInvalid', 'isValid', 'size']);

  var Component = isCreatable ? _Creatable2.default : _reactSelect2.default;
  var classNamePrefix = 'form-select';
  var classes = (0, _classnames2.default)(className, classNamePrefix, size ? classNamePrefix + '-' + size : '', { 'is-invalid': isInvalid }, { 'is-valid': isValid });

  return React.createElement(Component, _extends({}, other, {
    className: classes,
    classNamePrefix: classNamePrefix,
    components: {
      ClearIndicator: _ClearIndicator2.default,
      DropdownIndicator: _DropdownIndicator2.default,
      MultiValue: _MultiValue2.default,
      Option: _Option2.default
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

exports.default = FormSelect;