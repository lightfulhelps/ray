"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _FormPasswordInput = _interopRequireDefault(require("./FormPasswordInput"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _FormInput = _interopRequireDefault(require("../FormInput/FormInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    onBlur: jest.fn(),
    onChange: jest.fn(),
    value: 'Some value'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_FormPasswordInput["default"], props));
  return {
    wrapper: wrapper,
    props: props,
    button: wrapper.find(_Button["default"]),
    input: wrapper.find(_FormInput["default"])
  };
};

describe('<FormPasswordInput />', function () {
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
    var input = wrapper.find(_FormInput["default"]);
    expect(input.hasClass('form-control')).toBe(true);
    expect(input.hasClass('custom')).toBe(true);
  });
  it('should pass through other props', function () {
    var _setup3 = setup({
      tabIndex: 1,
      'data-test': 'test',
      className: 'custom'
    }),
        input = _setup3.input;

    expect(input.prop('tabIndex')).toEqual(1);
    expect(input.prop('data-test')).toEqual('test');
  });
  it('defaults name parameter to password', function () {
    var _setup4 = setup(),
        input = _setup4.input;

    expect(input.prop('name')).toEqual('password');
  });
  describe('input pass throughs', function () {
    it('passes through placeholder', function () {
      var placeholder = 'Some placeholder';

      var _setup5 = setup({
        placeholder: placeholder
      }),
          input = _setup5.input;

      expect(input.prop('placeholder')).toEqual(placeholder);
    });
    it('passes through value', function () {
      var value = 'Some value';

      var _setup6 = setup({
        value: value
      }),
          input = _setup6.input;

      expect(input.prop('value')).toEqual(value);
    });
    it('passes through onChange', function () {
      var _setup7 = setup(),
          input = _setup7.input,
          onChange = _setup7.props.onChange;

      input.simulate('change');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
    it('passes through onBlur', function () {
      var _setup8 = setup(),
          input = _setup8.input,
          onBlur = _setup8.props.onBlur;

      input.simulate('blur');
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
    it('passes through name', function () {
      var name = 'secretPassword';

      var _setup9 = setup({
        name: name
      }),
          input = _setup9.input;

      expect(input.prop('name')).toEqual(name);
    });
    it('passes through id', function () {
      var id = 'secretPassword';

      var _setup10 = setup({
        id: id
      }),
          input = _setup10.input;

      expect(input.prop('id')).toEqual(id);
    });
  });
  describe('end to end test helpers', function () {
    it('has a data-test-id for the input', function () {
      var _setup11 = setup(),
          input = _setup11.input;

      expect(input.prop('data-test-id')).toEqual('password-input');
    });
    it('has a data-test-id for the button', function () {
      var _setup12 = setup(),
          button = _setup12.button;

      expect(button.prop('data-test-id')).toEqual('password-input-button');
    });
  });
  describe('show password toggle', function () {
    it('hides password by default', function () {
      var _setup13 = setup(),
          input = _setup13.input;

      expect(input.prop('type')).toEqual('password');
    });
    it('shows password when state is set', function () {
      var _setup14 = setup(),
          wrapper = _setup14.wrapper;

      wrapper.setState({
        hidePassword: false
      });
      var input = wrapper.find(_FormInput["default"]);
      expect(input.prop('type')).toEqual('text');
    });
    describe('icon toggle', function () {
      it('has button for toggle', function () {
        var _setup15 = setup(),
            button = _setup15.button;

        expect(button).toHaveLength(1);
      });
      it('has a button that changes state when clicked', function () {
        var _setup16 = setup(),
            button = _setup16.button,
            wrapper = _setup16.wrapper;

        button.simulate('click');
        expect(wrapper.state('hidePassword')).toEqual(false);
      });
      it('has a button that says Show when password is hidden', function () {
        var _setup17 = setup(),
            wrapper = _setup17.wrapper;

        var span = wrapper.find('.form-password-input__toggle-password-text');
        expect(span.text()).toEqual('Show');
      });
      it('has a button that says Hide when password is hidden', function () {
        var _setup18 = setup(),
            wrapper = _setup18.wrapper;

        wrapper.setState({
          hidePassword: false
        });
        var span = wrapper.find('.form-password-input__toggle-password-text');
        expect(span.text()).toEqual('Hide');
      });
      it('has a preview icon when password is hidden', function () {
        var _setup19 = setup(),
            button = _setup19.button,
            wrapper = _setup19.wrapper;

        expect(wrapper.state('hidePassword')).toEqual(true);
        expect(button.prop('icon')).toEqual('preview');
      });
      it('has a preview-hide icon when password is hidden', function () {
        var _setup20 = setup(),
            wrapper = _setup20.wrapper;

        wrapper.setState({
          hidePassword: false
        });
        expect(wrapper.find(_Button["default"]).prop('icon')).toEqual('previewHide');
      });
    });
  });
});