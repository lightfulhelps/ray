"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    children: 'Social For Good'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Tag["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Tag />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with a remove Icon', function () {
    var _setup2 = setup({
      onRemove: jest.fn()
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle children', function () {
    var _setup3 = setup({
      children: 'Test'
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.find('div').prop('children')).toContain('Test');
  });
  it('should handle className', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('tag')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle onRemove', function () {
    var onRemove = jest.fn();

    var _setup5 = setup({
      onRemove: onRemove
    }),
        wrapper = _setup5.wrapper;

    wrapper.find('[data-test-id="tag-remove-icon"]').simulate('click');
    expect(onRemove).toHaveBeenCalledTimes(1);
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