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

  var sharedClasses = (0, _classnames2.default)(className, 'post-media', 'post-media--' + media.length);
  var emptyClasses = (0, _classnames2.default)(sharedClasses, 'd-flex justify-content-center align-items-center bg-gray-100 text-gray-300 h5');
  var videoClasses = (0, _classnames2.default)(sharedClasses);
  var imageClasses = (0, _classnames2.default)(sharedClasses);

  if (!media.length) {
    return _react2.default.createElement(
      'div',
      { className: emptyClasses },
      'No media'
    );
  }

  var video = media.find(function (m) {
    return m.type === 'video';
  });

  if (video) {
    return _react2.default.createElement(
      'div',
      { className: videoClasses },
      _react2.default.createElement('video', { className: 'post-media__video', controls: true, src: video.url })
    );
  }

  return _react2.default.createElement(
    'div',
    { className: imageClasses },
    media.map(function (m, i) {
      return _react2.default.createElement('div', { key: i, className: 'post-media__image', style: { backgroundImage: 'url(' + m.url + ')' } });
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