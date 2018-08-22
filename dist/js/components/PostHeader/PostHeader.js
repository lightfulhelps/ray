'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostHeader = function PostHeader(_ref) {
  var campaign = _ref.campaign,
      className = _ref.className,
      date = _ref.date,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === undefined ? 'D MMM [at] HH:mm' : _ref$dateFormat,
      title = _ref.title;

  var classes = (0, _classnames2.default)(className, 'post-header', 'd-flex mt-2 mr-2 mb-1 ml-2');
  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        { className: 'h5' },
        title
      ),
      date && _react2.default.createElement(
        'div',
        { className: 'post-date small text-uppercase' },
        (0, _format2.default)(date, dateFormat)
      ),
      campaign && _react2.default.createElement(
        _.Badge,
        { color: campaign.color },
        campaign.label
      )
    )
  );
};
PostHeader.propTypes = {
  campaign: _propTypes2.default.shape({
    color: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired
  }),
  className: _propTypes2.default.string,
  date: _propTypes2.default.oneOfType([function () {
    return (typeof Date === 'function' ? _propTypes2.default.instanceOf(Date) : _propTypes2.default.any).apply(this, arguments);
  }, _propTypes2.default.number, _propTypes2.default.string]),
  dateFormat: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired
};
exports.default = PostHeader;