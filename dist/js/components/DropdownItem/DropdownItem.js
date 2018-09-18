'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Props = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var bpfrpt_proptype_Props = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  isActive: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  isHeader: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  tag: _propTypes2.default.string
};


var DropdownItem = function DropdownItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      isHeader = _ref.isHeader,
      onClick = _ref.onClick,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'div' : _ref$tag,
      other = _objectWithoutProperties(_ref, ['children', 'className', 'isActive', 'isDisabled', 'isHeader', 'onClick', 'tag']);

  var classes = (0, _classnames2.default)(className, { 'dropdown-item': !isHeader }, { 'dropdown-header': isHeader }, { active: isActive }, { disabled: isDisabled }, { 'cursor-pointer': onClick && !isDisabled });

  function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return React.createElement(
    Tag,
    _extends({}, other, { className: classes, onClick: handleClick }),
    children
  );
};

exports.default = DropdownItem;
exports.bpfrpt_proptype_Props = bpfrpt_proptype_Props;