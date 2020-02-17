"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: 'Click Me',
    onClick: jest.fn()
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Button />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with an icon', function () {
    var _setup2 = setup({
      icon: 'create'
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the iconTheme props', function () {
    var _setup3 = setup({
      icon: 'create',
      iconTheme: 'primary'
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the children prop', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.children().text()).toEqual('Click Me');
  });
  it('should handle the className prop', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('btn')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the isBlock prop', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('btn-block')).toBe(false);
    wrapper.setProps({
      isBlock: true
    });
    expect(wrapper.hasClass('btn-block')).toBe(true);
  });
  it('should handle the isDisabled prop', function () {
    var _setup7 = setup(),
        wrapper = _setup7.wrapper;

    expect(wrapper.hasClass('disabled')).toBe(false);
    wrapper.setProps({
      isDisabled: true
    });
    expect(wrapper.hasClass('disabled')).toBe(true);
  });
  it('should handle the isOutline prop', function () {
    var _setup8 = setup(),
        wrapper = _setup8.wrapper;

    expect(wrapper.hasClass('btn-outline-primary')).toBe(false);
    expect(wrapper.hasClass('btn-primary')).toBe(true);
    wrapper.setProps({
      isOutline: true
    });
    expect(wrapper.hasClass('btn-outline-primary')).toBe(true);
    expect(wrapper.hasClass('btn-primary')).toBe(false);
  });
  it('should handle the size prop', function () {
    var _setup9 = setup(),
        wrapper = _setup9.wrapper;

    wrapper.setProps({
      size: 'lg'
    });
    expect(wrapper.hasClass('btn-lg')).toBe(true);
    wrapper.setProps({
      size: 'sm'
    });
    expect(wrapper.hasClass('btn-sm')).toBe(true);
  });
  it('should handle the tag prop', function () {
    var _setup10 = setup(),
        wrapper = _setup10.wrapper;

    expect(wrapper.type()).toBe('button');
    wrapper.setProps({
      tag: 'a'
    });
    expect(wrapper.type()).toBe('a');
    wrapper.setProps({
      tag: 'div'
    });
    expect(wrapper.type()).toBe('div');
  });
  it('should handle the theme prop', function () {
    var _setup11 = setup(),
        wrapper = _setup11.wrapper;

    expect(wrapper.hasClass('btn-primary')).toBe(true);
    wrapper.setProps({
      theme: 'secondary'
    });
    expect(wrapper.hasClass('btn-primary')).toBe(false);
    expect(wrapper.hasClass('btn-secondary')).toBe(true);
  });
  it('should default the type prop to button if Tag is button', function () {
    var _setup12 = setup(),
        wrapper = _setup12.wrapper;

    wrapper.setProps({
      tag: 'button'
    });
    expect(wrapper.prop('type')).toEqual('button');
    wrapper.setProps({
      type: 'submit'
    });
    expect(wrapper.prop('type')).toEqual('submit');
    wrapper.setProps({
      tag: 'a'
    });
    expect(wrapper.prop('type')).toEqual(undefined);
  });
  it('should handle the iconPosition prop', function () {
    var _setup13 = setup({
      icon: 'create'
    }),
        wrapper = _setup13.wrapper;

    expect(wrapper.hasClass('btn-icon-left')).toBe(true);
    wrapper.setProps({
      iconPosition: 'right'
    });
    expect(wrapper.hasClass('btn-icon-right')).toBe(true);
    wrapper.setProps({
      iconPosition: 'left'
    });
    expect(wrapper.hasClass('btn-icon-left')).toBe(true);
  });
  it('should pass through other props', function () {
    var _setup14 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup14.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
  describe('onClick', function () {
    it('should call onClick with data provided', function () {
      var _setup15 = setup(),
          wrapper = _setup15.wrapper,
          props = _setup15.props;

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

      var _setup16 = setup(),
          wrapper = _setup16.wrapper;

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
      var _setup17 = setup({
        onClick: 'foo'
      }),
          wrapper = _setup17.wrapper;

      expect(function () {
        wrapper.simulate('click');
      }).not.toThrow();
    });
  });
});