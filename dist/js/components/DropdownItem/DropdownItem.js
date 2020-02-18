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
define(["require", "exports", "react", "classnames"], function (require, exports, React, classnames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    classnames_1 = __importDefault(classnames_1);
    var DropdownItem = function (_a) {
        var children = _a.children, className = _a.className, isActive = _a.isActive, isDisabled = _a.isDisabled, isHeader = _a.isHeader, onClick = _a.onClick, _b = _a.tag, Tag = _b === void 0 ? 'div' : _b, other = __rest(_a, ["children", "className", "isActive", "isDisabled", "isHeader", "onClick", "tag"]);
        var classes = classnames_1.default(className, { 'dropdown-item': !isHeader }, { 'dropdown-header': isHeader }, { active: isActive }, { disabled: isDisabled }, { 'cursor-pointer': onClick && !isDisabled });
        function handleClick(e) {
            if (isDisabled) {
                e.preventDefault();
                return;
            }
            if (typeof onClick === 'function')
                onClick(e);
        }
        return (React.createElement(Tag, __assign({}, other, { className: classes, onClick: handleClick }), children));
    };
    exports.default = DropdownItem;
});
//# sourceMappingURL=DropdownItem.js.map