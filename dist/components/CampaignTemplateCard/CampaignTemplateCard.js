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
var CampaignTemplateCard = function (_a) {
    var className = _a.className, _b = _a.ctaText, ctaText = _b === void 0 ? 'Use this template' : _b, _c = _a.ctaTextSelected, ctaTextSelected = _c === void 0 ? 'Selected' : _c, onClick = _a.onClick, title = _a.title, description = _a.description, image = _a.image, isSelected = _a.isSelected, other = __rest(_a, ["className", "ctaText", "ctaTextSelected", "onClick", "title", "description", "image", "isSelected"]);
    var classes = classnames_1.default(className, 'card h-100 rounded-lg', { 'campaign-template-card--selected': isSelected }, 'campaign-template-card');
    var imgStyles = {
        backgroundImage: "url(" + image + ")",
        height: 0,
        paddingBottom: '50%',
        backgroundPosition: 'center',
    };
    var btnProps = {
        'data-test-id': 'campaign-template-card-button',
        className: 'mt-2',
        onClick: onClick,
        isBlock: true,
        isDisabled: false,
        theme: 'primary',
        children: ctaText,
    };
    if (isSelected) {
        btnProps.isDisabled = true;
        btnProps.theme = 'success';
        btnProps.icon = 'tick';
        btnProps.children = ctaTextSelected;
    }
    return (React.createElement("div", __assign({}, other, { className: classes }),
        React.createElement("div", { style: imgStyles, className: "bg-cover bg-gray-900 w-100 rounded-top-lg", "data-test-id": "campaign-template-card-image" }),
        React.createElement("div", { className: "p-2 d-flex h-100 flex-column justify-content-between" },
            React.createElement("div", null,
                React.createElement("h5", { "data-test-id": "campaign-template-card-title" }, title),
                React.createElement("div", { className: "text-sm", "data-test-id": "campaign-template-card-description" }, description)),
            React.createElement(__1.Button, __assign({}, btnProps)))));
};
exports.default = CampaignTemplateCard;
//# sourceMappingURL=CampaignTemplateCard.js.map