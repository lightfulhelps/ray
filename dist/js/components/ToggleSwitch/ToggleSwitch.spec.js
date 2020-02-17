"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ToggleSwitch = _interopRequireDefault(require("./ToggleSwitch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])(overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_ToggleSwitch["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<ToggleSwitch />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render label', function () {
    var _setup2 = setup({
      label: 'this is a label'
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render label on the right side if labelAlign prop is set', function () {
    var _setup3 = setup({
      label: 'this is a label',
      labelAlign: 'left'
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.hasClass('custom-switch-left')).toBe(true);
    wrapper.setProps({
      labelAlign: 'top'
    });
    expect(wrapper.hasClass('custom-switch-top')).toBe(true);
  });
  it('should set disabled attribute to true if isDisabled prop is specified', function () {
    var _setup4 = setup({
      isDisabled: true
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });
  it('should handle onClick events', function () {
    var _setup5 = setup({
      onClick: jest.fn()
    }),
        wrapper = _setup5.wrapper,
        props = _setup5.props;

    wrapper.find('label').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
  it('should not call onClick if isDisabled', function () {
    var preventDefault = jest.fn();

    var _setup6 = setup({
      onClick: jest.fn(),
      isDisabled: true
    }),
        wrapper = _setup6.wrapper,
        props = _setup6.props;

    wrapper.find('label').simulate('click', {
      preventDefault: preventDefault
    });
    expect(preventDefault).toHaveBeenCalled();
    expect(props.onClick).not.toHaveBeenCalled();
  });
  it('should handle onChange events', function () {
    var _setup7 = setup({
      onChange: jest.fn()
    }),
        wrapper = _setup7.wrapper,
        props = _setup7.props;

    wrapper.find('input').simulate('change', {
      foo: 'bar'
    });
    expect(props.onChange).toHaveBeenCalledWith({
      foo: 'bar'
    });
  });
});