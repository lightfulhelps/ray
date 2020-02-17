"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    onChange: jest.fn(),
    onSearch: jest.fn()
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_SearchInput["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<SearchInput />', function () {
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
    expect(wrapper.hasClass('search-input')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle onChange', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper,
        props = _setup3.props;

    wrapper.find('[data-test-id="search-input"]').simulate('change', {
      target: {
        value: 'Test'
      }
    });
    expect(props.onChange).toHaveBeenCalledWith({
      target: {
        value: 'Test'
      }
    });
  });
  describe('onSearch', function () {
    it('should call onSearch on button click', function () {
      var _setup4 = setup(),
          wrapper = _setup4.wrapper,
          props = _setup4.props;

      wrapper.find('[data-test-id="search-input-button"]').simulate('click');
      expect(props.onSearch).toHaveBeenCalledTimes(1);
    });
    it('should call onSearch with event on Enter keypress', function () {
      var _setup5 = setup(),
          wrapper = _setup5.wrapper,
          props = _setup5.props;

      wrapper.find('[data-test-id="search-input"]').simulate('keyPress', {
        key: 'a'
      });
      expect(props.onSearch).toHaveBeenCalledTimes(0);
      wrapper.find('[data-test-id="search-input"]').simulate('keyPress', {
        key: 'Enter'
      });
      expect(props.onSearch).toHaveBeenCalledTimes(1);
      expect(props.onSearch).toHaveBeenCalledWith({
        key: 'Enter'
      });
    });
  });
  it('should handle placeholder', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.find('[data-test-id="search-input"]').prop('placeholder')).toEqual('Search...');
    wrapper.setProps({
      placeholder: 'Search here...'
    });
    expect(wrapper.find('[data-test-id="search-input"]').prop('placeholder')).toEqual('Search here...');
  });
  it('should handle value', function () {
    var _setup7 = setup({
      value: 'Test'
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.find('[data-test-id="search-input"]').prop('value')).toEqual('Test');
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