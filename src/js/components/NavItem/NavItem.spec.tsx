import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import NavItem from './NavItem';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<NavItem {...props} />);

  return { wrapper, props };
};

describe('<NavItem />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('nav-item')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('li');

    wrapper.setProps({ tag: 'div' });

    expect(wrapper.type()).toBe('div');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
