'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSize = exports.getBorder = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

var _ = require('../../');

var _SelectOption = require('./SelectOption');

var _SelectOption2 = _interopRequireDefault(_SelectOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getBorder = exports.getBorder = function getBorder(isHovered, isFocused, isInvalid) {
  if (isInvalid) return '#f25270';

  if (isFocused) return '#27b0cc';

  if (isHovered) return '#adb5bd';

  return '#dee2e6';
};

var getSize = exports.getSize = function getSize(size) {
  if (size === 'lg') {
    return {
      padding: '.5rem 1rem',
      fontSize: '1.25rem',
      height: 'inherit'
    };
  }
  if (size === 'sm') {
    return {
      padding: '0 .5rem',
      fontSize: '.875rem',
      height: 'inherit'
    };
  }
  return {
    padding: '0.9375rem',
    fontSize: 'inherit',
    height: 'calc(2.875rem + 2px)'
  };
};

var FormSelect = function FormSelect(_ref) {
  var className = _ref.className,
      isCreatable = _ref.isCreatable,
      isInvalid = _ref.isInvalid,
      isValid = _ref.isValid,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ['className', 'isCreatable', 'isInvalid', 'isValid', 'size']);

  var classNamePrefix = 'form-select';

  var classes = (0, _classnames2.default)(className, size ? classNamePrefix + '-' + size : classNamePrefix, {
    'is-invalid': isInvalid
  }, { 'is-valid': isValid });

  var Component = isCreatable ? _Creatable2.default : _reactSelect2.default;

  var ClearIndicator = function ClearIndicator(_ref2) {
    var innerProps = _ref2.innerProps;
    return React.createElement(_.Icon, _extends({}, innerProps, { name: 'close' }));
  };

  var DropdownIndicator = function DropdownIndicator() {
    return React.createElement(_.Icon, { name: 'caretDown' });
  };

  var MultiValue = function MultiValue(props) {
    return React.createElement(
      _.Tag,
      { className: 'mr-1', onRemove: props.removeProps.onClick, theme: 'gray-900' },
      props.children
    );
  };

  var _getSize = getSize(size),
      height = _getSize.height,
      padding = _getSize.padding,
      fontSize = _getSize.fontSize;

  var customStyles = {
    control: function control(base, state) {
      return _extends({}, base, {
        height: height,
        padding: padding,
        fontSize: fontSize,
        'box-shadow': 'none',
        ':hover': {
          'border-color': getBorder(state.isFocused, true, isInvalid)
        },
        'border-color': getBorder(state.isFocused, null, isInvalid)
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
        margin: '0',
        border: '1px solid #dee2e6'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        backgroundColor: state.isFocused ? '#f8f9fa' : 'inherit',
        color: 'inherit',
        borderBottom: '1px solid #e9ecef',
        ':last-child': {
          border: 'none'
        }
      });
    }
  };

  return React.createElement(Component, _extends({}, other, {
    className: classes,
    classNamePrefix: classNamePrefix,
    components: {
      ClearIndicator: ClearIndicator,
      DropdownIndicator: DropdownIndicator,
      MultiValue: MultiValue,
      Option: _SelectOption2.default
    },
    styles: customStyles
  }));
};

exports.default = FormSelect;