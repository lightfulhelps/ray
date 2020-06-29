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
var Icon_1 = __importDefault(require("../Icon/Icon"));
var Button = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, icon = _a.icon, _c = _a.iconPosition, iconPosition = _c === void 0 ? 'left' : _c, iconTheme = _a.iconTheme, isBlock = _a.isBlock, isDisabled = _a.isDisabled, isOutline = _a.isOutline, onClick = _a.onClick, size = _a.size, _d = _a.tag, Tag = _d === void 0 ? 'button' : _d, _e = _a.theme, theme = _e === void 0 ? 'primary' : _e, _f = _a.type, type = _f === void 0 ? 'button' : _f, other = __rest(_a, ["children", "className", "icon", "iconPosition", "iconTheme", "isBlock", "isDisabled", "isOutline", "onClick", "size", "tag", "theme", "type"]);
    var classes = classnames_1.default(className, 'btn', "btn" + (isOutline ? '-outline' : '') + "-" + theme, size ? "btn-" + size : false, { 'btn-block': isBlock }, { disabled: isDisabled }, { 'btn-icon': icon && !children }, (_b = {}, _b["btn-icon-" + iconPosition] = icon && children, _b));
    var handleClick = function (e) {
        if (isDisabled) {
            e.preventDefault();
            return;
        }
        if (typeof onClick === 'function')
            onClick(e);
    };
    // Workaround to optionaly add type attribute since this one is only available on button Jsx element
    var optionalProps = {};
    optionalProps.type = Tag === 'button' ? type : undefined;
    return (React.createElement(Tag, __assign({}, other, optionalProps, { className: classes, onClick: handleClick, disabled: isDisabled }),
        children,
        icon && React.createElement(Icon_1.default, { name: icon, theme: iconTheme })));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map