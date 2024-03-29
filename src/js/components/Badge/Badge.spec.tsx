import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Badge from './Badge';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Badge',
    },
    overrides
  );
  const wrapper = shallow(<Badge {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Badge />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { wrapper } = setup();

    expect(wrapper.children().text()).toEqual('Badge');
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('badge')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the color prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ color: '#ff0000' });

    expect(wrapper.prop('style')).toEqual({
      backgroundColor: '#ff0000',
    });
  });

  it('should handle the isPill prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('rounded-pill')).toBe(false);

    wrapper.setProps({ isPill: true });

    expect(wrapper.hasClass('rounded-pill')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.type()).toBe('a');

    wrapper.setProps({ tag: 'span' });

    expect(wrapper.type()).toBe('span');
  });

  it('should handle the theme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('bg-primary')).toBe(true);

    wrapper.setProps({ theme: 'secondary' });

    expect(wrapper.hasClass('bg-primary')).toBe(false);
    expect(wrapper.hasClass('bg-secondary')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
