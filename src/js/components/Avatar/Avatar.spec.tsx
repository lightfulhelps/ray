import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Avatar from './Avatar';
import { Icon } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      url: 'https://randomuser.me/api/portraits/women/47.jpg',
      name: 'Milton Friesen',
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

  it('should display an initials avatar if no image url', () => {
    const { wrapper } = setup({ url: null });

    expect(wrapper.find('.avatar-image').prop('style').backgroundImage).toContain(
      'url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20style%3D%22isolation%3Aisolate%3B%22%20viewBox%3D%220%200%201%201%22%20version%3D%221.1%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22transparent%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20style%3D%22%20font-family%3A%20Arial%2Csans-serif%3B%20font-size%3A%200.5px%22%20fill%3D%22%23FFF%22%20text-anchor%3D%22middle%22%20dy%3D%22.178%22%3EMF%3C%2Ftext%3E%3C%2Fsvg%3E), url(https://assets.lightful.com/platform/brand/avatar_background.png)'
    );
  });
});
