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
var react_select_1 = require("react-select");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var Option = function (props) { return (React.createElement(react_select_1.components.Option, __assign({}, props),
    props.data.icon && React.createElement(Icon_1.default, { className: "mr-1", name: props.data.icon, theme: "gray-500", isActive: true }),
    props.label)); };
exports.default = Option;
//# sourceMappingURL=Option.js.map