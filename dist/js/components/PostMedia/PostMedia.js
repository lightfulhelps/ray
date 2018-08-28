'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostMedia = function PostMedia(_ref) {
  var className = _ref.className,
      media = _ref.media;

  var blockClass = 'post-media';
  var classes = (0, _classnames2.default)(className, blockClass, blockClass + '--' + media.length);

  if (!media.length) {
    return _react2.default.createElement(
      'div',
      { className: classes + ' ' + blockClass + '--empty' },
      'No media'
    );
  }

  var video = media.find(function (m) {
    return m.type === 'video';
  });

  if (video) {
    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement('video', { className: blockClass + '__video', controls: true, src: video.url })
    );
  }

  return _react2.default.createElement(
    'div',
    { className: classes },
    media.map(function (m, i) {
      return _react2.default.createElement('div', {
        key: i,
        className: blockClass + '__image',
        style: { backgroundImage: 'url(' + m.url + ')' }
      });
    })
  );
};

PostMedia.propTypes = {
  className: _propTypes2.default.string,
  media: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    type: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired
  }).isRequired).isRequired
};
exports.default = PostMedia;