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
var __1 = require("../..");
exports.isHex = function (string) { return /^#([0-9A-F]{3}){1,2}$/i.test(string); };
var ResourceCard = function (_a) {
    var campaign = _a.campaign, className = _a.className, gradientEnd = _a.gradientEnd, gradientStart = _a.gradientStart, _b = _a.tag, Tag = _b === void 0 ? 'a' : _b, title = _a.title, imageForBackground = _a.imageForBackground, other = __rest(_a, ["campaign", "className", "gradientEnd", "gradientStart", "tag", "title", "imageForBackground"]);
    var classes = classnames_1.default(className, 'resource-card', 'card p-1 rounded shadow h-100 bg-gray-900 text-decoration-none');
    var style = {};
    if (imageForBackground) {
        style.backgroundImage = "url('" + imageForBackground + "')";
        style.backgroundPosition = 'center';
        style.backgroundSize = 'cover';
        style.backgroundRepeat = 'no-repeat';
    }
    else if (gradientStart && exports.isHex(gradientStart) && gradientEnd && exports.isHex(gradientEnd)) {
        style.backgroundImage = "linear-gradient(90deg, " + gradientStart + " 0%, " + gradientEnd + " 100%)";
    }
    return (React.createElement(Tag, __assign({}, other, { className: classes, style: style }),
        React.createElement("div", { className: "d-flex align-items-center mb-2" },
            React.createElement("div", { className: "rounded-circle d-flex align-items-center justify-content-center mr-1 flex-shrink-0", style: { width: '24px', height: '24px', background: 'rgba(255, 255, 255, 0.2)' } },
                React.createElement(__1.Icon, { isActive: true, name: "download", theme: "white" })),
            React.createElement("div", { className: "text-xs text-white", "data-test-id": "resource-card-campaign" }, campaign)),
        React.createElement("div", { className: "text-sm font-weight-bold text-white", "data-test-id": "resource-card-title" }, title)));
};
exports.default = ResourceCard;
//# sourceMappingURL=ResourceCard.js.map