'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CampaignCard = function CampaignCard(_ref) {
  var className = _ref.className,
      cover = _ref.cover,
      status = _ref.status,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'div' : _ref$tag,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, ['className', 'cover', 'status', 'tag', 'title']);

  var classes = (0, _classnames2.default)(className, 'campaign-card', 'card rounded-lg shadow text-decoration-none h-100');
  var statusClasses = (0, _classnames2.default)('text-xs font-weight-bold', { 'text-primary': status === 'Live' }, { 'text-warning': status === 'Draft' });

  return React.createElement(
    Tag,
    _extends({}, other, { className: classes, 'data-test-id': 'campaign-card' }),
    React.createElement('div', {
      className: 'campaign-card-cover',
      'data-test-id': 'campaign-card-cover',
      style: {
        backgroundImage: 'url(' + cover + ')'
      }
    }),
    React.createElement(
      'div',
      { className: 'px-2 py-1 h-100 d-flex flex-column justify-content-between' },
      React.createElement(
        'div',
        { className: 'h6', 'data-test-id': 'campaign-card-title' },
        title
      ),
      React.createElement(
        'div',
        { className: statusClasses, 'data-test-id': 'campaign-card-status' },
        status
      )
    )
  );
};

exports.default = CampaignCard;