"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_FormGroup["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<FormGroup />', function () {
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
    expect(wrapper.hasClass('form-group')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isCheck', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('form-group')).toBe(true);
    expect(wrapper.hasClass('form-check')).toBe(false);
    wrapper.setProps({
      isCheck: true
    });
    expect(wrapper.hasClass('form-group')).toBe(false);
    expect(wrapper.hasClass('form-check')).toBe(true);
  });
  it('should handle tag', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'li'
    });
    expect(wrapper.type()).toBe('li');
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