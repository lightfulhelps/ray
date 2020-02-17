"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Progress = _interopRequireDefault(require("./Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Progress["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Progress />', function () {
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
    expect(wrapper.hasClass('progress')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the isAnimated prop', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-animated')).toBe(false);
    wrapper.setProps({
      isAnimated: true
    });
    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-animated')).toBe(true);
  });
  it('should handle the isStriped prop', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-striped')).toBe(false);
    wrapper.setProps({
      isStriped: true
    });
    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('progress-bar-striped')).toBe(true);
  });
  it('should handle the theme prop', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-primary')).toBe(true);
    wrapper.setProps({
      theme: 'secondary'
    });
    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-secondary')).toBe(true);
  });
  it('should handle the value prop', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.find('[data-test-id="progress-bar"]').prop('style').width).toBe('0%');
    wrapper.setProps({
      value: 30
    });
    expect(wrapper.find('[data-test-id="progress-bar"]').prop('style').width).toBe('30%');
  });
  it('should change to bg-danger when value is greater than 100', function () {
    var _setup7 = setup({
      value: 25
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-danger')).toBe(false);
    wrapper.setProps({
      value: 101
    });
    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-danger')).toBe(true);
  });
  it('should pass through other props', function () {
    var _setup8 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup8.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});