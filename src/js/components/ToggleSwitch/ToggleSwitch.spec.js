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
  it('should reder label on the left is labelAlign prop is set to left', () => {
    const { wrapper } = setup({ label: 'this is a label', labelAlign: 'left' });
    expect(wrapper).toMatchSnapshot();
  });
  it('should set disabled attribute to true if isDisabled prop is specified', () => {
    const { wrapper } = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle onClick events', () => {
    const { wrapper, props } = setup({ onClick: jest.fn() });
    wrapper.find('label').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
