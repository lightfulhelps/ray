import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import FormLabel from "./FormLabel";

const setup = (overrides = {}) => {
  const props = merge({
    children: 'Email'
  }, overrides);
  const wrapper = shallow(<FormLabel {...props} />);

  return { wrapper, props };
};

describe('<FormLabel />', () => {
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

    expect(wrapper.hasClass('form-label')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isCheck', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('form-label')).toBe(true);
    expect(wrapper.hasClass('form-check-label')).toBe(false);

    wrapper.setProps({ isCheck: true });

    expect(wrapper.hasClass('form-label')).toBe(false);
    expect(wrapper.hasClass('form-check-label')).toBe(true);
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});