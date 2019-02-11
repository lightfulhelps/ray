'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Col = require('../Col/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Step = function Step(_ref) {
  var label = _ref.label,
      value = _ref.value,
      isLast = _ref.isLast,
      activeStep = _ref.activeStep,
      thisStep = _ref.thisStep;

  var classes = (0, _classnames2.default)('d-flex align-items-center stepper__step mb-1', { 'stepper__step--active': activeStep === thisStep },
  // { 'stepper__step--todo': thisStep > activeStep }
  { 'stepper__step--done': thisStep < activeStep });

  var getValue = function getValue() {
    if (thisStep < activeStep) {
      return React.createElement(_Icon2.default, { name: 'tick' });
    }
    return value;
  };

  return React.createElement(
    _Col2.default,
    { xs: 12, sm: 4, md: 4 },
    React.createElement(
      'div',
      { className: classes },
      React.createElement(
        'div',
        { className: 'stepper__step__value border rounded-circle d-flex align-items-center justify-content-center mr-1' },
        getValue()
      ),
      React.createElement(
        'span',
        { className: 'mr-1' },
        label
      ),
      !isLast && React.createElement('div', { className: 'line d-none d-sm-block' })
    )
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