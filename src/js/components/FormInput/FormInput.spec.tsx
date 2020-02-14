import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import FormInput from "./FormInput";

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<FormInput {...props} />);

  return { wrapper, props };
};

describe('<FormInput />', () => {
  it('should render', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const {
      wrapper
    } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('form-control')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isInvalid', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('is-invalid')).toBe(false);

    wrapper.setProps({ isInvalid: true });

    expect(wrapper.hasClass('is-invalid')).toBe(true);
  });

  it('should handle isValid', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('is-valid')).toBe(false);

    wrapper.setProps({ isValid: true });

    expect(wrapper.hasClass('is-valid')).toBe(true);
  });

  it('should handle size', () => {
    const {
      wrapper
    } = setup();

    wrapper.setProps({ size: 'lg' });

    expect(wrapper.hasClass('form-control-lg')).toBe(true);

    wrapper.setProps({ size: 'sm' });

    expect(wrapper.hasClass('form-control-sm')).toBe(true);
  });

  it('should handle type', () => {
    const {
      wrapper
    } = setup({ type: 'text' });

    expect(wrapper.hasClass('form-control')).toBe(true);

    wrapper.setProps({ type: 'file' });

    expect(wrapper.hasClass('form-control-file')).toBe(true);

    wrapper.setProps({ type: 'radio' });

    expect(wrapper.hasClass('form-check-input')).toBe(true);

    wrapper.setProps({ type: 'checkbox' });

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});