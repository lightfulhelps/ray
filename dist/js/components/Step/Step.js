"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var stepClasses = (0, _classnames["default"])('d-flex align-items-center', {
    'mb-1 mb-sm-0 flex-fill': !isLast
  });
  var valueClasses = (0, _classnames["default"])('stepper__value border rounded-circle d-flex align-items-center justify-content-center mr-1 text-xs font-weight-bold', {
    'bg-gray-400 border-gray-400 text-white': isTodo
  }, {
    'bg-primary text-white border-primary': isActive
  }, {
    'bg-white border-primary': isCompleted
  });
  var labelClasses = (0, _classnames["default"])('mr-1', {
    'text-gray-400 font-weight-light': isTodo
  }, {
    'font-weight-bold text-primary': isActive || isCompleted
  });
  return React.createElement("div", {
    className: stepClasses
  }, React.createElement("div", {
    className: "d-flex align-items-center ".concat(onClick ? 'cursor-pointer' : ''),
    "data-test-id": "stepper-step",
    onClick: onClick
  }, React.createElement("div", {
    className: valueClasses
  }, isCompleted ? React.createElement(_Icon["default"], {
    name: "tick",
    theme: "primary"
  }) : value), React.createElement("div", {
    className: labelClasses
  }, label)), !isLast && React.createElement("div", {
    className: "d-none d-sm-block mr-1 flex-fill border-top border-gray-400"
  }));
};

var _default = Step;
exports["default"] = _default;