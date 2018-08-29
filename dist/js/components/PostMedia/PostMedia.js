'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PostMedia = function PostMedia(_ref) {
  var className = _ref.className,
      media = _ref.media,
      other = _objectWithoutProperties(_ref, ['className', 'media']);

  var blockClass = 'post-media';
  var classes = (0, _classnames2.default)(className, blockClass, blockClass + '--' + media.length);

  if (!media.length) {
    return _react2.default.createElement(
      'div',
      _extends({}, other, { className: classes + ' ' + blockClass + '--empty' }),
      'No media'
    );
  }

  var video = media.find(function (m) {
    return m.type === 'video';
  });

  if (video) {
    return _react2.default.createElement(
      'div',
      _extends({}, other, { className: classes }),
      _react2.default.createElement('video', { className: blockClass + '__video', controls: true, src: video.url })
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, other, { className: classes }),
    media.map(function (m, i) {
      return _react2.default.createElement('div', {
        key: i,
        className: blockClass + '__image',
        style: { backgroundImage: 'url(' + m.url + ')' }
      });
    })
  );
};

exports.default = PostMedia;