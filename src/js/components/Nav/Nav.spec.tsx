import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Nav from './Nav';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<Nav {...props} />);

  return { wrapper, props };
};

describe('<Nav />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('nav')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isFill', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('nav-fill')).toBe(false);

    wrapper.setProps({ isFill: true });

    expect(wrapper.hasClass('nav-fill')).toBe(true);
  });

  it('should handle isPills', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('nav-pills')).toBe(false);

    wrapper.setProps({ isPills: true });

    expect(wrapper.hasClass('nav-pills')).toBe(true);
  });

  it('should handle isTabs', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('nav-tabs')).toBe(false);

    wrapper.setProps({ isTabs: true });

    expect(wrapper.hasClass('nav-tabs')).toBe(true);
  });

  it('should handle tag', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('ul');

    wrapper.setProps({ tag: 'nav' });

    expect(wrapper.type()).toBe('nav');

    wrapper.setProps({ tag: 'div' });

    expect(wrapper.type()).toBe('div');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
