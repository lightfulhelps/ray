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

var NavLink = function NavLink(_ref) {
  var className = _ref.className,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === undefined ? 'a' : _ref$tag,
      other = _objectWithoutProperties(_ref, ['className', 'isActive', 'isDisabled', 'tag']);

  var classes = (0, _classnames2.default)(className, 'nav-link', { active: isActive }, { disabled: isDisabled });

  return React.createElement(Tag, _extends({}, other, { className: classes }));
};

exports.default = NavLink;