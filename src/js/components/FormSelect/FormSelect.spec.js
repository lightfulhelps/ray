import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import FormSelect, { getBorder, getSize } from './FormSelect';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<FormSelect {...props} />);

  return { wrapper, props };
};

describe('<FormSelect />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });

  describe('getBorder', () => {
    it('should return default border color if no arguments are passed', () => {
      expect(getBorder()).toEqual('#dee2e6');
    });
    it('should return danger border color if isInvalid is true regardless of the value of other arguments', () => {
      expect(getBorder(true, true, true)).toEqual('#f25270');
    });
    it('should return hover border color if isHovered is true and isInvalid is false', () => {
      expect(getBorder(true, true, false)).toEqual('#adb5bd');
    });
    it('should return focused border color if isFocused is true and both isInvalid and isHovered are false', () => {
      expect(getBorder(true, false, false)).toEqual('#27b0cc');
    });
  });

  describe('getSize', () => {
    it('should return default size if no argument is passed', () => {
      expect(getSize()).toEqual(
        expect.objectContaining({
          padding: '0.9375rem',
          fontSize: 'inherit',
          height: 'calc(2.875rem + 2px)',
        })
      );
    });
    it('should return default size if `size` is `md`', () => {
      expect(getSize('md')).toEqual(
        expect.objectContaining({
          padding: '0.9375rem',
          fontSize: 'inherit',
          height: 'calc(2.875rem + 2px)',
        })
      );
    });
    it('should return small size if `size` is `sm`', () => {
      expect(getSize('sm')).toEqual(
        expect.objectContaining({
          padding: '0 .5rem',
          fontSize: '.875rem',
          height: 'inherit',
        })
      );
    });
    it('should return large size if `size` is `lg`', () => {
      expect(getSize('lg')).toEqual(
        expect.objectContaining({
          padding: '.5rem 1rem',
          fontSize: '1.25rem',
          height: 'inherit',
        })
      );
    });
  });
});
