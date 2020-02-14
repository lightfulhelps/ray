import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import FormGroup from "./FormGroup";

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<FormGroup {...props} />);

  return { wrapper, props };
};

describe('<FormGroup />', () => {
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

    expect(wrapper.hasClass('form-group')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isCheck', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('form-group')).toBe(true);
    expect(wrapper.hasClass('form-check')).toBe(false);

    wrapper.setProps({ isCheck: true });

    expect(wrapper.hasClass('form-group')).toBe(false);
    expect(wrapper.hasClass('form-check')).toBe(true);
  });

  it('should handle tag', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'li' });

    expect(wrapper.type()).toBe('li');
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});