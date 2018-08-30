import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import DropdownItem from './DropdownItem';

const setup = (overrides = {}) => {
  const props = merge(
    {
      label: 'some menu item',
    },
    overrides
  );
  const wrapper = shallow(<DropdownItem {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<DropdownItem />', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render icon if valid icon name is provided', () => {
    const { wrapper } = setup({ icon: 'addMedia' });
    expect(wrapper.find('Icon')).toHaveLength(1);
  });
});
