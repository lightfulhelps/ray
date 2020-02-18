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
    var Progress = function (_a) {
        var _b;
        var children = _a.children, className = _a.className, isAnimated = _a.isAnimated, isStriped = _a.isStriped, _c = _a.theme, theme = _c === void 0 ? 'primary' : _c, _d = _a.value, value = _d === void 0 ? 0 : _d, other = __rest(_a, ["children", "className", "isAnimated", "isStriped", "theme", "value"]);
        var classes = classnames_1.default(className, 'progress');
        var barClasses = classnames_1.default('progress-bar', (_b = {}, _b["bg-" + theme] = theme && value <= 100, _b), { 'bg-danger': value > 100 }, { 'progress-bar-animated': isAnimated }, { 'progress-bar-striped': isStriped });
        return (React.createElement("div", __assign({}, other, { className: classes, "data-test-id": "progress" }),
            React.createElement("div", { className: barClasses, "data-test-id": "progress-bar", role: "progressbar", style: { width: value + "%" }, "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100 }, children)));
    };
    exports.default = Progress;
});
//# sourceMappingURL=Progress.js.map