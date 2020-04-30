import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import { Dropdown } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      render: jest.fn(),
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
});
