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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Stepper = function Stepper(_ref) {
  var activeStep = _ref.activeStep,
      className = _ref.className,
      steps = _ref.steps,
      other = _objectWithoutProperties(_ref, ['activeStep', 'className', 'steps']);

  var classes = (0, _classnames2.default)(className, 'stepper', 'd-flex flex-column flex-sm-row justify-content-between');

  if (!Array.isArray(steps) || !activeStep) {
    return null;
  }

  return React.createElement(
    'div',
    _extends({}, other, { className: classes, 'data-test-id': 'stepper' }),
    steps.map(function (step, i) {
      return React.createElement(_Step2.default, {
        activeStep: activeStep,
        isLast: i === steps.length - 1,
        key: i,
        onClick: step.onClick,
        label: step.label,
        thisStep: i + 1,
        value: step.value
      });
    })
  );
};

exports.default = Stepper;