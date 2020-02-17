"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _DropdownToggle = _interopRequireDefault(require("./DropdownToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownToggle["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<DropdownToggle />', function () {
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
    expect(wrapper.hasClass('dropdown-toggle')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle isOpen', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper.prop('icon')).toEqual('caretDown');
    wrapper.setProps({
      isOpen: true
    });
    expect(wrapper.prop('icon')).toEqual('caretUp');
  });
  it('should pass through other props', function () {
    var _setup4 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});