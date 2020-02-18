"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../");
var MultiValue = function (props) { return (react_1.default.createElement(__1.Tag, { onRemove: props.removeProps.onClick, theme: "gray-800" }, props.children)); };
exports.default = MultiValue;
//# sourceMappingURL=MultiValue.js.map