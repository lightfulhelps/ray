'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SearchInput = function SearchInput(_ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      onSearch = _ref.onSearch,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? 'Search...' : _ref$placeholder,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['className', 'onChange', 'onSearch', 'placeholder', 'value']);

  var classes = (0, _classnames2.default)(className, 'search-input input-group shadow');
  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  return React.createElement(
    'div',
    _extends({}, other, { className: classes }),
    React.createElement(_.FormInput, {
      'data-test-id': 'search-input',
      onChange: onChange,
      onKeyPress: handleKeyPress,
      placeholder: placeholder,
      value: value
    }),
    React.createElement(
      'div',
      { className: 'input-group-append' },
      React.createElement(_.Button, {
        'data-test-id': 'search-input-button',
        icon: 'search',
        isOutline: true,
        onClick: onSearch,
        theme: 'gray-600'
      })
    )
  );
};

exports.default = SearchInput;