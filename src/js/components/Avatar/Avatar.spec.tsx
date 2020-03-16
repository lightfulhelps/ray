import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Avatar from './Avatar';
import { Icon } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      url: 'https://randomuser.me/api/portraits/women/47.jpg',
      provider: 'twitter' as const,
    },
    overrides
  );
  const wrapper = shallow(<Avatar {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Avatar />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup({ className: 'custom' });

    expect(wrapper.hasClass('avatar')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the url prop', () => {
    const { wrapper } = setup({ url: 'https://randomuser.me/api/portraits/women/47.jpg' });

    expect(wrapper.find('.avatar-image').prop('style').backgroundImage).toContain(
      'https://randomuser.me/api/portraits/women/47.jpg'
    );
  });

  it('should handle the provider prop', () => {
    const { wrapper } = setup({ provider: null });

    expect(wrapper.find('.avatar-provider').exists()).toBe(false);

    wrapper.setProps({ provider: 'facebook' });

    expect(wrapper.find('.avatar-provider').exists()).toBe(true);
    expect(
      wrapper
        .find('.avatar-provider')
        .find(Icon)
        .prop('name')
    ).toEqual('facebook');
  });

  it('should handle the providerSize prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ providerSize: 'lg' });

    expect(wrapper.hasClass('avatar-provider-lg')).toBe(true);

    wrapper.setProps({ providerSize: 'sm' });

    expect(wrapper.hasClass('avatar-provider-sm')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});