'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _icons = require('../Icon/icons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var DropdownItem = function DropdownItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      icon = _ref.icon,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick;

  var classes = (0, _classnames2.default)(className, 'dropdown-item', { clickable: onClick });
  return React.createElement(
    'div',
    { className: classes, onClick: onClick },
    icon && React.createElement(_Icon2.default, { name: icon, className: 'mr-1' }),
    React.createElement(
      'span',
      null,
      label
    )
  );
};
DropdownItem.propTypes = {
  className: _propTypes2.default.string,
  icon: function icon() {
    return (typeof _icons.bpfrpt_proptype_IconNameType === 'function' ? _icons.bpfrpt_proptype_IconNameType : _propTypes2.default.shape(_icons.bpfrpt_proptype_IconNameType)).apply(this, arguments);
  },
  label: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
};
exports.default = DropdownItem;