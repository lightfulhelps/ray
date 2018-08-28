import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Avatar from './Avatar';
import { Icon } from '../../';

const setup = (overrides = {}) => {
  const props = merge(
    {
      url: 'https://randomuser.me/api/portraits/women/47.jpg',
      provider: 'twitter',
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
    const { wrapper } = setup({ url: null });

    expect(wrapper.find('.avatar-image').exists()).toBe(false);

    wrapper.setProps({ url: 'https://randomuser.me/api/portraits/women/47.jpg' });

    expect(wrapper.find('.avatar-image').exists()).toBe(true);
    expect(wrapper.find('.avatar-image').prop('src')).toEqual(
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
});
