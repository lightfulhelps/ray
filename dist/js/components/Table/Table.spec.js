"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Table = _interopRequireDefault(require("./Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Table["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Table />', function () {
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
    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isBordered', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper.hasClass('table-bordered')).toBe(false);
    wrapper.setProps({
      isBordered: true
    });
    expect(wrapper.hasClass('table-bordered')).toBe(true);
  });
  it('should handle isBorderless', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('table-borderless')).toBe(false);
    wrapper.setProps({
      isBorderless: true
    });
    expect(wrapper.hasClass('table-borderless')).toBe(true);
  });
  it('should handle isHoverable', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('table-hover')).toBe(false);
    wrapper.setProps({
      isHoverable: true
    });
    expect(wrapper.hasClass('table-hover')).toBe(true);
  });
  it('should handle isResponsive', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('table-responsive')).toBe(false);
    wrapper.setProps({
      isResponsive: true
    });
    expect(wrapper.hasClass('table-responsive')).toBe(true);
  });
  it('should handle isStriped', function () {
    var _setup7 = setup(),
        wrapper = _setup7.wrapper;

    expect(wrapper.hasClass('table-striped')).toBe(false);
    wrapper.setProps({
      isStriped: true
    });
    expect(wrapper.hasClass('table-striped')).toBe(true);
  });
  it('should handle size', function () {
    var _setup8 = setup(),
        wrapper = _setup8.wrapper;

    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('table-sm')).toBe(false);
    expect(wrapper.hasClass('table-lg')).toBe(false);
    wrapper.setProps({
      size: 'sm'
    });
    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('table-sm')).toBe(true);
    expect(wrapper.hasClass('table-lg')).toBe(false);
    wrapper.setProps({
      size: 'lg'
    });
    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('table-sm')).toBe(false);
    expect(wrapper.hasClass('table-lg')).toBe(true);
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