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

  var classes = (0, _classnames2.default)(className,
  // to do; put these styles in:
  // 'form-control',
  // size ? `form-control-${size}` : false,
  {
    'is-invalid': isInvalid
  }, { 'is-valid': isValid });

  return React.createElement(_Creatable2.default, _extends({
    isMulti: isMulti,
    isClearable: isClearable,
    className: classes,
    options: options
  }, other));
};

exports.default = FormSelect;