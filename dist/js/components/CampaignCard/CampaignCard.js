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
var CampaignCard = function (_a) {
    var className = _a.className, cover = _a.cover, _b = _a.state, state = _b === void 0 ? '' : _b, _c = _a.tag, Tag = _c === void 0 ? 'div' : _c, title = _a.title, other = __rest(_a, ["className", "cover", "state", "tag", "title"]);
    var classes = classnames_1.default(className, 'campaign-card', 'card rounded-lg shadow text-decoration-none h-100');
    var stateClasses = classnames_1.default('text-xs font-weight-bold', { 'text-primary': state.toLowerCase() === 'live' }, { 'text-warning': state.toLowerCase() === 'draft' });
    return (React.createElement(Tag, __assign({}, other, { className: classes, "data-test-id": "campaign-card" }),
        React.createElement("div", { className: "campaign-card-cover", "data-test-id": "campaign-card-cover", style: {
                backgroundImage: "url(" + cover + ")",
            } }),
        React.createElement("div", { className: "px-2 py-1 h-100 d-flex flex-column justify-content-between" },
            React.createElement("div", { className: "h6", "data-test-id": "campaign-card-title" }, title),
            React.createElement("div", { className: stateClasses, "data-test-id": "campaign-card-state" }, state))));
};
exports.default = CampaignCard;
//# sourceMappingURL=CampaignCard.js.map