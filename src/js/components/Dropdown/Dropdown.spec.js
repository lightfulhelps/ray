import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import { Dropdown, DropdownItem, Button } from '../../';

const setup = (overrides = {}) => {
  const props = merge(
    {
      items: [
        {
          label: 'Edit',
          icon: 'edit',
          onClick: jest.fn(),
        },
        {
          label: 'Delete',
          icon: 'delete',
          onClick: jest.fn(),
        },
      ],
    },
    overrides
  );
  const wrapper = shallow(<Dropdown {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Dropdown />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the buttonIcon prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Button).prop('icon')).toEqual('menu');

    wrapper.setProps({ buttonIcon: 'edit' });

    expect(wrapper.find(Button).prop('icon')).toEqual('edit');
  });

  it('should handle the buttonSize prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Button).prop('size')).toEqual('sm');

    wrapper.setProps({ buttonSize: 'lg' });

    expect(wrapper.find(Button).prop('size')).toEqual('lg');
  });

  it('should handle the buttonTheme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Button).prop('theme')).toEqual('light');

    wrapper.setProps({ buttonTheme: 'dark' });

    expect(wrapper.find(Button).prop('theme')).toEqual('dark');
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('dropdown')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should NOT render a footer if footer prop is NOT provided', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.dropdown-footer').exists()).toBe(false);
  });

  it('should render a footer if footer prop is provided', () => {
    const { wrapper } = setup({ footer: 'Test' });

    expect(wrapper.find('.dropdown-footer').exists()).toBe(true);
    expect(wrapper.find('.dropdown-footer').text()).toEqual('Test');
  });

  it('should handle the items prop', () => {
    const { wrapper } = setup({
      items: [{ icon: 'repost', label: 'Reschedule' }, { icon: 'like', label: 'Like' }],
    });

    expect(wrapper.find(DropdownItem)).toHaveLength(2);
  });

  it('should handle the position prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-left')).toBe(true);

    wrapper.setProps({ position: 'right' });

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });

  it('should handle the theme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-dark')).toBe(true);

    wrapper.setProps({ theme: 'light' });

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-light')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });

  it('should toggle isOpen on button click', () => {
    const { wrapper } = setup();

    expect(wrapper.state('isOpen')).toBe(false);

    wrapper.find(Button).simulate('click');

    expect(wrapper.state('isOpen')).toBe(true);

    wrapper.find(Button).simulate('click');

    expect(wrapper.state('isOpen')).toBe(false);
  });

  it('should close dropdown on dropdown item click', () => {
    const onClick = jest.fn();
    const { wrapper } = setup({ items: [{ icon: 'edit', label: 'Edit', onClick }] });

    wrapper.find(Button).simulate('click');

    expect(wrapper.state('isOpen')).toBe(true);

    wrapper
      .find(DropdownItem)
      .at(0)
      .simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.state('isOpen')).toBe(false);
  });
});
