import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import MediaThumbnail from './MediaThumbnail';
import FormInput from '../FormInput/FormInput';

const setup = (overrides = {}) => {
  const props = merge(
    {
      src: 'http://placeimg.com/640/480',
      alt: 'Checking Sausages invoice',
      checkbox: true,
      onClick: jest.fn(),
    },
    overrides
  );
  const wrapper = shallow(<MediaThumbnail {...props} />);

  return { wrapper, props };
};

describe('<MediaThumbnail />', () => {
  it('should render', () => {
    setup();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('media-thumbnail')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the checkbox prop', () => {
    const { wrapper } = setup({ checkbox: false });

    expect(wrapper.find(FormInput).exists()).toBe(false);

    wrapper.setProps({ checkbox: true });

    expect(wrapper.find(FormInput).exists()).toBe(true);
  });

  it('should handle the isDisabled prop', () => {
    const { wrapper } = setup({ isDisabled: false });

    expect(wrapper.hasClass('disabled')).toBe(false);

    wrapper.setProps({ isDisabled: true });

    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('should handle the isSelected prop', () => {
    const { wrapper } = setup({ isSelected: false });

    expect(wrapper.hasClass('selected')).toBe(false);

    wrapper.setProps({ isSelected: true });

    expect(wrapper.hasClass('selected')).toBe(true);
  });

  it('should call onClick with the src when clicked', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.src);
  });

  it('should not call onClick if isDisabled is true', () => {
    const { wrapper, props } = setup({ isDisabled: true });

    wrapper.simulate('click');

    expect(props.onClick).not.toHaveBeenCalled();
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
