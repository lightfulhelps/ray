import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import { Dropdown, DropdownMenu, Button } from '../../';

const setup = (overrides = {}) => {
  const props = merge(
    {
      menuItems: [
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

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('dropdown')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
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

  it('should handle the menuFooter prop', () => {
    const { wrapper } = setup({ menuFooter: 'Test' });

    expect(wrapper.find(DropdownMenu).prop('footer')).toEqual('Test');
  });

  it('should handle the menuItems prop', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(DropdownMenu).prop('items')).toEqual(props.menuItems);
  });

  it('should handle the menuPosition prop', () => {
    const { wrapper } = setup({ menuPosition: 'right' });

    expect(wrapper.find(DropdownMenu).prop('position')).toEqual('right');
  });

  it('should handle the menuTheme prop', () => {
    const { wrapper } = setup({ menuTheme: 'dark' });

    expect(wrapper.find(DropdownMenu).prop('theme')).toEqual('dark');
  });

  it('should toggle isOpen on button click', () => {
    const { wrapper } = setup();

    expect(wrapper.state('isOpen')).toBe(false);

    wrapper.find(Button).simulate('click');

    expect(wrapper.state('isOpen')).toBe(true);

    wrapper.find(Button).simulate('click');

    expect(wrapper.state('isOpen')).toBe(false);
  });

  it('should pass isOpen state to DropdownMenu', () => {
    const { wrapper } = setup();

    expect(wrapper.state('isOpen')).toBe(false);
    expect(wrapper.find(DropdownMenu).prop('isOpen')).toBe(false);

    wrapper.setState({ isOpen: true });

    expect(wrapper.state('isOpen')).toBe(true);
    expect(wrapper.find(DropdownMenu).prop('isOpen')).toBe(true);
  });

  it('should set isOpen false on DropdownMenu click', () => {
    const { wrapper } = setup();

    wrapper.find(Button).simulate('click');

    expect(wrapper.state('isOpen')).toBe(true);

    wrapper.find(DropdownMenu).simulate('click');

    expect(wrapper.state('isOpen')).toBe(false);
  });
});
