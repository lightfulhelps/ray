import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Button from './Button';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Click Me',
      onClick: jest.fn(),
    },
    overrides
  );
  const wrapper = shallow(<Button {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Button />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with an icon', () => {
    const { wrapper } = setup({ icon: 'create' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the iconSize props', () => {
    const { wrapper } = setup({ icon: 'create', iconSize: 24 });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the iconTheme props', () => {
    const { wrapper } = setup({ icon: 'create', iconTheme: 'primary' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { wrapper } = setup();

    expect(wrapper.children().text()).toEqual('Click Me');
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('btn')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the isBlock prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('btn-block')).toBe(false);

    wrapper.setProps({ isBlock: true });

    expect(wrapper.hasClass('btn-block')).toBe(true);
  });

  it('should handle the isDisabled prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('disabled')).toBe(false);

    wrapper.setProps({ isDisabled: true });

    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('should handle the isOutline prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('btn-outline-primary')).toBe(false);
    expect(wrapper.hasClass('btn-primary')).toBe(true);

    wrapper.setProps({ isOutline: true });

    expect(wrapper.hasClass('btn-outline-primary')).toBe(true);
    expect(wrapper.hasClass('btn-primary')).toBe(false);
  });

  it('should handle the size prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ size: 'lg' });

    expect(wrapper.hasClass('btn-lg')).toBe(true);

    wrapper.setProps({ size: 'sm' });

    expect(wrapper.hasClass('btn-sm')).toBe(true);
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('button');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.type()).toBe('a');

    wrapper.setProps({ tag: 'div' });

    expect(wrapper.type()).toBe('div');
  });

  it('should handle the theme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('btn-primary')).toBe(true);

    wrapper.setProps({ theme: 'secondary' });

    expect(wrapper.hasClass('btn-primary')).toBe(false);

    expect(wrapper.hasClass('btn-secondary')).toBe(true);
  });

  it('should default the type prop to button if Tag is button', () => {
    const { wrapper } = setup();

    wrapper.setProps({ tag: 'button' });

    expect(wrapper.prop('type')).toEqual('button');

    wrapper.setProps({ type: 'submit' });

    expect(wrapper.prop('type')).toEqual('submit');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.prop('type')).toEqual(undefined);
  });

  it('should handle the iconPosition prop', () => {
    const { wrapper } = setup({ icon: 'create' });

    expect(wrapper.hasClass('btn-icon-left')).toBe(true);

    wrapper.setProps({ iconPosition: 'right' });

    expect(wrapper.hasClass('btn-icon-right')).toBe(true);

    wrapper.setProps({ iconPosition: 'left' });

    expect(wrapper.hasClass('btn-icon-left')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
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
