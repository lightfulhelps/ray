"use strict";

var _react = _interopRequireDefault(require("react"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _enzyme = require("enzyme");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: 'Test',
    onClick: jest.fn()
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_.DropdownItem, props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<DropdownItem />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the children prop', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    expect(wrapper.children().text()).toEqual('Test');
  });
  it('should handle the className prop', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('dropdown-item')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the isActive prop', function () {
    var _setup4 = setup({
      isActive: true
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.hasClass('dropdown-item')).toBe(true);
    expect(wrapper.hasClass('active')).toBe(true);
  });
  it('should handle the isDisabled prop', function () {
    var _setup5 = setup({
      isDisabled: true
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('dropdown-item')).toBe(true);
    expect(wrapper.hasClass('disabled')).toBe(true);
  });
  it('should handle the isHeader prop', function () {
    var _setup6 = setup({
      isHeader: true
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('dropdown-item')).toBe(false);
    expect(wrapper.hasClass('dropdown-header')).toBe(true);
  });
  it('should handle the tag prop', function () {
    var _setup7 = setup(),
        wrapper = _setup7.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'a'
    });
    expect(wrapper.type()).toBe('a');
  });
  describe('onClick', function () {
    it('should call onClick with data provided', function () {
      var _setup8 = setup(),
          wrapper = _setup8.wrapper,
          props = _setup8.props;

      wrapper.simulate('click', {
        foo: 'bar'
      });
      expect(props.onClick).toHaveBeenCalledTimes(1);
      expect(props.onClick).toHaveBeenCalledWith({
        foo: 'bar'
      });
    });
    it('should preventDefault if isDisabled', function () {
      var preventDefault = jest.fn();

      var _setup9 = setup(),
          wrapper = _setup9.wrapper;

      wrapper.simulate('click');
      expect(preventDefault).not.toHaveBeenCalled();
      wrapper.setProps({
        isDisabled: true
      });
      wrapper.simulate('click', {
        preventDefault: preventDefault
      });
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });
    it('should not error if onClick is not a function', function () {
      var _setup10 = setup({
        onClick: 'foo'
      }),
          wrapper = _setup10.wrapper;

      expect(function () {
        wrapper.simulate('click');
      }).not.toThrow();
    });
  });
});