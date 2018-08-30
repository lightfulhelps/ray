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
    const { dropdownItem, props } = setup();

    let i;
    for (i = 0; i < props.items.length; i++) {
      expect(dropdownItem.at(i).html()).not.toContain('dropdown-item-footer');
    }

    expect(dropdownItem.last().html()).not.toContain('dropdown-item-footer');
  });

  it('should render a footer as the last dropdown item if footer prop is provided', () => {
    const { dropdownItem } = setup({ footer: 'some footer text' });
    expect(dropdownItem.last().html()).toContain('dropdown-item-footer');
  });
});
