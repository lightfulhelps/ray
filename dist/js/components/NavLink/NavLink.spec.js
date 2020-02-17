"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_NavLink["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<NavLink />', function () {
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
    expect(wrapper.hasClass('nav-link')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isActive', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper.hasClass('active')).toBe(false);
    wrapper.setProps({
      isActive: true
    });
    expect(wrapper.hasClass('active')).toBe(true);
  });
  it('should handle isDisabled', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('disabled')).toBe(false);
    wrapper.setProps({
      isDisabled: true
    });
    expect(wrapper.hasClass('disabled')).toBe(true);
  });
  it('should handle the theme prop', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('nav-link-primary')).toBe(true);
    wrapper.setProps({
      theme: 'secondary'
    });
    expect(wrapper.hasClass('nav-link-primary')).toBe(false);
    expect(wrapper.hasClass('nav-link-secondary')).toBe(true);
  });
  it('should handle the tag prop', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.type()).toBe('a');
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