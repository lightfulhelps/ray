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
define(["require", "exports", "react", "classnames", "./icons"], function (require, exports, react_1, classnames_1, icons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importStar(react_1);
    classnames_1 = __importDefault(classnames_1);
    icons_1 = __importDefault(icons_1);
    var Icon = function (_a) {
        var className = _a.className, _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, hoverColor = _a.hoverColor, isActive = _a.isActive, isDisabled = _a.isDisabled, name = _a.name, _c = _a.size, size = _c === void 0 ? '1em' : _c, _d = _a.style, style = _d === void 0 ? {} : _d, theme = _a.theme, title = _a.title, _e = _a.viewBox, viewBox = _e === void 0 ? '0 0 24 24' : _e, other = __rest(_a, ["className", "color", "hoverColor", "isActive", "isDisabled", "name", "size", "style", "theme", "title", "viewBox"]);
        var _f = react_1.useState(false), hover = _f[0], setHover = _f[1];
        var handleMouseEnter = function () {
            setHover(true);
        };
        var handleMouseLeave = function () {
            setHover(false);
        };
        var classes = classnames_1.default(className, 'icon', theme ? "icon-" + theme : '', { disabled: isDisabled }, { active: isActive }, { 'cursor-pointer': typeof other.onClick === 'function' && !isDisabled });
        if (theme) {
            delete style.fill;
        }
        else {
            style.fill = hover && hoverColor ? hoverColor : color;
        }
        return (react_1.default.createElement("svg", __assign({}, other, { className: classes, width: size, height: size, viewBox: viewBox, style: style, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }),
            title && react_1.default.createElement("title", null, title),
            icons_1.default[name]));
    };
    exports.default = Icon;
});
//# sourceMappingURL=Icon.js.map