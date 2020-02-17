"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    label: 'Click me'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Collapse["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Collapse />', function () {
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
  it('should toggle display of children', function () {
    var _setup4 = setup({
      children: _react["default"].createElement("div", null, "My test content")
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('[data-test-id="collapse-children"]')).toHaveLength(0);
    wrapper.find('[data-test-id="collapse-toggle"]').simulate('click');
    expect(wrapper.find('[data-test-id="collapse-children"]')).toHaveLength(1);
    wrapper.find('[data-test-id="collapse-toggle"]').simulate('click');
    expect(wrapper.find('[data-test-id="collapse-children"]')).toHaveLength(0);
  });
  it('should toggle icon', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('[data-test-id="collapse-toggle"]').find('Icon').prop('name')).toEqual('chevronDown');
    wrapper.find('[data-test-id="collapse-toggle"]').simulate('click');
    expect(wrapper.find('[data-test-id="collapse-toggle"]').find('Icon').prop('name')).toEqual('chevronUp');
    wrapper.find('[data-test-id="collapse-toggle"]').simulate('click');
    expect(wrapper.find('[data-test-id="collapse-toggle"]').find('Icon').prop('name')).toEqual('chevronDown');
  });
  it('should be open if defaultOpen is true', function () {
    var _setup6 = setup({
      defaultOpen: true
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.find('[data-test-id="collapse-children"]')).toHaveLength(1);
  });
});