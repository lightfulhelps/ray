import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Row from './Row';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: <p>Children</p>,
    },
    overrides
  );
  const wrapper = shallow(<Row {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Row />', () => {
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

    expect(wrapper.hasClass('row')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the noGutter prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('no-gutters')).toBe(false);

    wrapper.setProps({ noGutters: true });

    expect(wrapper.hasClass('no-gutters')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.type()).toBe('a');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
