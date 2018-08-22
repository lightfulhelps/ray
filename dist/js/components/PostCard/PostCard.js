'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PostCard = function PostCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isDraft = _ref.isDraft,
      isInvalid = _ref.isInvalid;

  var classes = (0, _classnames2.default)(className, 'post-card', 'shadow', { 'bg-light border-gray-500': isDraft }, { 'border-danger': isInvalid });

  return React.createElement(
    _.Card,
    { className: classes },
    children
  );
};
PostCard.propTypes = {
  children: function children() {
    return (typeof (React.ChildrenArray == null ? {} : React.ChildrenArray) === 'function' ? _propTypes2.default.instanceOf(React.ChildrenArray == null ? {} : React.ChildrenArray).isRequired : _propTypes2.default.any.isRequired).apply(this, arguments);
  },
  className: _propTypes2.default.string,
  isDraft: _propTypes2.default.bool,
  isInvalid: _propTypes2.default.bool
};
exports.default = PostCard;