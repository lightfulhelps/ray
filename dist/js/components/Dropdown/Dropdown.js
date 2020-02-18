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
define(["require", "exports", "react", "classnames"], function (require, exports, react_1, classnames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importStar(react_1);
    classnames_1 = __importDefault(classnames_1);
    var Dropdown = function (_a) {
        var className = _a.className, isBlock = _a.isBlock, render = _a.render, other = __rest(_a, ["className", "isBlock", "render"]);
        var node = react_1.useRef(null);
        console.log('node :', node);
        console.log('node.currant :', node && node.current);
        var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
        var handleDocumentClick = function (e) {
            console.log('e.target :', e.target);
            if (!e ||
                (e && !e.target)
            //   ||
            //   (node && node?.current.contains(e.target) && node.current !== e.target)
            ) {
                return;
            }
            setIsOpen(false);
        };
        react_1.useEffect(function () {
            document.addEventListener('click', handleDocumentClick, true);
            return function () {
                document.removeEventListener('click', handleDocumentClick, true);
            };
        }, []);
        var handleToggle = function () {
            setIsOpen(!isOpen);
        };
        var classes = classnames_1.default(className, 'dropdown', isBlock ? 'd-block' : 'd-inline-block');
        return (react_1.default.createElement("div", __assign({}, other, { className: classes, ref: node }), render(isOpen, handleToggle)));
    };
    exports.default = Dropdown;
});
//# sourceMappingURL=Dropdown.js.map