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
var FormInput = function (_a) {
    var className = _a.className, isInvalid = _a.isInvalid, isValid = _a.isValid, size = _a.size, _b = _a.type, type = _b === void 0 ? 'text' : _b, name = _a.name, other = __rest(_a, ["className", "isInvalid", "isValid", "size", "type", "name"]);
    var checkInput = type === 'radio' || type === 'checkbox';
    var fileInput = type === 'file';
    var classes = classnames_1.default(className, checkInput ? 'form-check-input' : fileInput ? 'form-control-file' : 'form-control', size ? "form-control-" + size : false, {
        'is-invalid': isInvalid,
    }, { 'is-valid': isValid });
    return React.createElement("input", __assign({}, other, { name: name, className: classes, type: type }));
};
exports.default = FormInput;
//# sourceMappingURL=FormInput.js.map