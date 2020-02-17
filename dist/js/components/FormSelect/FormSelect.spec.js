"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _Creatable = _interopRequireDefault(require("react-select/lib/Creatable"));

var _FormSelect = _interopRequireDefault(require("./FormSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<FormSelect />', function () {
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
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isCreatable', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper.find(_reactSelect["default"])).toHaveLength(1);
    expect(wrapper.find(_Creatable["default"])).toHaveLength(0);
    wrapper.setProps({
      isCreatable: true
    });
    expect(wrapper.find(_reactSelect["default"])).toHaveLength(0);
    expect(wrapper.find(_Creatable["default"])).toHaveLength(1);
  });
  it('should handle isInvalid', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('is-invalid')).toBe(false);
    wrapper.setProps({
      isInvalid: true
    });
    expect(wrapper.hasClass('is-invalid')).toBe(true);
  });
  it('should handle isValid', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('is-valid')).toBe(false);
    wrapper.setProps({
      isValid: true
    });
    expect(wrapper.hasClass('is-valid')).toBe(true);
  });
  it('should handle size', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    wrapper.setProps({
      size: 'sm'
    });
    expect(wrapper.hasClass('form-select-sm')).toBe(true);
    wrapper.setProps({
      size: 'lg'
    });
    expect(wrapper.hasClass('form-select-lg')).toBe(true);
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