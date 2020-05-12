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
var PostCardGhost = function (_a) {
    var className = _a.className, isLoading = _a.isLoading, other = __rest(_a, ["className", "isLoading"]);
    var classes = classnames_1.default(className, 'post-card-ghost', 'bg-gray-200 border-0 overflow-hidden', {
        loading: isLoading,
    });
    return (React.createElement(__1.Card, __assign({}, other, { className: classes }),
        React.createElement("div", { className: "d-flex align-items-top px-2 pt-2 pb-0" },
            React.createElement("div", { className: "ghost rounded-circle mr-2 mb-0", style: { width: '35px', height: '35px' } }),
            React.createElement("div", { className: "flex-fill" },
                React.createElement("div", { className: "ghost ghost-lg w-75" }),
                React.createElement("div", { className: "ghost w-50" }),
                React.createElement("div", { className: "ghost w-50 mb-0" })),
            React.createElement("div", { className: "ghost rounded-sm", style: { width: '26px', height: '26px' } })),
        React.createElement("div", { className: "p-2" },
            React.createElement("div", { className: "ghost ghost-sm" }),
            React.createElement("div", { className: "ghost ghost-sm" }),
            React.createElement("div", { className: "ghost ghost-sm" }),
            React.createElement("div", { className: "ghost ghost-sm" }),
            React.createElement("div", { className: "ghost ghost-sm mb-0 w-75" })),
        React.createElement("div", { className: "ghost mb-0", style: { height: '164px' } })));
};
exports.default = PostCardGhost;
//# sourceMappingURL=PostCardGhost.js.map