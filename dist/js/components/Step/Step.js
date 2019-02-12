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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Step = function Step(_ref) {
  var activeStep = _ref.activeStep,
      isLast = _ref.isLast,
      label = _ref.label,
      thisStep = _ref.thisStep,
      value = _ref.value;

  var classes = (0, _classnames2.default)('stepper__step__value border rounded-circle d-flex align-items-center justify-content-center mr-1',
  // active
  { 'bg-primary text-white border-primary': activeStep === thisStep },
  // completed
  { 'bg-white border-primary': thisStep < activeStep },
  // todo
  { 'bg-gray-400 text-white': thisStep > activeStep });

  var getValue = function getValue() {
    if (thisStep < activeStep) {
      return React.createElement(_Icon2.default, { name: 'tick', theme: 'primary' });
    }
    return React.createElement(
      'b',
      null,
      value
    );
  };

  return React.createElement(
    'div',
    { className: 'd-flex align-items-center stepper__step mb-2 mb-sm-0' },
    React.createElement(
      'div',
      { className: classes },
      getValue()
    ),
    React.createElement(
      'span',
      { className: 'mr-1 text-gray-500 font-weight-bold' },
      label
    ),
    !isLast && React.createElement('div', { className: 'line d-none d-sm-block mr-1' })
  );
};
Step.propTypes = {
  activeStep: _propTypes2.default.number.isRequired,
  isLast: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.string.isRequired,
  thisStep: _propTypes2.default.number.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
};
exports.default = Step;