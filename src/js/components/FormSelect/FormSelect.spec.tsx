import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import FormSelect from './FormSelect';

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

  it('should handle isCreatable', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Select)).toHaveLength(1);
    expect(wrapper.find(Creatable)).toHaveLength(0);

    wrapper.setProps({ isCreatable: true });

    expect(wrapper.find(Select)).toHaveLength(0);
    expect(wrapper.find(Creatable)).toHaveLength(1);
  });

  it('should handle isInvalid', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('is-invalid')).toBe(false);

    wrapper.setProps({ isInvalid: true });

    expect(wrapper.hasClass('is-invalid')).toBe(true);
  });

  it('should handle isValid', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('is-valid')).toBe(false);

    wrapper.setProps({ isValid: true });

    expect(wrapper.hasClass('is-valid')).toBe(true);
  });

  it('should handle size', () => {
    const { wrapper } = setup();

    wrapper.setProps({ size: 'sm' });

    expect(wrapper.hasClass('form-select-sm')).toBe(true);

    wrapper.setProps({ size: 'lg' });

    expect(wrapper.hasClass('form-select-lg')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
