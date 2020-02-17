"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: 'Children',
    footer: 'Footer'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_.DropdownMenu, props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<DropdownMenu />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the children prop', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    expect(wrapper.children().at(0).text()).toEqual('Children');
  });
  it('should handle className', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('dropdown-menu')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
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
  it('should optionally display the footer', function () {
    var _setup5 = setup({
      footer: null
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('.dropdown-footer').exists()).toBe(false);
    wrapper.setProps({
      footer: 'Test'
    });
    expect(wrapper.find('.dropdown-footer').exists()).toBe(true);
    expect(wrapper.find('.dropdown-footer').text()).toEqual('Test');
  });
  it('should handle the isOpen prop', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('show')).toBe(false);
    wrapper.setProps({
      isOpen: true
    });
    expect(wrapper.hasClass('show')).toBe(true);
  });
  it('should handle the onClick prop', function () {
    var onClick = jest.fn();

    var _setup7 = setup({
      onClick: onClick
    }),
        wrapper = _setup7.wrapper;

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should not error if onClick is not a function', function () {
    var _setup8 = setup({
      onClick: 'foo'
    }),
        wrapper = _setup8.wrapper;

    expect(function () {
      wrapper.simulate('click');
    }).not.toThrow();
  });
  it('should handle the position prop', function () {
    var _setup9 = setup(),
        wrapper = _setup9.wrapper;

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-left')).toBe(true);
    wrapper.setProps({
      position: 'right'
    });
    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });
  it('should handle the tag prop', function () {
    var _setup10 = setup(),
        wrapper = _setup10.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'a'
    });
    expect(wrapper.type()).toBe('a');
  });
  it('should handle the theme prop', function () {
    var _setup11 = setup(),
        wrapper = _setup11.wrapper;

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-light')).toBe(true);
    wrapper.setProps({
      theme: 'dark'
    });
    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-dark')).toBe(true);
  });
});