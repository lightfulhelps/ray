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
      url = _ref.url,
      other = _objectWithoutProperties(_ref, ['className', 'description', 'image', 'isVertical', 'title', 'url']);

  var classes = (0, _classnames2.default)(className, 'url-meta-preview', 'bg-white h-100');

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
          {
            className: 'w-100 h-100 bg-cover bg-center',
            'data-test-id': 'url-meta-preview-image',
            style: { backgroundImage: 'url(' + image + ')' }
          },
          isVertical && _react2.default.createElement('img', { className: 'w-100', src: image, alt: '' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: isVertical ? '' : image ? 'col-8 pl-0' : 'col-12' },
        _react2.default.createElement(
          'div',
          { className: 'd-flex flex-column justify-content-between h-100 p-1 text-xs' },
          _react2.default.createElement(
            'a',
            {
              className: 'font-weight-bold text-dark text-truncate',
              href: url,
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            title
          ),
          description && _react2.default.createElement(
            'div',
            {
              className: 'font-weight-light text-gray-500 text-truncate',
              'data-test-id': 'url-meta-preview-description'
            },
            description
          )
          // <ResponsiveEllipsis
          //   className="font-weight-light text-gray-500"
          //   text={description}
          //   maxLine={3}
          //   ellipsis="..."
          //   basedOn="words"
          // />
          ,
          _react2.default.createElement(
            'a',
            {
              className: 'd-block text-body text-truncate',
              'data-test-id': 'url-meta-preview-url',
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