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
var SearchInput = function (_a) {
    var className = _a.className, onChange = _a.onChange, onSearch = _a.onSearch, _b = _a.placeholder, placeholder = _b === void 0 ? 'Search...' : _b, value = _a.value, other = __rest(_a, ["className", "onChange", "onSearch", "placeholder", "value"]);
    var classes = classnames_1.default(className, 'search-input input-group shadow');
    var handleKeyPress = function (e) {
        if (e.key === 'Enter') {
            onSearch(e);
        }
    };
    return (React.createElement("div", __assign({}, other, { className: classes }),
        React.createElement(__1.FormInput, { "data-test-id": "search-input", onChange: onChange, onKeyPress: handleKeyPress, placeholder: placeholder, type: "text", value: value }),
        React.createElement("div", { className: "input-group-append" },
            React.createElement(__1.Button, { "data-test-id": "search-input-button", icon: "search", isOutline: true, onClick: onSearch, theme: "gray-600" }))));
};
exports.default = SearchInput;
//# sourceMappingURL=SearchInput.js.map