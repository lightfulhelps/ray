import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import FormPasswordInput from './FormPasswordInput';
import Button from '../Button/Button';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<FormPasswordInput {...props} />);

  return { wrapper, props };
};

describe('<FormPasswordInput />', () => {
  it.skip('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('form-password-input')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });

  describe('show password toggle', () => {
    it('hides password by default', () => {
      const { wrapper } = setup();

      const input = wrapper.find('input');

      expect(input.prop('type')).toEqual('password');
    });

    it('shows password when state is set', () => {
      const { wrapper } = setup();

      wrapper.setState({ hidePassword: false });

      const input = wrapper.find('input');

      expect(input.prop('type')).toEqual('text');
    });

    describe('icon toggle', () => {
      it('has button for toggle', () => {
        const { wrapper } = setup();

        const button = wrapper.find('.input-group-append');

        expect(button).toHaveLength(1);
      });

      it('has a button that says Show when password is hidden', () => {
        const { wrapper } = setup();

        const span = wrapper.find('.form-password-input__toggle-password-text');

        expect(span.text()).toEqual('Show');
      });

      it('has a button that says Hide when password is hidden', () => {
        const { wrapper } = setup();

        wrapper.setState({ hidePassword: false });

        const span = wrapper.find('.form-password-input__toggle-password-text');

        expect(span.text()).toEqual('Hide');
      });

      it('has a preview icon when password is hidden', () => {
        const { wrapper } = setup();

        const button = wrapper.find(Button);

        expect(button.prop('icon')).toEqual('preview');
      });

      it('has a preview-hide icon when password is hidden', () => {
        const { wrapper } = setup();

        wrapper.setState({ hidePassword: false });

        const button = wrapper.find(Button);

        expect(button.prop('icon')).toEqual('previewHide');
      });
    });
  });
});
