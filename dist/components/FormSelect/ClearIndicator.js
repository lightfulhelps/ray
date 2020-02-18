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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var ClearIndicator = function (_a) {
    var innerProps = _a.innerProps;
    return (react_1.default.createElement(__1.Icon, __assign({}, innerProps, { name: "close", title: "Clear", theme: "gray-500" })));
};
exports.default = ClearIndicator;
//# sourceMappingURL=ClearIndicator.js.map