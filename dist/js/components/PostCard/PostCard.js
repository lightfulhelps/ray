"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var date_fns_1 = require("date-fns");
var __1 = require("../..");
var ResponsiveHTMLEllipsis = responsiveHOC_1.default()(html_1.default);
var PostCard = /** @class */ (function (_super) {
    __extends(PostCard, _super);
    function PostCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isTruncated: true,
        };
        _this.handleToggleTruncate = function () {
            _this.setState(function (prevState) { return ({ isTruncated: !prevState.isTruncated }); });
        };
        return _this;
    }
    PostCard.prototype.render = function () {
        var _a = this.props, _b = _a.actions, actions = _b === void 0 ? [] : _b, className = _a.className, _c = _a.dateFormat, dateFormat = _c === void 0 ? 'HH:mm [on] dddd, D MMMM' : _c, errors = _a.errors, isDraft = _a.isDraft, isImported = _a.isImported, isInvalid = _a.isInvalid, metaPreview = _a.metaPreview, notesAction = _a.notesAction, _d = _a.notesCount, notesCount = _d === void 0 ? 0 : _d, post = _a.post, other = __rest(_a, ["actions", "className", "dateFormat", "errors", "isDraft", "isImported", "isInvalid", "metaPreview", "notesAction", "notesCount", "post"]);
        var classes = classnames_1.default(className, 'post-card shadow', { 'post-card--draft': isDraft }, { 'post-card--invalid': isInvalid });
        if (!post)
            return null;
        var showMetaPreview = (!post.media || (post.media && post.media.length === 0)) && metaPreview && metaPreview.url;
        var showMediaEmpty = post.media && post.media.length === 0 && (!metaPreview || (metaPreview && !metaPreview.url));
        var hasPostMetrics = post.metrics && post.metrics.length > 0;
        var defaultLineClamp = 3;
        var allLinesClamp = 9999;
        var borderColor;
        switch (post.state) {
            case 'scheduled':
                borderColor = 'info';
                break;
            case 'published':
                borderColor = 'success';
                break;
            case 'review':
                borderColor = 'warning';
                break;
            default:
                borderColor = '';
                break;
        }
        return (React.createElement(__1.Card, __assign({}, other, { className: classes }),
            React.createElement("div", { className: "bg-" + borderColor + " rounded-top-lg mb-1", style: { height: '20px' } }),
            errors && errors.length > 0 && (React.createElement("div", { className: "mb-1" }, errors.map(function (error, i) { return (React.createElement("div", { key: i, className: classnames_1.default('d-flex align-items-center text-sm font-weight-bold mx-2 alert-danger p-1 rounded-sm', { 'mb-1': i < errors.length - 1 }), style: { lineHeight: 1.4 } },
                React.createElement(__1.Icon, { className: "mr-half flex-shrink-0", name: "alert", theme: "danger", size: 18 }),
                error)); }))),
            isImported && (React.createElement("div", { className: "post-card__imported px-1 py-half rounded-sm text-sm alert-info font-weight-normal" }, "This post was imported from outside of Lightful. Link clicks are not tracked.")),
            React.createElement("div", { className: "d-flex flex-column flex-md-row justify-content-between px-2 pb-2 pt-1 border-bottom" },
                React.createElement("div", { className: "flex-fill" },
                    React.createElement("div", { className: "d-flex mb-1" },
                        post.socialIdentity && (React.createElement(__1.Avatar, { className: "flex-shrink-0", url: post.socialIdentity.avatar, provider: post.socialIdentity.provider, providerSize: "lg", style: { width: '45px', height: '45px' } })),
                        React.createElement("div", { className: "ml-half" },
                            React.createElement("div", { className: "h6 mb-0", "data-test-id": "post-card-date" }, post.date
                                ? (post.state === 'published' ? 'Published' : 'Scheduled for') + " " + date_fns_1.format(post.date, dateFormat)
                                : 'Unscheduled'),
                            post.socialIdentity && (React.createElement("div", { className: "text-sm" }, post.socialIdentity.displayName)))),
                    React.createElement("div", { className: "text-sm mb-1 post-card__content", "data-test-id": "post-card-content", onClick: this.handleToggleTruncate },
                        React.createElement(ResponsiveHTMLEllipsis, { unsafeHTML: post.content.replace(/\n/g, '<br />'), maxLine: this.state.isTruncated ? defaultLineClamp : allLinesClamp, ellipsisHTML: '<span class="text-underline cursor-pointer font-weight-bold">See more</span>', basedOn: "words" })),
                    React.createElement("div", { className: "d-flex flex-wrap" },
                        post.campaign && (React.createElement(__1.Badge, { className: "d-flex align-items-center mb-1 mb-lg-0 mr-1 badge-pill", color: post.campaign.color },
                            React.createElement(__1.Icon, { className: "mr-half", name: "storyBuilder" }),
                            "Story: ",
                            post.campaign.name)),
                        post.tags &&
                            post.tags.length > 0 &&
                            post.tags.map(function (tag, i) { return (React.createElement(__1.Tag, { className: "text-xs mr-half mb-1 mb-lg-0 " + (i === 0 ? '' : ''), isOutline: true, key: i, theme: "gray-600" }, tag)); }))),
                React.createElement("div", { className: classnames_1.default('post-card__media-wrap flex-shrink-0 overflow-hidden', {
                        'h-100': showMetaPreview,
                    }) },
                    post.media && post.media.length > 0 && React.createElement(__1.PostMedia, { media: post.media }),
                    showMetaPreview && React.createElement(__1.URLMetaPreview, __assign({}, metaPreview, { className: "border", isVertical: true })),
                    showMediaEmpty && React.createElement("div", { className: "post-media--empty" }, "No media"))),
            React.createElement("div", { className: classnames_1.default('p-2 d-flex flex-column flex-md-row align-items-center', notesAction || hasPostMetrics ? 'justify-content-between' : 'justify-content-end') },
                (notesAction || hasPostMetrics) && (React.createElement("div", { className: "d-flex align-items-center flex-wrap mt-1 mt-md-0 mb-2 mb-md-0" }, notesAction ? (React.createElement("div", { className: "d-flex align-items-center cursor-pointer", "data-test-id": "post-card-notes", onClick: notesAction },
                    React.createElement(__1.Icon, { className: "mr-half", name: "comment" }),
                    ' ',
                    React.createElement("span", { className: "text-underline text-sm font-weight-bold", style: { lineHeight: 1 } },
                        "View notes (",
                        notesCount.toString(),
                        ")"))) : (post.metrics &&
                    post.metrics.length > 0 &&
                    post.metrics.map(function (metric) { return (React.createElement("div", { className: "d-flex align-items-center text-sm mr-1", "data-test-id": "post-card-metric", key: metric.key },
                        metric.icon && (React.createElement(__1.Icon, { className: "mr-half", isActive: true, name: metric.icon, size: 20 })),
                        ' ',
                        metric.value,
                        " ",
                        metric.key)); })))),
                React.createElement("div", { className: "d-flex flex-wrap" }, actions.length > 0 &&
                    actions.map(function (action, i) { return (React.createElement(__1.Button, __assign({ key: i, theme: "gray-600", isOutline: true, size: "sm", className: "mr-1 mb-1 mr-md-0 ml-md-1 mb-lg-0", "data-test-id": "post-card-action" }, action))); })))));
    };
    return PostCard;
}(React.Component));
exports.default = PostCard;
//# sourceMappingURL=PostCard.js.map