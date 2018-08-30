import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

const setup = (overrides = {}) => {
  const props = merge(
    {
      items: [
        {
          label: 'edit',
          icon: 'edit',
        },
        {
          label: 'delete',
          icon: 'delete',
        },
      ],
    },
    overrides
  );
  const wrapper = shallow(<Dropdown {...props} />);

  return {
    wrapper,
    props,
    dropdownItem: wrapper.find('DropdownItem'),
  };
};

describe('<Dropdown />', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
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

  it('should handle the position prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-left')).toBe(true);

    wrapper.setProps({ position: 'right' });

    expect(wrapper.find('.dropdown-menu').hasClass('dropdown-menu-right')).toBe(true);
  });
});
