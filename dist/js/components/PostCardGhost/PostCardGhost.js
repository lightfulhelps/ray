'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PostCardGhost = function PostCardGhost(_ref) {
  var className = _ref.className,
      isLoading = _ref.isLoading,
      other = _objectWithoutProperties(_ref, ['className', 'isLoading']);

  var classes = (0, _classnames2.default)(className, 'post-card-ghost', 'shadow border-0', {
    loading: isLoading
  });

  return React.createElement(
    _.Card,
    _extends({}, other, { className: classes }),
    React.createElement(
      'div',
      { className: 'd-flex align-items-center px-2 pt-2 pb-0' },
      React.createElement('div', { className: 'ghost rounded-circle mr-2 mb-0', style: { width: '40px', height: '40px' } }),
      React.createElement(
        'div',
        { className: 'flex-fill' },
        React.createElement('div', { className: 'ghost w-50' }),
        React.createElement('div', { className: 'ghost ghost-sm w-25' }),
        React.createElement('div', { className: 'ghost ghost-sm w-25 mb-0' })
      )
    ),
    React.createElement(
      'div',
      { className: 'p-2' },
      React.createElement('div', { className: 'ghost' }),
      React.createElement('div', { className: 'ghost' }),
      React.createElement('div', { className: 'ghost' }),
      React.createElement('div', { className: 'ghost' }),
      React.createElement('div', { className: 'ghost mb-0' })
    ),
    React.createElement(
      'div',
      null,
      React.createElement('div', { className: 'ghost ghost-lg mb-0', style: { height: '164px' } })
    ),
    React.createElement(
      'div',
      { className: 'd-flex justify-content-between m-2' },
      React.createElement('div', { className: 'ghost w-50 mb-0' }),
      React.createElement('div', { className: 'ghost w-25 mb-0' })
    )
  );
};

exports.default = PostCardGhost;