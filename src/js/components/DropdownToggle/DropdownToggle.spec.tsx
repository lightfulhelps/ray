import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import DropdownToggle from './DropdownToggle';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<DropdownToggle {...props} />);

  return { wrapper, props };
};

describe('<DropdownToggle />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('dropdown-toggle')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isOpen', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('icon')).toEqual('caretDown');

    wrapper.setProps({ isOpen: true });

    expect(wrapper.prop('icon')).toEqual('caretUp');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
