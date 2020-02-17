"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({}, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_.CharacterCounter, props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<CharacterCounter />', function () {
  it('should render', function () {
    var _setup = setup({
      text: 'Text',
      max: 5
    }),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle className', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('character-counter')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle max', function () {
    var _setup3 = setup({
      max: 10
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.text()).toEqual('<Icon />0/10');
    wrapper.setProps({
      max: 60000
    });
    expect(wrapper.text()).toEqual('<Icon />0/60,000');
  });
  it('should handle count', function () {
    var _setup4 = setup({
      count: 5
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.text()).toEqual('<Icon />5');
  });
  it('should handle text', function () {
    var _setup5 = setup({
      text: 'This is my text'
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.text()).toEqual('<Icon />15');
    var longText = '';

    for (var i = 1; i < 10000; i++) {
      longText += 'a';
    }

    wrapper.setProps({
      text: longText
    });
    expect(wrapper.text()).toEqual('<Icon />9,999');
  });
  it('should use count over text length', function () {
    var _setup6 = setup({
      count: 5,
      text: 'This is my text'
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.text()).toEqual('<Icon />5');
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
  it('should add danger class if over max', function () {
    var _setup8 = setup({
      text: 'Foo',
      max: '10'
    }),
        wrapper = _setup8.wrapper;

    expect(wrapper.hasClass('text-danger')).toEqual(false);
    wrapper.setProps({
      text: 'Some longer text'
    });
    expect(wrapper.hasClass('text-danger')).toEqual(true);
  });
});