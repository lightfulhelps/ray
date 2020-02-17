"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _FormFeedback = _interopRequireDefault(require("./FormFeedback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: 'Invalid value for...'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_FormFeedback["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<FormFeedback />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle children', function () {
    var _setup2 = setup({
      children: 'Children'
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper.text()).toBe('Children');
  });
  it('should handle className', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('invalid-feedback')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isValid', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('invalid-feedback')).toBe(true);
    expect(wrapper.hasClass('valid-feedback')).toBe(false);
    wrapper.setProps({
      isValid: true
    });
    expect(wrapper.hasClass('invalid-feedback')).toBe(false);
    expect(wrapper.hasClass('valid-feedback')).toBe(true);
  });
  it('should handle tag', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'span'
    });
    expect(wrapper.type()).toBe('span');
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