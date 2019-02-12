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

  var isTodo = thisStep > activeStep;
  var isActive = activeStep === thisStep;
  var isCompleted = thisStep < activeStep;

  var classes = (0, _classnames2.default)('stepper__value border rounded-circle d-flex align-items-center justify-content-center mr-1 text-xs',
  // active
  { 'bg-primary text-white border-primary': isActive },
  // completed
  { 'bg-white border-primary': isCompleted },
  // todo
  { 'bg-gray-400 border-gray-400 text-white': isTodo });

  var labelClasses = (0, _classnames2.default)('mr-1', { 'text-gray-400 font-weight-light': isTodo }, {
    'font-weight-bold text-primary': isActive || isCompleted
  });

  var getValue = function getValue() {
    if (isCompleted) {
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
    { className: 'd-flex align-items-center ' + (isLast ? '' : 'mb-2 mb-sm-0 flex-fill') },
    React.createElement(
      'div',
      { className: classes },
      getValue()
    ),
    React.createElement(
      'div',
      { className: labelClasses },
      label
    ),
    !isLast && React.createElement('div', { className: 'd-none d-sm-block mr-1 flex-fill border-top border-gray-400' })
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