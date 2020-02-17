"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    url: 'https://randomuser.me/api/portraits/women/47.jpg',
    provider: 'twitter'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Avatar["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Avatar />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the className prop', function () {
    var _setup2 = setup({
      className: 'custom'
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper.hasClass('avatar')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the url prop', function () {
    var _setup3 = setup({
      url: 'https://randomuser.me/api/portraits/women/47.jpg'
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.find('.avatar-image').prop('style').backgroundImage).toContain('https://randomuser.me/api/portraits/women/47.jpg');
  });
  it('should handle the provider prop', function () {
    var _setup4 = setup({
      provider: null
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('.avatar-provider').exists()).toBe(false);
    wrapper.setProps({
      provider: 'facebook'
    });
    expect(wrapper.find('.avatar-provider').exists()).toBe(true);
    expect(wrapper.find('.avatar-provider').find(_.Icon).prop('name')).toEqual('facebook');
  });
  it('should handle the providerSize prop', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    wrapper.setProps({
      providerSize: 'lg'
    });
    expect(wrapper.hasClass('avatar-provider-lg')).toBe(true);
    wrapper.setProps({
      providerSize: 'sm'
    });
    expect(wrapper.hasClass('avatar-provider-sm')).toBe(true);
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