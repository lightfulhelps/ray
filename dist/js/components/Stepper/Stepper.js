'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Step = require('../Step/Step');

var _Step2 = _interopRequireDefault(_Step);

var _Row = require('../Row/Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Stepper = function Stepper(_ref) {
  var className = _ref.className,
      steps = _ref.steps,
      activeStep = _ref.activeStep,
      other = _objectWithoutProperties(_ref, ['className', 'steps', 'activeStep']);

  var classes = (0, _classnames2.default)(className, 'stepper');

  if (!Array.isArray(steps) || !activeStep) {
    return null;
  }

  return React.createElement(
    _Row2.default,
    _extends({}, other, { className: classes }),
    steps.map(function (step, i) {
      return React.createElement(_Step2.default, {
        key: i,
        label: step.label,
        value: step.value,
        isLast: i === steps.length - 1,
        activeStep: activeStep,
        thisStep: i + 1
      });
    })
  );
};

exports.default = Stepper;