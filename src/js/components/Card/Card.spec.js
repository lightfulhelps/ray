import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const setup = (overrides = {}) => {
  const props = {
    children: <p>Children</p>,
    ...overrides,
  };
  const wrapper = shallow(<Card {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Card />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { wrapper } = setup();

    expect(wrapper.children().text()).toEqual('Children');
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the color prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('bg-primary')).toBe(false);

    wrapper.setProps({ color: 'primary' });

    expect(wrapper.hasClass('bg-primary')).toBe(true);
  });

  it('should handle the outline prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('border-primary')).toBe(false);

    wrapper.setProps({ outline: true, color: 'primary' });

    expect(wrapper.hasClass('border-primary')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.type()).toBe('a');
  });
});
