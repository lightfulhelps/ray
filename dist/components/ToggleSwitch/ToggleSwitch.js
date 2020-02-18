"use strict";
/* eslint-disable jsx-a11y/label-has-associated-control */
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
var ToggleSwitch = function (_a) {
    var checked = _a.checked, className = _a.className, _b = _a.id, id = _b === void 0 ? 'toggle-switch' : _b, isDisabled = _a.isDisabled, label = _a.label, labelAlign = _a.labelAlign, onChange = _a.onChange, onClick = _a.onClick, other = __rest(_a, ["checked", "className", "id", "isDisabled", "label", "labelAlign", "onChange", "onClick"]);
    var classes = classnames_1.default(className, 'custom-control custom-switch', labelAlign && labelAlign !== 'right' && "custom-switch-" + labelAlign);
    function handleClick(e) {
        if (isDisabled) {
            e.preventDefault();
            return;
        }
        if (typeof onClick === 'function')
            onClick(e);
    }
    return (React.createElement("div", __assign({}, other, { className: classes }),
        React.createElement("input", { type: "checkbox", className: "custom-control-input", id: id, disabled: isDisabled, checked: checked, onChange: onChange }),
        React.createElement("label", { className: "custom-control-label", htmlFor: id, onClick: handleClick }, label)));
};
exports.default = ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.js.map