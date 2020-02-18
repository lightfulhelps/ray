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
define(["require", "exports", "react", "classnames", "react-select", "react-select/lib/Creatable", "./ClearIndicator", "./DropdownIndicator", "./MultiValue", "./Option"], function (require, exports, React, classnames_1, react_select_1, Creatable_1, ClearIndicator_1, DropdownIndicator_1, MultiValue_1, Option_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    classnames_1 = __importDefault(classnames_1);
    react_select_1 = __importDefault(react_select_1);
    ClearIndicator_1 = __importDefault(ClearIndicator_1);
    DropdownIndicator_1 = __importDefault(DropdownIndicator_1);
    MultiValue_1 = __importDefault(MultiValue_1);
    Option_1 = __importDefault(Option_1);
    var FormSelect = function (_a) {
        var className = _a.className, isCreatable = _a.isCreatable, isInvalid = _a.isInvalid, isValid = _a.isValid, size = _a.size, other = __rest(_a, ["className", "isCreatable", "isInvalid", "isValid", "size"]);
        var Component = isCreatable ? Creatable_1.Creatable : react_select_1.default;
        var classNamePrefix = 'form-select';
        var classes = classnames_1.default(className, classNamePrefix, size ? classNamePrefix + "-" + size : '', { 'is-invalid': isInvalid }, { 'is-valid': isValid });
        return (React.createElement(Component, __assign({}, other, { className: classes, classNamePrefix: classNamePrefix, components: {
                ClearIndicator: ClearIndicator_1.default,
                DropdownIndicator: DropdownIndicator_1.default,
                MultiValue: MultiValue_1.default,
                Option: Option_1.default,
            }, styles: {
                clearIndicator: function () { return ({}); },
                container: function () { return ({}); },
                control: function () { return ({}); },
                dropdownIndicator: function () { return ({}); },
                group: function () { return ({}); },
                groupHeading: function () { return ({}); },
                indicatorsContainer: function () { return ({}); },
                indicatorSeparator: function () { return ({}); },
                input: function () { return ({}); },
                // loadingIndicator: () => ({}),
                // loadingMessage: () => ({}),
                menu: function () { return ({}); },
                menuList: function () { return ({}); },
                multiValue: function () { return ({}); },
                multiValueLabel: function () { return ({}); },
                multiValueRemove: function () { return ({}); },
                noOptionsMessage: function () { return ({}); },
                option: function () { return ({}); },
                placeholder: function () { return ({}); },
                singleValue: function () { return ({}); },
                valueContainer: function () { return ({}); },
            } })));
    };
    exports.default = FormSelect;
});
//# sourceMappingURL=FormSelect.js.map