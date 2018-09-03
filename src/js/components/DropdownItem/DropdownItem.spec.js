import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import DropdownItem from './DropdownItem';

const setup = (overrides = {}) => {
  const props = merge(
    {
      icon: 'edit',
      label: 'Edit',
      onClick: jest.fn(),
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
    const { wrapper } = setup({ icon: null });

    expect(wrapper.find('Icon')).toHaveLength(0);

    wrapper.setProps({ icon: 'addMedia' });

    expect(wrapper.find('Icon')).toHaveLength(1);
  });

  it('should use onClick prop', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
