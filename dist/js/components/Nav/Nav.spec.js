"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Nav = _interopRequireDefault(require("./Nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Nav["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Nav />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle className', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('nav')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isFill', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper.hasClass('nav-fill')).toBe(false);
    wrapper.setProps({
      isFill: true
    });
    expect(wrapper.hasClass('nav-fill')).toBe(true);
  });
  it('should handle isPills', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('nav-pills')).toBe(false);
    wrapper.setProps({
      isPills: true
    });
    expect(wrapper.hasClass('nav-pills')).toBe(true);
  });
  it('should handle isTabs', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('nav-tabs')).toBe(false);
    wrapper.setProps({
      isTabs: true
    });
    expect(wrapper.hasClass('nav-tabs')).toBe(true);
  });
  it('should handle tag', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.type()).toBe('ul');
    wrapper.setProps({
      tag: 'nav'
    });
    expect(wrapper.type()).toBe('nav');
    wrapper.setProps({
      tag: 'div'
    });
    expect(wrapper.type()).toBe('div');
  });
  it('should pass through other props', function () {
    var _setup7 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});