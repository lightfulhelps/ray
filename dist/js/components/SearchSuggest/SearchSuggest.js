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
var __1 = require("../..");
exports.findMatches = function (option, search, exclude) {
    if (exclude === void 0) { exclude = ''; }
    var normalize = function (str) { return str.replace(exclude, '').toLowerCase(); };
    return normalize(option).includes(normalize(search));
};
exports.highlightMatches = function (option, search, exclude) {
    if (search === void 0) { search = ''; }
    if (exclude === void 0) { exclude = ''; }
    if (!search)
        return option;
    var regex = new RegExp("(" + search.replace(exclude, '') + ")", 'gi');
    var ret = option.replace(regex, "<strong class=\"text-gray-900\">$&</strong>");
    return ret;
};
var SearchSuggest = function (_a) {
    var className = _a.className, exclude = _a.exclude, isLoading = _a.isLoading, isOpen = _a.isOpen, limit = _a.limit, onClear = _a.onClear, onClick = _a.onClick, onRemove = _a.onRemove, onSelect = _a.onSelect, _b = _a.options, options = _b === void 0 ? [] : _b, _c = _a.search, search = _c === void 0 ? '' : _c, title = _a.title, other = __rest(_a, ["className", "exclude", "isLoading", "isOpen", "limit", "onClear", "onClick", "onRemove", "onSelect", "options", "search", "title"]);
    var classes = classnames_1.default(className, 'search-suggest');
    var count = limit && limit > 0 ? limit : 10;
    var filteredOptions = options.filter(function (option) { return exports.findMatches(option, search, exclude); });
    if (!isLoading && !options.length)
        return null;
    if (search.length > 0 && !filteredOptions.length)
        return null;
    return (React.createElement(__1.DropdownMenu, __assign({}, other, { className: classes, "data-test-id": "search-suggest", isOpen: isOpen, onClick: onClick }),
        title && (React.createElement(__1.DropdownItem, { className: "d-flex justify-content-between align-items-center", "data-test-id": "search-suggest-header", isHeader: true },
            title,
            ' ',
            !isLoading && onClear && (React.createElement("div", { className: "ml-1 text-danger cursor-pointer text-capitalize", "data-test-id": "search-suggest-clear", onClick: onClear }, "Clear All")))),
        isLoading && (React.createElement(__1.DropdownItem, { "data-test-id": "search-suggest-loading", isDisabled: true }, "Loading...")),
        !isLoading &&
            filteredOptions.slice(0, count).map(function (option, i) { return (React.createElement(__1.DropdownItem, { className: "d-flex justify-content-between align-items-center text-body", "data-test-id": "search-suggest-item", key: i, onClick: function () { return onSelect(option, i); } },
                React.createElement("div", { dangerouslySetInnerHTML: { __html: exports.highlightMatches(option, search, exclude) } }),
                onRemove && (React.createElement(__1.Icon, { className: "ml-1", "data-test-id": "search-suggest-remove", name: "close", onClick: function (e) {
                        e.stopPropagation();
                        onRemove(i);
                    } })))); })));
};
exports.default = SearchSuggest;
//# sourceMappingURL=SearchSuggest.js.map