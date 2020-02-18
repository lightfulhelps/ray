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
define(["require", "exports", "react", "classnames", "../.."], function (require, exports, react_1, classnames_1, __1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    classnames_1 = __importDefault(classnames_1);
    var Avatar = function (_a) {
        var className = _a.className, isDisconnected = _a.isDisconnected, _b = _a.url, url = _b === void 0 ? '' : _b, provider = _a.provider, _c = _a.providerSize, providerSize = _c === void 0 ? 'md' : _c, other = __rest(_a, ["className", "isDisconnected", "url", "provider", "providerSize"]);
        var classes = classnames_1.default(className, 'avatar', "avatar-provider-" + providerSize, {
            'avatar-disconnected': isDisconnected,
        });
        return (react_1.default.createElement("div", __assign({}, other, { className: classes }),
            react_1.default.createElement("div", { className: "avatar-inner" },
                react_1.default.createElement("div", { className: "avatar-image", style: { backgroundImage: "url(" + url + ")" } }),
                provider && (react_1.default.createElement("div", { className: "avatar-provider avatar-provider-" + provider },
                    react_1.default.createElement(__1.Icon, { name: provider, color: "#ffffff" }))))));
    };
    exports.default = Avatar;
});
//# sourceMappingURL=Avatar.js.map