'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      isDisconnected = _ref.isDisconnected,
      url = _ref.url,
      provider = _ref.provider,
      other = _objectWithoutProperties(_ref, ['className', 'isDisconnected', 'url', 'provider']);

  var classes = (0, _classnames2.default)(className, 'avatar', { 'avatar-disconnected': isDisconnected });

  return _react2.default.createElement(
    'div',
    _extends({}, other, { className: classes }),
    _react2.default.createElement(
      'div',
      { className: 'avatar-image-wrap' },
      url && _react2.default.createElement('img', { className: 'avatar-image', src: url, alt: '' })
    ),
    provider && _react2.default.createElement(
      'div',
      { className: 'avatar-provider avatar-provider-' + provider },
      _react2.default.createElement(_.Icon, { name: provider, color: '#ffffff' })
    )
  );
};

exports.default = Avatar;