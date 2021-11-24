import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import ToggleSwitch from './ToggleSwitch';

const setup = (overrides = {}) => {
  const props = merge(overrides);
  const wrapper = shallow(<ToggleSwitch {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<ToggleSwitch />', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render label', () => {
    const { wrapper } = setup({ label: 'this is a label' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render label on the right side if labelAlign prop is set', () => {
    const { wrapper } = setup({ label: 'this is a label', labelAlign: 'left' });
    expect(wrapper.hasClass('flex-row-reverse')).toBe(true);
    wrapper.setProps({ labelAlign: 'top' });
    expect(wrapper.hasClass('flex-column-reverse')).toBe(true);
    wrapper.setProps({ labelAlign: 'bottom' });
    expect(wrapper.hasClass('flex-column')).toBe(true);
    wrapper.setProps({ labelAlign: '' });
    expect(wrapper.hasClass('flex-column-reverse')).toBe(false);
    expect(wrapper.hasClass('flex-row-reverse')).toBe(false);
    expect(wrapper.hasClass('flex-column')).toBe(false);
  });

  it('should set disabled attribute to true if isDisabled prop is specified', () => {
    const { wrapper } = setup({ isDisabled: true });
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  it('should handle onClick events', () => {
    const { wrapper, props } = setup({ onClick: jest.fn() });
    wrapper.find('label').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should not call onClick if isDisabled', () => {
    const preventDefault = jest.fn();
    const { wrapper, props } = setup({ onClick: jest.fn(), isDisabled: true });
    wrapper.find('label').simulate('click', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
    expect(props.onClick).not.toHaveBeenCalled();
  });

  it('should handle onChange events', () => {
    const { wrapper, props } = setup({ onChange: jest.fn() });
    wrapper.find('input').simulate('change', { foo: 'bar' });
    expect(props.onChange).toHaveBeenCalledWith({ foo: 'bar' });
  });
});
