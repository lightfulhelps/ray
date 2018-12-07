import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import { DropdownItem } from '../../';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Test',
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

  it('should handle the children prop', () => {
    const { wrapper } = setup();

    expect(wrapper.children().text()).toEqual('Test');
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('dropdown-item')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the isActive prop', () => {
    const { wrapper } = setup({ isActive: true });

    expect(wrapper.hasClass('dropdown-item')).toBe(true);
    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should handle the isDisabled prop', () => {
    const { wrapper } = setup({ isDisabled: true });

    expect(wrapper.hasClass('dropdown-item')).toBe(true);
    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('should handle the isHeader prop', () => {
    const { wrapper } = setup({ isHeader: true });

    expect(wrapper.hasClass('dropdown-item')).toBe(false);
    expect(wrapper.hasClass('dropdown-header')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.type()).toBe('a');
  });

  describe('onClick', () => {
    it('should call onClick with data provided', () => {
      const { wrapper, props } = setup();

      wrapper.simulate('click', { foo: 'bar' });

      expect(props.onClick).toHaveBeenCalledTimes(1);
      expect(props.onClick).toHaveBeenCalledWith({ foo: 'bar' });
    });

    it('should preventDefault if isDisabled', () => {
      const preventDefault = jest.fn();
      const { wrapper } = setup();

      wrapper.simulate('click');

      expect(preventDefault).not.toHaveBeenCalled();

      wrapper.setProps({ isDisabled: true });

      wrapper.simulate('click', { preventDefault });

      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('should not error if onClick is not a function', () => {
      const { wrapper } = setup({ onClick: 'foo' });

      expect(() => {
        wrapper.simulate('click');
      }).not.toThrow();
    });
  });
});
