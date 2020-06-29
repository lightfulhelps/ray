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
var html_1 = __importDefault(require("react-lines-ellipsis/lib/html"));
var responsiveHOC_1 = __importDefault(require("react-lines-ellipsis/lib/responsiveHOC"));
var format_1 = __importDefault(require("date-fns/format"));
var __1 = require("../..");
exports.config = {
    contentLines: 5,
    tagLimit: 3,
};
var ResponsiveHTMLEllipsis = responsiveHOC_1.default()(html_1.default);
var InspirationPostCard = function (_a) {
    var className = _a.className, _b = _a.dateFormat, dateFormat = _b === void 0 ? 'D MMM YY [-] HH:mm' : _b, inspirationActions = _a.inspirationActions, metaPreview = _a.metaPreview, post = _a.post, other = __rest(_a, ["className", "dateFormat", "inspirationActions", "metaPreview", "post"]);
    var blockClass = 'inspiration-post-card';
    var classes = classnames_1.default(className, blockClass);
    var showMetaPreview = (!post.media || (post.media && post.media.length === 0)) && metaPreview && metaPreview.url;
    var showMediaEmpty = post.media && post.media.length === 0 && (!metaPreview || (metaPreview && !metaPreview.url));
    return (React.createElement(__1.Card, __assign({}, other, { className: classes }),
        React.createElement("div", { className: blockClass + "__header" },
            post.socialIdentity && (React.createElement("div", { style: { width: '35px', height: '35px', minWidth: '35px', minHeight: '35px' } },
                React.createElement(__1.Avatar, { url: post.socialIdentity.avatar, provider: post.socialIdentity.provider }))),
            React.createElement("div", { className: "mx-1", style: { minWidth: 0, flex: 1 } },
                React.createElement("h1", { className: blockClass + "__title" }, post.title),
                React.createElement("div", { className: blockClass + "__date" }, post.date ? format_1.default(post.date, dateFormat) : 'Unscheduled'))),
        React.createElement("div", { className: blockClass + "__content" },
            React.createElement(ResponsiveHTMLEllipsis, { unsafeHTML: post.content.replace(/\n/g, '<br />'), maxLine: exports.config.contentLines, ellipsis: "...", basedOn: "words" })),
        React.createElement("div", { className: blockClass + "__media" },
            post.media && post.media.length > 0 && React.createElement(__1.PostMedia, { media: post.media }),
            showMetaPreview && (React.createElement(__1.URLMetaPreview, __assign({}, metaPreview, { className: "border-top border-bottom" }))),
            showMediaEmpty && React.createElement("div", { className: "post-media--empty" }, "No media")),
        post.tags && post.tags.length > 0 && (React.createElement("div", { className: blockClass + "__tags d-flex align-items-center bg-gray-200 px-2 py-1" },
            React.createElement("div", { className: "d-flex align-items-center text-gray-900 font-weight-bold mr-1" },
                post.tags.length,
                ' ',
                React.createElement(__1.Icon, { name: "tag", theme: "gray-500", isActive: true, style: { marginLeft: '2px' } })),
            React.createElement("div", { className: "d-flex flex-fill", style: { minWidth: 0 } }, post.tags.slice(0, exports.config.tagLimit).map(function (tag, i) { return (React.createElement(__1.Tag, { className: "text-xs " + (i < exports.config.tagLimit - 1 ? 'mr-1' : ''), key: i, theme: "light" }, tag)); })),
            post.tags.length > exports.config.tagLimit && (React.createElement("div", { className: blockClass + "__tags-more" },
                "+",
                post.tags.length - exports.config.tagLimit)))),
        post.metrics && Object.keys(post.metrics).length > 0 && (React.createElement("div", { className: blockClass + "__metrics" }, Object.keys(post.metrics).map(function (key) { return (React.createElement("div", { key: key, className: blockClass + "__metric" },
            React.createElement("span", null, post.metrics && post.metrics[key]),
            " ",
            key)); }))),
        inspirationActions && inspirationActions.length > 0 && (React.createElement("div", { className: blockClass + "__inspiration-actions" }, inspirationActions.map(function (action, i) { return (React.createElement(__1.Icon, { key: i, isActive: action.isActive, name: action.icon, title: action.icon, theme: action.theme, onClick: function () {
                if (!action.isActive)
                    action.onClick();
            } })); })))));
};
exports.default = InspirationPostCard;
//# sourceMappingURL=InspirationPostCard.js.map