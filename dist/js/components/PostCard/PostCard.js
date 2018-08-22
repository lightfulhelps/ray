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
  var className = _ref.className,
      content = _ref.content,
      date = _ref.date,
      dateFormat = _ref.dateFormat,
      isDraft = _ref.isDraft,
      isInvalid = _ref.isInvalid,
      title = _ref.title;

  var classes = (0, _classnames2.default)(className, 'post-card', 'shadow', { 'bg-light border-gray-500': isDraft }, { 'border-danger': isInvalid });

  return React.createElement(
    _.Card,
    { className: classes },
    React.createElement(_.PostHeader, { title: title, date: date, dateFormat: dateFormat }),
    React.createElement(
      _.PostContent,
      null,
      content
    )
  );
};
PostCard.propTypes = {
  className: _propTypes2.default.string,
  content: _propTypes2.default.string.isRequired,
  date: _propTypes2.default.oneOfType([function () {
    return (typeof Date === 'function' ? _propTypes2.default.instanceOf(Date) : _propTypes2.default.any).apply(this, arguments);
  }, _propTypes2.default.number, _propTypes2.default.string]),
  dateFormat: _propTypes2.default.string,
  isDraft: _propTypes2.default.bool,
  isInvalid: _propTypes2.default.bool,
  title: _propTypes2.default.string.isRequired
};
exports.default = PostCard;