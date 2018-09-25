import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import NavLink from './NavLink';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<NavLink {...props} />);

  return { wrapper, props };
};

describe('<NavLink />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('nav-link')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isActive', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('active')).toBe(false);

    wrapper.setProps({ isActive: true });

    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should handle isDisabled', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('disabled')).toBe(false);

    wrapper.setProps({ isDisabled: true });

    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('a');

    wrapper.setProps({ tag: 'div' });

    expect(wrapper.type()).toBe('div');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
