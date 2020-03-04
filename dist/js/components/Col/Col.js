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
// Importatn to be able to use it as an index for props (TODO : Look for a better solution)
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var getColumnSizeClass = function (isXs, colWidth, colSize) {
    if (colSize === true || colSize === '') {
        return isXs ? 'col' : "col-" + colWidth;
    }
    if (colSize === 'auto') {
        return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
    }
    if (colSize === false)
        return '';
    return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};
var Col = function (props) {
    var children = props.children, className = props.className, _a = props.tag, Tag = _a === void 0 ? 'div' : _a, other = __rest(props, ["children", "className", "tag"]);
    var colClasses = [];
    colWidths.forEach(function (colWidth, i) {
        var _a;
        var columnProp = props[colWidth];
        if (!columnProp && columnProp !== '') {
            return;
        }
        var isXs = !i;
        if (typeof columnProp === 'object') {
            var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
            var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
            colClasses.push(classnames_1.default((_a = {},
                _a[colClass] = columnProp.size || columnProp.size === '',
                _a["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0,
                _a["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0,
                _a)));
        }
        else {
            var colClass = getColumnSizeClass(isXs, colWidth, columnProp);
            colClasses.push(colClass);
        }
    });
    if (!colClasses.length) {
        colClasses.push('col');
    }
    var classes = classnames_1.default(className, colClasses);
    return (React.createElement(Tag, __assign({}, other, { className: classes }), children));
};
exports.default = Col;
//# sourceMappingURL=Col.js.map