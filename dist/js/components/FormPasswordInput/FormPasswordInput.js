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
define(["require", "exports", "react", "classnames", "../.."], function (require, exports, react_1, classnames_1, __1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importStar(react_1);
    classnames_1 = __importDefault(classnames_1);
    var FormPasswordInput = function (_a) {
        var className = _a.className, onChange = _a.onChange, onBlur = _a.onBlur, value = _a.value, id = _a.id, isInvalid = _a.isInvalid, isValid = _a.isValid, _b = _a.name, name = _b === void 0 ? 'password' : _b, placeholder = _a.placeholder, size = _a.size, other = __rest(_a, ["className", "onChange", "onBlur", "value", "id", "isInvalid", "isValid", "name", "placeholder", "size"]);
        var _c = react_1.useState(false), hidePassword = _c[0], setHidePassword = _c[1];
        var togglePassword = function () {
            setHidePassword(!hidePassword);
        };
        var classes = classnames_1.default(className, 'form-control');
        return (react_1.default.createElement("div", { className: "form-password-input input-group" },
            react_1.default.createElement(__1.FormInput, __assign({}, other, { className: classes, "data-test-id": "password-input", isInvalid: isInvalid, isValid: isValid, name: name, id: id, onBlur: onBlur, onChange: onChange, placeholder: placeholder, size: size, type: hidePassword ? 'password' : 'text', value: value })),
            react_1.default.createElement("div", { className: "input-group-append" },
                react_1.default.createElement(__1.Button, { "data-test-id": "password-input-button", icon: hidePassword ? 'preview' : 'previewHide', isOutline: true, onClick: togglePassword, size: size, theme: "gray-600" },
                    react_1.default.createElement("span", { className: "form-password-input__toggle-password-text" }, hidePassword ? 'Show' : 'Hide')))));
    };
    exports.default = FormPasswordInput;
});
//# sourceMappingURL=FormPasswordInput.js.map