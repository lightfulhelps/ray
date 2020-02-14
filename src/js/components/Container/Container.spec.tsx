import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import Container from "./Container";

const setup = (overrides = {}) => {
  const props = merge({
    children: <p>Children</p>
  }, overrides);
  const wrapper = shallow(<Container {...props} />);

  return {
    wrapper,
    props
  };
};

describe('<Container />', () => {
  it('should render', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.children().text()).toEqual('Children');
  });

  it('should handle the className prop', () => {
    const {
      wrapper
    } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('container')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the isFluid prop', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('container')).toBe(true);
    expect(wrapper.hasClass('container-fluid')).toBe(false);

    wrapper.setProps({ isFluid: true });

    expect(wrapper.hasClass('container')).toBe(false);
    expect(wrapper.hasClass('container-fluid')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.type()).toBe('a');
  });
});