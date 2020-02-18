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
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var __1 = require("../..");
var Collapse = function (_a) {
    var children = _a.children, className = _a.className, label = _a.label, defaultOpen = _a.defaultOpen, other = __rest(_a, ["children", "className", "label", "defaultOpen"]);
    var _b = react_1.useState(!!defaultOpen), isOpen = _b[0], setIsOpen = _b[1];
    var classes = classnames_1.default(className);
    var handleToggle = function () {
        setIsOpen(function (prevState) { return !prevState; });
    };
    return (react_1.default.createElement("div", __assign({}, other, { className: classes }),
        react_1.default.createElement("div", { className: "collapse-toggle h6 mb-0 cursor-pointer d-flex justify-content-between align-items-center", "data-test-id": "collapse-toggle", onClick: handleToggle },
            label,
            " ",
            react_1.default.createElement(__1.Icon, { isActive: true, theme: "gray-600", name: isOpen ? 'chevronUp' : 'chevronDown' })),
        isOpen && (react_1.default.createElement("div", { className: "collapse-children", "data-test-id": "collapse-children" }, children))));
};
exports.default = Collapse;
//# sourceMappingURL=Collapse.js.map