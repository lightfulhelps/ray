"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Step = _interopRequireDefault(require("./Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    activeStep: 2,
    isLast: false,
    label: 'step one',
    onClick: jest.fn(),
    thisStep: 2,
    value: 2
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Step["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Step />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  describe('active state', function () {
    it('should add appropriate classes if the `activeStep` prop is equal to the `thisStep` prop', function () {
      var _setup2 = setup(),
          wrapper = _setup2.wrapper;

      expect(wrapper.html()).toContain('bg-primary text-white border-primary');
    });
    it('should render the label prop as the content if the `activeStep` prop is equal to the `thisStep` prop', function () {
      var _setup3 = setup(),
          wrapper = _setup3.wrapper,
          props = _setup3.props;

      expect(wrapper.find('Icon')).toHaveLength(0);
      expect(wrapper.text()).toContain(props.label);
    });
  });
  describe('todo state', function () {
    it('should add appropriate classes if the `thisStep` prop is greater than the `activeStep` prop', function () {
      var _setup4 = setup({
        activeStep: 1
      }),
          wrapper = _setup4.wrapper;

      expect(wrapper.html()).toContain('bg-gray-400 border-gray-400 text-white');
    });
    it('should render the label prop as the content if the `activeStep` prop is less than the `thisStep` prop', function () {
      var _setup5 = setup(),
          wrapper = _setup5.wrapper,
          props = _setup5.props;

      expect(wrapper.find('Icon')).toHaveLength(0);
      expect(wrapper.text()).toContain(props.label);
    });
  });
  describe('done state', function () {
    it('should add appropriate classes if the `thisStep` prop is less than the `activeStep` prop', function () {
      var _setup6 = setup({
        thisStep: 1
      }),
          wrapper = _setup6.wrapper;

      expect(wrapper.html()).toContain('bg-white border-primary');
    });
    it('render a tick icon if the `thisStep` prop is less than the `activeStep` prop', function () {
      var _setup7 = setup({
        thisStep: 1
      }),
          wrapper = _setup7.wrapper;

      expect(wrapper.find('Icon')).toHaveLength(1);
    });
  });
  it('should call onClick on click', function () {
    var _setup8 = setup(),
        wrapper = _setup8.wrapper,
        props = _setup8.props;

    wrapper.find('[data-test-id="stepper-step"]').simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});