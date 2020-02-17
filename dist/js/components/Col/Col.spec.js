"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Col = _interopRequireDefault(require("./Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: _react["default"].createElement("div", null, "Content")
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Col["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('Col', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render children', function () {
    var _setup2 = setup({
      children: 'Children'
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper.text()).toBe('Children');
  });
  it('should handle the className prop', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('col')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle all recognised col widths', function () {
    var _setup4 = setup({
      xs: 12,
      sm: 6,
      md: 4,
      lg: 2,
      xl: 1,
      xxl: 3
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('col-12')).toBe(true);
    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col-md-4')).toBe(true);
    expect(wrapper.hasClass('col-lg-2')).toBe(true);
    expect(wrapper.hasClass('col-xl-1')).toBe(true);
    expect(wrapper.hasClass('col-xxl-3')).toBe(false);
  });
  it('should pass col size specific classes as Strings', function () {
    var _setup5 = setup({
      sm: '6'
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });
  it('should pass col size specific classes as Numbers', function () {
    var _setup6 = setup({
      sm: 6
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });
  it('should pass col size specific classes via Objects', function () {
    var _setup7 = setup({
      sm: {
        size: 6,
        order: 2,
        offset: 2
      }
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('order-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
  });
  it('should pass col size specific classes via Objects including 0', function () {
    var _setup8 = setup({
      sm: {
        size: 6,
        order: 0,
        offset: 0
      }
    }),
        wrapper = _setup8.wrapper;

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('order-sm-0')).toBe(true);
    expect(wrapper.hasClass('offset-sm-0')).toBe(true);
  });
  it('should handle the tag prop', function () {
    var _setup9 = setup(),
        wrapper = _setup9.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'span'
    });
    expect(wrapper.type()).toBe('span');
  });
  it('should pass through other props', function () {
    var _setup10 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup10.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});