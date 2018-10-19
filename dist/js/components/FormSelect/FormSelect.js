'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormSelect = function FormSelect(_ref) {
  var options = _ref.options,
      className = _ref.className,
      isInvalid = _ref.isInvalid,
      isValid = _ref.isValid,
      size = _ref.size,
      isMulti = _ref.isMulti,
      isClearable = _ref.isClearable,
      other = _objectWithoutProperties(_ref, ['options', 'className', 'isInvalid', 'isValid', 'size', 'isMulti', 'isClearable']);

  var classes = (0, _classnames2.default)(className, {
    'is-invalid': isInvalid
  }, { 'is-valid': isValid });

  var customStyles = {
    control: function control(base, _ref2) {
      var isFocused = _ref2.isFocused;
      return _extends({}, base, {
        height: 'calc(2.875rem + 2px)',
        padding: '0.9375rem',
        'box-shadow': 'none',
        ':hover': {
          'border-color': isFocused ? '#27b0cc' : '#adb5bd'
        },
        'border-color': isFocused ? '#27b0cc' : '#dee2e6'
      });
    },
    valueContainer: function valueContainer(base) {
      return _extends({}, base, {
        padding: 'none'
      });
    },
    menu: function menu(base) {
      return _extends({}, base, {
        'box-shadow': 'none',
        border: '1px solid #dee2e6'
      });
    },
    option: function option(base, _ref3) {
      var isFocused = _ref3.isFocused;
      return _extends({}, base, {
        backgroundColor: isFocused ? '#f8f9fa' : 'inherit',
        borderBottom: '1px solid #e9ecef',
        ':last-child': {
          border: 'none'
        }
      });
    }
  };

  return React.createElement(_Creatable2.default, _extends({
    styles: customStyles,
    isMulti: isMulti,
    isClearable: isClearable,
    className: classes,
    options: options
  }, other));
};

exports.default = FormSelect;