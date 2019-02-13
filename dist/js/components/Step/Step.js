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
      onClick = _ref.onClick,
      thisStep = _ref.thisStep,
      value = _ref.value;

  var isTodo = thisStep > activeStep;
  var isActive = activeStep === thisStep;
  var isCompleted = thisStep < activeStep;

  var stepClasses = (0, _classnames2.default)('d-flex align-items-center', {
    'mb-1 mb-sm-0 flex-fill': !isLast
  });

  var valueClasses = (0, _classnames2.default)('stepper__value border rounded-circle d-flex align-items-center justify-content-center mr-1 text-xs font-weight-bold', { 'bg-gray-400 border-gray-400 text-white': isTodo }, { 'bg-primary text-white border-primary': isActive }, { 'bg-white border-primary': isCompleted });

  var labelClasses = (0, _classnames2.default)('mr-1', { 'text-gray-400 font-weight-light': isTodo }, { 'font-weight-bold text-primary': isActive || isCompleted });

  return React.createElement(
    'div',
    { className: stepClasses },
    React.createElement(
      'div',
      {
        className: 'd-flex align-items-center ' + (onClick ? 'cursor-pointer' : ''),
        'data-test-id': 'stepper-step',
        onClick: onClick
      },
      React.createElement(
        'div',
        { className: valueClasses },
        isCompleted ? React.createElement(_Icon2.default, { name: 'tick', theme: 'primary' }) : value
      ),
      React.createElement(
        'div',
        { className: labelClasses },
        label
      )
    ),
    !isLast && React.createElement('div', { className: 'd-none d-sm-block mr-1 flex-fill border-top border-gray-400' })
  );
};
Step.propTypes = {
  activeStep: _propTypes2.default.number.isRequired,
  isLast: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func,
  thisStep: _propTypes2.default.number.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
};
exports.default = Step;