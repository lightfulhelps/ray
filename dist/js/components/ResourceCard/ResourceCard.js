'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHex = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isHex = exports.isHex = function isHex(string) {
  return (/^#([0-9A-F]{3}){1,2}$/i.test(string)
  );
};

var ResourceCard = function ResourceCard(_ref) {
  var campaign = _ref.campaign,
      className = _ref.className,
      gradientEnd = _ref.gradientEnd,
      gradientStart = _ref.gradientStart,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'a' : _ref$tag,
      title = _ref.title,
      backgroundImage = _ref.backgroundImage,
      other = _objectWithoutProperties(_ref, ['campaign', 'className', 'gradientEnd', 'gradientStart', 'tag', 'title', 'backgroundImage']);

  var classes = (0, _classnames2.default)(className, 'resource-card', 'card p-1 rounded shadow h-100 bg-gray-900 text-decoration-none');
  var style = {};

  if (backgroundImage) {
    style.backgroundImage = 'url(\'' + backgroundImage + '\')';
  } else if (gradientStart && isHex(gradientStart) && gradientEnd && isHex(gradientEnd)) {
    style.backgroundImage = 'linear-gradient(90deg, ' + gradientStart + ' 0%, ' + gradientEnd + ' 100%)';
  }

  return React.createElement(
    Tag,
    _extends({}, other, { className: classes, style: style }),
    React.createElement(
      'div',
      { className: 'd-flex align-items-center mb-2' },
      React.createElement(
        'div',
        {
          className: 'rounded-circle d-flex align-items-center justify-content-center mr-1 flex-shrink-0',
          style: { width: '24px', height: '24px', background: 'rgba(255, 255, 255, 0.2)' }
        },
        React.createElement(_.Icon, { isActive: true, name: 'download', theme: 'white' })
      ),
      React.createElement(
        'div',
        { className: 'text-xs text-white', 'data-test-id': 'resource-card-campaign' },
        campaign
      )
    ),
    React.createElement(
      'div',
      { className: 'text-sm font-weight-bold text-white', 'data-test-id': 'resource-card-title' },
      title
    )
  );
};

exports.default = ResourceCard;