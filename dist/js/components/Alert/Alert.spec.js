"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Alert = _interopRequireDefault(require("./Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: 'Alert'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Alert["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Alert />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the children prop', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    expect(wrapper.children().text()).toEqual('Alert');
  });
  it('should handle className', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('alert')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the theme prop', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('alert-primary')).toBe(true);
    wrapper.setProps({
      theme: 'secondary'
    });
    expect(wrapper.hasClass('alert-primary')).toBe(false);
    expect(wrapper.hasClass('alert-secondary')).toBe(true);
  });
  it('should handle the tag prop', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'a'
    });
    expect(wrapper.type()).toBe('a');
  });
  it('should pass through other props', function () {
    var _setup6 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});