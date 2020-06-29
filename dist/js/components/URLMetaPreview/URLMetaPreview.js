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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var cleanURL = function (url) { return url.replace(/https?:\/\/(www.)?/, ''); };
var URLMetaPreview = function (_a) {
    var className = _a.className, description = _a.description, image = _a.image, _b = _a.isVertical, isVertical = _b === void 0 ? false : _b, title = _a.title, url = _a.url, other = __rest(_a, ["className", "description", "image", "isVertical", "title", "url"]);
    var classes = classnames_1.default(className, 'url-meta-preview', 'bg-white h-100');
    if (!url) {
        return null;
    }
    return (react_1.default.createElement("div", __assign({}, other, { className: classes }),
        react_1.default.createElement("div", { className: isVertical ? '' : 'row h-100' },
            image && (react_1.default.createElement("div", { className: isVertical ? '' : 'col-4 pr-0' },
                react_1.default.createElement("div", { className: "w-100 h-100 bg-cover bg-center", "data-test-id": "url-meta-preview-image", style: { backgroundImage: "url(" + image + ")" } }, isVertical && react_1.default.createElement("img", { className: "w-100", src: image, alt: "" })))),
            react_1.default.createElement("div", { className: isVertical ? '' : image ? 'col-8 pl-0' : 'col-12' },
                react_1.default.createElement("div", { className: "d-flex flex-column justify-content-between h-100 p-1 text-xs" },
                    react_1.default.createElement("a", { className: "font-weight-bold text-dark text-truncate", href: url, target: "_blank", rel: "noopener noreferrer" }, title),
                    description && (react_1.default.createElement("div", { className: "font-weight-light text-gray-500 text-truncate", "data-test-id": "url-meta-preview-description" }, description)) // <ResponsiveEllipsis
                //   className="font-weight-light text-gray-500"
                //   text={description}
                //   maxLine={3}
                //   ellipsis="..."
                //   basedOn="words"
                // />
                ,
                    react_1.default.createElement("a", { className: "d-block text-body text-truncate", "data-test-id": "url-meta-preview-url", href: url, target: "_blank", rel: "noopener noreferrer" }, cleanURL(url)))))));
};
exports.default = URLMetaPreview;
//# sourceMappingURL=URLMetaPreview.js.map