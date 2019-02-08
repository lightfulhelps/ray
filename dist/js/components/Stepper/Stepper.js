'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Step = require('../Step/Step');

var _Step2 = _interopRequireDefault(_Step);

var _Row = require('../Row/Row');

var _Row2 = _interopRequireDefault(_Row);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Stepper = function Stepper(_ref) {
  var steps = _ref.steps,
      activeStep = _ref.activeStep,
      className = _ref.className;

  if (!Array.isArray(steps) || !activeStep) {
    return null;
  }
  return React.createElement(
    'div',
    { className: className },
    React.createElement(
      _Row2.default,
      null,
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
    )
  );
};
Stepper.propTypes = {
  activeStep: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string.isRequired,
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
  }).isRequired).isRequired
};
exports.default = Stepper;