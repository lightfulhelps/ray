import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import Table from "./Table";

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<Table {...props} />);

  return { wrapper, props };
};

describe('<Table />', () => {
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

    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isBordered', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('table-bordered')).toBe(false);

    wrapper.setProps({ isBordered: true });

    expect(wrapper.hasClass('table-bordered')).toBe(true);
  });

  it('should handle isBorderless', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('table-borderless')).toBe(false);

    wrapper.setProps({ isBorderless: true });

    expect(wrapper.hasClass('table-borderless')).toBe(true);
  });

  it('should handle isHoverable', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('table-hover')).toBe(false);

    wrapper.setProps({ isHoverable: true });

    expect(wrapper.hasClass('table-hover')).toBe(true);
  });

  it('should handle isResponsive', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('table-responsive')).toBe(false);

    wrapper.setProps({ isResponsive: true });

    expect(wrapper.hasClass('table-responsive')).toBe(true);
  });

  it('should handle isStriped', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('table-striped')).toBe(false);

    wrapper.setProps({ isStriped: true });

    expect(wrapper.hasClass('table-striped')).toBe(true);
  });

  it('should handle size', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('table-sm')).toBe(false);
    expect(wrapper.hasClass('table-lg')).toBe(false);

    wrapper.setProps({ size: 'sm' });

    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('table-sm')).toBe(true);
    expect(wrapper.hasClass('table-lg')).toBe(false);

    wrapper.setProps({ size: 'lg' });

    expect(wrapper.hasClass('table')).toBe(true);
    expect(wrapper.hasClass('table-sm')).toBe(false);
    expect(wrapper.hasClass('table-lg')).toBe(true);
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});