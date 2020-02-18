var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "../../"], function (require, exports, react_1, __1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    var MultiValue = function (props) { return (react_1.default.createElement(__1.Tag, { onRemove: props.removeProps.onClick, theme: "gray-800" }, props.children)); };
    exports.default = MultiValue;
});
//# sourceMappingURL=MultiValue.js.map