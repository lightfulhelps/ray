import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import FormFeedback from "./FormFeedback";

const setup = (overrides = {}) => {
  const props = merge({
    children: 'Invalid value for...'
  }, overrides);
  const wrapper = shallow(<FormFeedback {...props} />);

  return { wrapper, props };
};

describe('<FormFeedback />', () => {
  it('should render', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle children', () => {
    const {
      wrapper
    } = setup({ children: 'Children' });

    expect(wrapper.text()).toBe('Children');
  });

  it('should handle className', () => {
    const {
      wrapper
    } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('invalid-feedback')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isValid', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('invalid-feedback')).toBe(true);
    expect(wrapper.hasClass('valid-feedback')).toBe(false);

    wrapper.setProps({ isValid: true });

    expect(wrapper.hasClass('invalid-feedback')).toBe(false);
    expect(wrapper.hasClass('valid-feedback')).toBe(true);
  });

  it('should handle tag', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'span' });

    expect(wrapper.type()).toBe('span');
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});