"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Badge = _interopRequireDefault(require("./Badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: 'Badge'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Badge["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Badge />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the children prop', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    expect(wrapper.children().text()).toEqual('Badge');
  });
  it('should handle the className prop', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('badge')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the color prop', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    wrapper.setProps({
      color: '#ff0000'
    });
    expect(wrapper.prop('style')).toEqual({
      backgroundColor: '#ff0000'
    });
  });
  it('should handle the isOutline prop', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('badge-outline-primary')).toBe(false);
    expect(wrapper.hasClass('badge-primary')).toBe(true);
    wrapper.setProps({
      isOutline: true
    });
    expect(wrapper.hasClass('badge-outline-primary')).toBe(true);
    expect(wrapper.hasClass('badge-primary')).toBe(false);
  });
  it('should handle the isPill prop', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('badge-pill')).toBe(false);
    wrapper.setProps({
      isPill: true
    });
    expect(wrapper.hasClass('badge-pill')).toBe(true);
  });
  it('should handle the tag prop', function () {
    var _setup7 = setup(),
        wrapper = _setup7.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'a'
    });
    expect(wrapper.type()).toBe('a');
    wrapper.setProps({
      tag: 'span'
    });
    expect(wrapper.type()).toBe('span');
  });
  it('should handle the theme prop', function () {
    var _setup8 = setup(),
        wrapper = _setup8.wrapper;

    expect(wrapper.hasClass('badge-primary')).toBe(true);
    wrapper.setProps({
      theme: 'secondary'
    });
    expect(wrapper.hasClass('badge-primary')).toBe(false);
    expect(wrapper.hasClass('badge-secondary')).toBe(true);
  });
  it('should pass through other props', function () {
    var _setup9 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup9.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});