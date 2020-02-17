"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _FormInput = _interopRequireDefault(require("./FormInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_FormInput["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<FormInput />', function () {
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
    expect(wrapper.hasClass('form-control')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isInvalid', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper.hasClass('is-invalid')).toBe(false);
    wrapper.setProps({
      isInvalid: true
    });
    expect(wrapper.hasClass('is-invalid')).toBe(true);
  });
  it('should handle isValid', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('is-valid')).toBe(false);
    wrapper.setProps({
      isValid: true
    });
    expect(wrapper.hasClass('is-valid')).toBe(true);
  });
  it('should handle size', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    wrapper.setProps({
      size: 'lg'
    });
    expect(wrapper.hasClass('form-control-lg')).toBe(true);
    wrapper.setProps({
      size: 'sm'
    });
    expect(wrapper.hasClass('form-control-sm')).toBe(true);
  });
  it('should handle type', function () {
    var _setup6 = setup({
      type: 'text'
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('form-control')).toBe(true);
    wrapper.setProps({
      type: 'file'
    });
    expect(wrapper.hasClass('form-control-file')).toBe(true);
    wrapper.setProps({
      type: 'radio'
    });
    expect(wrapper.hasClass('form-check-input')).toBe(true);
    wrapper.setProps({
      type: 'checkbox'
    });
    expect(wrapper.hasClass('form-check-input')).toBe(true);
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