"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Stepper = _interopRequireDefault(require("./Stepper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    steps: [{
      label: 'step one',
      value: 1,
      onClick: jest.fn()
    }, {
      label: 'step two',
      value: 2,
      onClick: jest.fn()
    }, {
      label: 'step three',
      value: 3
    }],
    activeStep: 1
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Stepper["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Stepper />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should return null if the steps prop is not an array', function () {
    var _setup2 = setup({
      steps: 'Suuurrreee, I am an array. DW'
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper.type()).toBeNull();
  });
  it('should return null if there is no activeStep prop', function () {
    var _setup3 = setup({
      activeStep: null
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.type()).toBeNull();
  });
  it('should handle className', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('stepper')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('`isLast` prop should eveluate to false for all but the last step', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    var firstStep = wrapper.find('Step').at(0);
    var secondStep = wrapper.find('Step').at(1);
    var lastStep = wrapper.find('Step').at(2);
    expect(firstStep.prop('isLast')).toBe(false);
    expect(secondStep.prop('isLast')).toBe(false);
    expect(lastStep.prop('isLast')).toBe(true);
  });
  it('should pass steps object values to Step component via props', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper,
        props = _setup6.props;

    var renderedSteps = wrapper.find('Step');
    props.steps.forEach(function (step, index) {
      expect(renderedSteps.at(index).prop('label')).toEqual(step.label);
      expect(renderedSteps.at(index).prop('value')).toEqual(step.value);
      expect(renderedSteps.at(index).prop('onClick')).toEqual(step.onClick);
    });
  });
  it('should pass through other props', function () {
    var _setup7 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});