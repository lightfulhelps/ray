import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Col from './Col';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: <div>Content</div>,
    },
    overrides
  );
  const wrapper = shallow(<Col {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Col', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render children', () => {
    const { wrapper } = setup({ children: 'Children' });

    expect(wrapper.text()).toBe('Children');
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('col')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle all recognised col widths', () => {
    const { wrapper } = setup({ xs: 12, sm: 6, md: 4, lg: 2, xl: 1, xxl: 3 });

    expect(wrapper.hasClass('col-12')).toBe(true);
    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col-md-4')).toBe(true);
    expect(wrapper.hasClass('col-lg-2')).toBe(true);
    expect(wrapper.hasClass('col-xl-1')).toBe(true);
    expect(wrapper.hasClass('col-xxl-3')).toBe(false);
  });

  it('should pass col size specific classes as Strings', () => {
    const { wrapper } = setup({ sm: '6' });

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });

  it('should pass col size specific classes as Numbers', () => {
    const { wrapper } = setup({ sm: 6 });

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
  });

  it('should pass col size specific classes via Objects', () => {
    const { wrapper } = setup({ sm: { size: 6, order: 2, offset: 2 } });

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('order-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
  });

  it('should pass col size specific classes via Objects including 0', () => {
    const { wrapper } = setup({ sm: { size: 6, order: 0, offset: 0 } });

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('col')).toBe(false);
    expect(wrapper.hasClass('order-sm-0')).toBe(true);
    expect(wrapper.hasClass('offset-sm-0')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'span' });

    expect(wrapper.type()).toBe('span');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
