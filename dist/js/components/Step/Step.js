"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
var Step = function (_a) {
    var activeStep = _a.activeStep, isLast = _a.isLast, label = _a.label, onClick = _a.onClick, thisStep = _a.thisStep, value = _a.value;
    var isTodo = thisStep > activeStep;
    var isActive = activeStep === thisStep;
    var isCompleted = thisStep < activeStep;
    var stepClasses = classnames_1.default('d-flex align-items-center', {
        'mb-1 mb-sm-0 flex-fill': !isLast,
    });
    var valueClasses = classnames_1.default('stepper__value border rounded-circle d-flex align-items-center justify-content-center mr-1 text-xs font-weight-bold', { 'bg-gray-400 border-gray-400 text-white': isTodo }, { 'bg-primary text-white border-primary': isActive }, { 'bg-white border-primary': isCompleted });
    var labelClasses = classnames_1.default('mr-1', { 'text-gray-400 font-weight-light': isTodo }, { 'font-weight-bold text-primary': isActive || isCompleted });
    return (React.createElement("div", { className: stepClasses },
        React.createElement("div", { className: "d-flex align-items-center " + (onClick ? 'cursor-pointer' : ''), "data-test-id": "stepper-step", onClick: onClick },
            React.createElement("div", { className: valueClasses }, isCompleted ? React.createElement(Icon_1.default, { name: "tick", theme: "primary" }) : value),
            React.createElement("div", { className: labelClasses }, label)),
        !isLast && React.createElement("div", { className: "d-none d-sm-block mr-1 flex-fill border-top border-gray-400" })));
};
exports.default = Step;
//# sourceMappingURL=Step.js.map