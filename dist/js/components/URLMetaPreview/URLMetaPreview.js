'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLinesEllipsis = require('react-lines-ellipsis');

var _reactLinesEllipsis2 = _interopRequireDefault(_reactLinesEllipsis);

var _responsiveHOC = require('react-lines-ellipsis/lib/responsiveHOC');

var _responsiveHOC2 = _interopRequireDefault(_responsiveHOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cleanURL = function cleanURL(url) {
  return url.replace(/https?:\/\/(www.)?/, '');
};

var ResponsiveEllipsis = (0, _responsiveHOC2.default)()(_reactLinesEllipsis2.default);

var URLMetaPreview = function URLMetaPreview(_ref) {
  var className = _ref.className,
      description = _ref.description,
      image = _ref.image,
      _ref$isVertical = _ref.isVertical,
      isVertical = _ref$isVertical === undefined ? false : _ref$isVertical,
      title = _ref.title,
      url = _ref.url,
      other = _objectWithoutProperties(_ref, ['className', 'description', 'image', 'isVertical', 'title', 'url']);

  var blockClass = 'url-meta-preview';
  var classes = (0, _classnames2.default)(className, blockClass);

  if (!url) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    _extends({}, other, { className: classes }),
    _react2.default.createElement(
      'div',
      { className: isVertical ? '' : 'row h-100' },
      image && _react2.default.createElement(
        'div',
        { className: isVertical ? '' : 'col-4 pr-0' },
        _react2.default.createElement(
          'div',
          { className: blockClass + '__image', style: { backgroundImage: 'url(' + image + ')' } },
          isVertical && _react2.default.createElement('img', { src: image, alt: '' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: isVertical ? '' : image ? 'col-8 pl-0' : 'col-12' },
        _react2.default.createElement(
          'div',
          { className: blockClass + '__main' },
          _react2.default.createElement(
            'a',
            {
              className: blockClass + '__title',
              href: url,
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement(ResponsiveEllipsis, { text: title, maxLine: 2, ellipsis: '...', basedOn: 'words' })
          ),
          description && _react2.default.createElement(ResponsiveEllipsis, {
            className: blockClass + '__description',
            text: description,
            maxLine: 3,
            ellipsis: '...',
            basedOn: 'words'
          }),
          _react2.default.createElement(
            'a',
            {
              className: blockClass + '__url',
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

exports.default = URLMetaPreview;