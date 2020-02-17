"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _SearchSuggest = _interopRequireWildcard(require("./SearchSuggest"));

var _DropdownMenu = _interopRequireDefault(require("../DropdownMenu/DropdownMenu"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    isLoading: false,
    onClear: jest.fn(),
    onClick: jest.fn(),
    onRemove: jest.fn(),
    onSelect: jest.fn(),
    options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
    search: 't',
    title: 'Recent Searches'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_SearchSuggest["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<SearchSuggest />', function () {
  it('should return null if not loading and no options', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper,
        props = _setup.props;

    wrapper.setProps(_objectSpread({}, props, {
      isLoading: true,
      search: '',
      options: []
    }));
    expect(wrapper.type()).toBe(_DropdownMenu["default"]);
    wrapper.setProps(_objectSpread({}, props, {
      isLoading: false,
      search: '',
      options: []
    }));
    expect(wrapper.type()).toBe(null);
  });
  it('should return null if search value and no matching options', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper,
        props = _setup2.props;

    wrapper.setProps(_objectSpread({}, props, {
      search: 'a',
      options: ['a', 'b', 'c']
    }));
    expect(wrapper.type()).toBe(_DropdownMenu["default"]);
    wrapper.setProps(_objectSpread({}, props, {
      search: 'd'
    }));
    expect(wrapper.type()).toBe(null);
  });
  it('should render', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle className', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('search-suggest')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isLoading', function () {
    var _setup5 = setup({
      isLoading: true
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('[data-test-id="search-suggest-loading"]')).toHaveLength(1);
    wrapper.setProps({
      isLoading: false
    });
    expect(wrapper.find('[data-test-id="search-suggest-loading"]')).toHaveLength(0);
  });
  it('should handle isOpen', function () {
    var _setup6 = setup({
      isOpen: true
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.prop('isOpen')).toBe(true);
    wrapper.setProps({
      isOpen: false
    });
    expect(wrapper.prop('isOpen')).toBe(false);
  });
  it('should handle limit', function () {
    var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

    var _setup7 = setup({
      options: options,
      search: ''
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(10);
    wrapper.setProps({
      limit: 5
    });
    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(5);
    wrapper.setProps({
      limit: null
    });
    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(10);
  });
  it('should handle onClear', function () {
    var _setup8 = setup(),
        wrapper = _setup8.wrapper,
        props = _setup8.props;

    wrapper.find('[data-test-id="search-suggest-clear"]').simulate('click');
    expect(props.onClear).toHaveBeenCalledTimes(1);
  });
  it('should handle onClick', function () {
    var _setup9 = setup(),
        wrapper = _setup9.wrapper,
        props = _setup9.props;

    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
  it('should handle onRemove', function () {
    var _setup10 = setup(),
        wrapper = _setup10.wrapper,
        props = _setup10.props;

    var stopPropagation = jest.fn();
    wrapper.find('[data-test-id="search-suggest-item"]').at(0).find('[data-test-id="search-suggest-remove"]').simulate('click', {
      stopPropagation: stopPropagation
    });
    wrapper.find('[data-test-id="search-suggest-item"]').at(1).find('[data-test-id="search-suggest-remove"]').simulate('click', {
      stopPropagation: stopPropagation
    });
    expect(stopPropagation).toHaveBeenCalledTimes(2);
    expect(props.onRemove).toHaveBeenCalledTimes(2);
    expect(props.onRemove).toHaveBeenNthCalledWith(1, 0);
    expect(props.onRemove).toHaveBeenNthCalledWith(2, 1);
  });
  it('should handle onSelect', function () {
    var options = ['A', 'B', 'C'];

    var _setup11 = setup({
      options: options,
      search: ''
    }),
        wrapper = _setup11.wrapper,
        props = _setup11.props;

    wrapper.find('[data-test-id="search-suggest-item"]').at(0).simulate('click');
    wrapper.find('[data-test-id="search-suggest-item"]').at(1).simulate('click');
    expect(props.onSelect).toHaveBeenCalledTimes(2);
    expect(props.onSelect).toHaveBeenNthCalledWith(1, options[0], 0);
    expect(props.onSelect).toHaveBeenNthCalledWith(2, options[1], 1);
  });
  it('should handle options', function () {
    var options = ['A', 'b', 'c'];

    var _setup12 = setup(),
        wrapper = _setup12.wrapper;

    wrapper.setProps({
      options: options,
      search: ''
    });
    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(3);
  });
  it('should handle search', function () {
    var options = ['A', 'a', 'B', 'C'];

    var _setup13 = setup({
      options: options,
      search: 'a'
    }),
        wrapper = _setup13.wrapper;

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(2);
    wrapper.setProps({
      search: 'b'
    });
    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(1);
  });
  it('should handle title', function () {
    var _setup14 = setup({
      title: ''
    }),
        wrapper = _setup14.wrapper;

    expect(wrapper.find('[data-test-id="search-suggest-header"]')).toHaveLength(0);
    wrapper.setProps({
      title: 'Test'
    });
    expect(wrapper.find('[data-test-id="search-suggest-header"]')).toHaveLength(1);
  });
  it('should pass through other props', function () {
    var _setup15 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup15.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
describe('findMatches()', function () {
  it('should return true if option string includes search value', function () {
    expect((0, _SearchSuggest.findMatches)('Test String', 't')).toBe(true);
    expect((0, _SearchSuggest.findMatches)('Test String', 'T')).toBe(true);
    expect((0, _SearchSuggest.findMatches)('Test String', 'est')).toBe(true);
    expect((0, _SearchSuggest.findMatches)('Test String', 'ing')).toBe(true);
    expect((0, _SearchSuggest.findMatches)('Test String', 'Test S')).toBe(true);
  });
  it('should return false if option string does not include search value', function () {
    expect((0, _SearchSuggest.findMatches)('Test String', 'a')).toBe(false);
    expect((0, _SearchSuggest.findMatches)('Test String', 'z')).toBe(false);
    expect((0, _SearchSuggest.findMatches)('Test String', 'Tests')).toBe(false);
    expect((0, _SearchSuggest.findMatches)('Test String', 'TestString')).toBe(false);
  });
  it('should exclude specified string when searching', function () {
    expect((0, _SearchSuggest.findMatches)('test', '#test')).toBe(false);
    expect((0, _SearchSuggest.findMatches)('test', '#test', '#')).toBe(true);
    expect((0, _SearchSuggest.findMatches)('test #string', 'test string', '#')).toBe(true); // Only first occurence of a string will be replaced - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Parameters

    expect((0, _SearchSuggest.findMatches)('test', '#test#', '#')).toBe(false);
    expect((0, _SearchSuggest.findMatches)('test #str#ing', 'test string', '#')).toBe(false);
  });
  it('should exclude characters in specified regex when searching', function () {
    expect((0, _SearchSuggest.findMatches)('test', '#t@e$s%t')).toBe(false);
    expect((0, _SearchSuggest.findMatches)('test', '#t@e$s%t', /[^a-z]/g)).toBe(true);
    expect((0, _SearchSuggest.findMatches)('t£e$s%t s$t)r*i*n&g', 'teststring', /[^a-z]/g)).toBe(true);
  });
});
describe('highlightMatches()', function () {
  it('should return the original string if no search value', function () {
    expect((0, _SearchSuggest.highlightMatches)('foo')).toEqual('foo');
    expect((0, _SearchSuggest.highlightMatches)('foo', '')).toEqual('foo');
  });
  it('should wrap matching strings in <strong class="text-gray-900"> tags', function () {
    expect((0, _SearchSuggest.highlightMatches)('Test', 'T')).toEqual('<strong class="text-gray-900">T</strong>es<strong class="text-gray-900">t</strong>');
    expect((0, _SearchSuggest.highlightMatches)('Test', 't')).toEqual('<strong class="text-gray-900">T</strong>es<strong class="text-gray-900">t</strong>');
    expect((0, _SearchSuggest.highlightMatches)('Test', 'te')).toEqual('<strong class="text-gray-900">Te</strong>st');
    expect((0, _SearchSuggest.highlightMatches)('Test', 'est')).toEqual('T<strong class="text-gray-900">est</strong>');
  });
  it('should exclude specified string from highlight', function () {
    expect((0, _SearchSuggest.highlightMatches)('test', '@test', '@')).toEqual('<strong class="text-gray-900">test</strong>');
  });
  it('should exclude characters in specified regex from highlight', function () {
    expect((0, _SearchSuggest.highlightMatches)('test', '@t£e$s%t', /[^a-z]/g)).toEqual('<strong class="text-gray-900">test</strong>');
  });
});