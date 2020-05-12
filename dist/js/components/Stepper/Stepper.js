"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var Step_1 = __importDefault(require("../Step/Step"));
var Stepper = function (_a) {
    var activeStep = _a.activeStep, className = _a.className, steps = _a.steps, other = __rest(_a, ["activeStep", "className", "steps"]);
    var classes = classnames_1.default(className, 'stepper', 'd-flex flex-column flex-sm-row justify-content-between');
    if (!Array.isArray(steps) || !activeStep) {
        return null;
    }
    return (React.createElement("div", __assign({}, other, { className: classes, "data-test-id": "stepper" }), steps.map(function (step, i) { return (React.createElement(Step_1.default, { activeStep: activeStep, isLast: i === steps.length - 1, key: i, onClick: step.onClick, label: step.label, thisStep: i + 1, value: step.value })); })));
};
exports.default = Stepper;
//# sourceMappingURL=Stepper.js.map