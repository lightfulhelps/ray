import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import FormPasswordInput from './FormPasswordInput';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';

const setup = (overrides = {}) => {
  const props = merge(
    {
      onBlur: jest.fn(),
      onChange: jest.fn(),
      value: 'Some value',
    },
    overrides
  );
  const wrapper = shallow(<FormPasswordInput {...props} />);

  return { wrapper, props, button: wrapper.find(Button), input: wrapper.find(FormInput) };
};

describe('<FormPasswordInput />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    const input = wrapper.find(FormInput);

    expect(input.hasClass('form-control')).toBe(true);
    expect(input.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { input } = setup({ tabIndex: 1, 'data-test': 'test', className: 'custom' });

    expect(input.prop('tabIndex')).toEqual(1);
    expect(input.prop('data-test')).toEqual('test');
  });

  it('defaults name parameter to password', () => {
    const { input } = setup();

    expect(input.prop('name')).toEqual('password');
  });

  describe('input pass throughs', () => {
    it('passes through placeholder', () => {
      const placeholder = 'Some placeholder';

      const { input } = setup({ placeholder });

      expect(input.prop('placeholder')).toEqual(placeholder);
    });

    it('passes through value', () => {
      const value = 'Some value';

      const { input } = setup({ value });

      expect(input.prop('value')).toEqual(value);
    });

    it('passes through onChange', () => {
      const {
        input,
        props: { onChange },
      } = setup();

      input.simulate('change');

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('passes through onBlur', () => {
      const {
        input,
        props: { onBlur },
      } = setup();

      input.simulate('blur');

      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('passes through name', () => {
      const name = 'secretPassword';
      const { input } = setup({ name });

      expect(input.prop('name')).toEqual(name);
    });

    it('passes through id', () => {
      const id = 'secretPassword';
      const { input } = setup({ id });

      expect(input.prop('id')).toEqual(id);
    });
  });

  describe('end to end test helpers', () => {
    it('has a data-test-id for the input', () => {
      const { input } = setup();

      expect(input.prop('data-test-id')).toEqual('password-input');
    });

    it('has a data-test-id for the button', () => {
      const { button } = setup();

      expect(button.prop('data-test-id')).toEqual('password-input-button');
    });
  });

  describe('show password toggle', () => {
    it('hides password by default', () => {
      const { input } = setup();

      expect(input.prop('type')).toEqual('password');
    });

    it('shows password when state is set', () => {
      const { wrapper, button } = setup();

      button.simulate('click');

      const input = wrapper.find(FormInput);

      expect(input.prop('type')).toEqual('text');
    });

    describe('icon toggle', () => {
      it('has button for toggle', () => {
        const { button } = setup();

        expect(button).toHaveLength(1);
      });

      it('has a button that changes state when clicked', () => {
        const { button, input } = setup();

        button.simulate('click');

        expect(input.prop('type')).toEqual('password');
      });

      it('has a button that says Show when password is hidden', () => {
        const { wrapper } = setup();

        const span = wrapper.find('.form-password-input__toggle-password-text');

        expect(span.text()).toEqual('Show');
      });

      it('has a button that says Hide when password is hidden', () => {
        const { wrapper, button } = setup();

        button.simulate('click');

        const span = wrapper.find('.form-password-input__toggle-password-text');

        expect(span.text()).toEqual('Hide');
      });

      it('has a preview icon when password is hidden', () => {
        const { button, input } = setup();

        expect(input.prop('type')).toEqual('password');

        expect(button.prop('icon')).toEqual('preview');
      });

      it('has a preview-hide icon when password is hidden', () => {
        const { wrapper, button } = setup();

        button.simulate('click');

        expect(wrapper.find(Button).prop('icon')).toEqual('previewHide');
      });
    });
  });
});
