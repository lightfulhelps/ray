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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "classnames"], function (require, exports, react_1, classnames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    classnames_1 = __importDefault(classnames_1);
    var PostMedia = function (_a) {
        var className = _a.className, media = _a.media, other = __rest(_a, ["className", "media"]);
        var blockClass = 'post-media';
        var classes = classnames_1.default(className, blockClass, blockClass + "--" + media.length);
        if (!media.length) {
            return (react_1.default.createElement("div", __assign({}, other, { className: classes + " " + blockClass + "--empty" }), "No media"));
        }
        var video = media.find(function (m) { return m.type === 'video'; });
        if (video) {
            return (react_1.default.createElement("div", __assign({}, other, { className: classes }),
                react_1.default.createElement("video", { className: blockClass + "__video", controls: true, src: video.url })));
        }
        return (react_1.default.createElement("div", __assign({}, other, { className: classes }), media.map(function (m, i) { return (react_1.default.createElement("div", { key: i, className: blockClass + "__image", style: { backgroundImage: "url(" + m.url + ")" } })); })));
    };
    exports.default = PostMedia;
});
//# sourceMappingURL=PostMedia.js.map