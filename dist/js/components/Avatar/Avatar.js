'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      url = _ref.url,
      provider = _ref.provider;

  var classes = (0, _classnames2.default)(className, 'avatar');

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      'div',
      { className: 'avatar-image-wrap' },
      url && _react2.default.createElement('img', { className: 'avatar-image', src: url, alt: '' })
    ),
    provider && _react2.default.createElement(
      'div',
      { className: 'avatar-provider avatar-provider-' + provider },
      _react2.default.createElement(_.Icon, { name: provider, color: '#ffffff', size: 16 })
    )
  );
};
Avatar.propTypes = {
  className: _propTypes2.default.string,
  provider: _propTypes2.default.oneOf(['facebook', 'twitter', 'linkedin']),
  url: _propTypes2.default.string
};
exports.default = Avatar;