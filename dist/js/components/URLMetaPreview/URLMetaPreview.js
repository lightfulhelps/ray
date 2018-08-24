'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDotdotdot = require('react-dotdotdot');

var _reactDotdotdot2 = _interopRequireDefault(_reactDotdotdot);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cleanURL = function cleanURL(url) {
  return url.replace(/https?:\/\/(www.)?/, '');
};


var URLMetaPreview = function URLMetaPreview(_ref) {
  var className = _ref.className,
      description = _ref.description,
      image = _ref.image,
      _ref$isVertical = _ref.isVertical,
      isVertical = _ref$isVertical === undefined ? false : _ref$isVertical,
      title = _ref.title,
      url = _ref.url;

  var baseClass = 'url-meta-preview';
  var classes = (0, _classnames2.default)(className, baseClass, 'bg-white h-100');

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      'div',
      { className: isVertical ? '' : 'row h-100' },
      image && _react2.default.createElement(
        'div',
        { className: isVertical ? '' : 'col-4 pr-0' },
        _react2.default.createElement(
          'div',
          {
            className: baseClass + '__image w-100 h-100 bg-cover bg-center',
            style: { backgroundImage: 'url(' + image + ')' }
          },
          isVertical && _react2.default.createElement('img', { className: 'mw-100', src: image, alt: '' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: isVertical ? '' : image ? 'col-8 pl-0' : 'col-12' },
        _react2.default.createElement(
          'div',
          { className: 'd-flex flex-column justify-content-between h-100 p-2' },
          _react2.default.createElement(
            _reactDotdotdot2.default,
            { clamp: 2 },
            _react2.default.createElement(
              'a',
              {
                className: baseClass + '__title d-block text-body small font-weight-bold',
                href: url,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              title
            )
          ),
          description && _react2.default.createElement(
            _reactDotdotdot2.default,
            {
              className: baseClass + '__description small font-weight-light text-gray-500',
              clamp: 3
            },
            description
          ),
          _react2.default.createElement(
            'a',
            {
              className: baseClass + '__url d-block text-body text-truncate small',
              href: url,
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            cleanURL(url)
          )
        )
      )
    )
  );
};

URLMetaPreview.propTypes = {
  className: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string,
  isVertical: _propTypes2.default.bool,
  title: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string.isRequired
};
exports.default = URLMetaPreview;