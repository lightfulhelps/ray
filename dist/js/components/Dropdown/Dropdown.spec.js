"use strict";

var _react = _interopRequireDefault(require("react"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _enzyme = require("enzyme");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    render: jest.fn()
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_.Dropdown, props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Dropdown />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the className prop', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('dropdown')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should pass through other props', function () {
    var _setup3 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
  describe('handleToggle', function () {
    it('should update isOpen in state', function () {
      var _setup4 = setup(),
          wrapper = _setup4.wrapper;

      expect(wrapper.state('isOpen')).toBe(false);
      wrapper.instance().handleToggle();
      expect(wrapper.state('isOpen')).toBe(true);
      wrapper.instance().handleToggle();
      expect(wrapper.state('isOpen')).toBe(false);
    });
  });
  it('should set isOpen false on document click', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    wrapper.instance().handleToggle();
    document.body.click();
    expect(wrapper.state('isOpen')).toBe(false);
  });
});