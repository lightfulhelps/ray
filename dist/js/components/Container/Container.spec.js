"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: _react["default"].createElement("p", null, "Children")
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Container["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Container />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the children prop', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    expect(wrapper.children().text()).toEqual('Children');
  });
  it('should handle the className prop', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('container')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the isFluid prop', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('container')).toBe(true);
    expect(wrapper.hasClass('container-fluid')).toBe(false);
    wrapper.setProps({
      isFluid: true
    });
    expect(wrapper.hasClass('container')).toBe(false);
    expect(wrapper.hasClass('container-fluid')).toBe(true);
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
});