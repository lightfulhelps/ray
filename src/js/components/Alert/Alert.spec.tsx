import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Alert from './Alert';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Alert',
    },
    overrides
  );
  const wrapper = shallow(<Alert {...props} />);

  return { wrapper, props };
};

describe('<Alert />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { wrapper } = setup();

    expect(wrapper.children().text()).toEqual('Alert');
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('alert')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the theme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('alert-primary')).toBe(true);

    wrapper.setProps({ theme: 'secondary' });

    expect(wrapper.hasClass('alert-primary')).toBe(false);

    expect(wrapper.hasClass('alert-secondary')).toBe(true);
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

  it('should add a header', () => {
    const { wrapper } = setup({ header: 'Bonjour' });

    expect(wrapper.exists('h3')).toBe(true);
    expect(wrapper.find('h3').text()).toBe('Bonjour');
  });

  describe('Icon', () => {
    it('should hide the icon if no icon is set for the theme or in props', () => {
      const { wrapper } = setup();

      expect(wrapper.exists('Icon')).toBe(false);
    });

    it('should show an icon if an icon is set in the props', () => {
      const { wrapper } = setup({ icon: 'info' });

      expect(wrapper.exists('Icon')).toBe(true);
    });

    it('should show an icon if an icon is set for the theme', () => {
      const { wrapper } = setup({ theme: 'danger' });

      expect(wrapper.exists('Icon')).toBe(true);
    });

    it('should hide the icon if hideIcon is true', () => {
      const { wrapper } = setup({ theme: 'danger' });

      expect(wrapper.exists('Icon')).toBe(true);

      wrapper.setProps({ hideIcon: true });

      expect(wrapper.exists('Icon')).toBe(false);
    });
  });
});
