import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import { DropdownMenu, DropdownItem } from '../../';

const setup = (overrides = {}) => {
  const props = merge(
    {
      items: [
        { icon: 'edit', label: 'Edit', onClick: jest.fn() },
        { icon: 'delete', label: 'Delete', onClick: jest.fn() },
      ],
      footer: 'Test',
    },
    overrides
  );
  const wrapper = shallow(<DropdownMenu {...props} />);

  return { wrapper, props };
};

describe('<DropdownMenu />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('dropdown-menu')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });

  it('should optionally display the footer', () => {
    const { wrapper } = setup({ footer: null });

    expect(wrapper.find('.dropdown-footer').exists()).toBe(false);

    wrapper.setProps({ footer: 'Test' });

    expect(wrapper.find('.dropdown-footer').exists()).toBe(true);
    expect(wrapper.find('.dropdown-footer').text()).toEqual('Test');
  });

  it('should handle the items prop', () => {
    const { wrapper } = setup({
      items: [{ icon: 'repost', label: 'Reschedule' }, { icon: 'like', label: 'Like' }],
    });

    expect(wrapper.find(DropdownItem)).toHaveLength(2);
  });

  it('should handle the isOpen prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('show')).toBe(false);

    wrapper.setProps({ isOpen: true });

    expect(wrapper.hasClass('show')).toBe(true);
  });

  it('should handle the onClick prop', () => {
    const onClick = jest.fn();
    const { wrapper } = setup({ onClick });

    wrapper.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should handle the position prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-left')).toBe(true);

    wrapper.setProps({ position: 'right' });

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });

  it('should handle the theme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-light')).toBe(true);

    wrapper.setProps({ theme: 'dark' });

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-dark')).toBe(true);
  });
});
